let map = null;
let places_service = null;
let markers = [];
let prevInfoWindow = false;

const candidate_data = {
    buttigieg: {
        icon_url: "map-icon-green.png",
        event_count: 0,
        display_name: "Buttigieg",
        organization_ids: ["1297", "1477", "1478", "1479", "1480"]
    },
};

const location_dict = {};

const organization_ids = ["1297", "1477", "1478", "1479", "1480"];

class Event {
    constructor(title, timestamp, desc, event_type, image_url, external_url) {
        this.title = title;
        this.timestamp = timestamp;
        this.description = desc;
        this.event_type = event_type;
        this.image_url = image_url;
        this.external_url = external_url;
    }

    formattedDate() {
        const a = new Date(this.timestamp * 1000);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const date = a.getDate();
        const hour = a.getHours();
        const min = a.getMinutes();
        const sec = a.getSeconds();
        return `${month} ${date}, ${year}`;
    }

    createMapMarker(event_location, map) {
        const june_26_ts = 1561521600;
        const june_27_ts = 1561694399;
        if (this.timestamp < june_26_ts || this.timestamp > june_27_ts) {
            return;
        }

        const scaled_icon = {
            url: "map-icon-yellow.png",
            size: new google.maps.Size(16, 16),
            scaledSize: new google.maps.Size(12, 12),
        };

        location_dict[`${this.external_url}`] = event_location;

        const marker = new google.maps.Marker({
            map: map,
            position: event_location,
            event_type: this.event_type,
            event_url: this.external_url,
            timestamp: this.timestamp,
            icon: scaled_icon,
            opacity: 0.5,
        });

        const infowindow = new google.maps.InfoWindow({
            content: this.formattedInfoWindow(),
        });

        marker.addListener('click', function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infowindow;
            infowindow.open(map, marker);
        });

        markers.push(marker);
    }

    createMapMarkerFromQuery(location_query, places_service, map) {
        const lq = location_query;
        const ps = places_service;
        const m = map;
        const this_event = this;
        limited(function() {
            const request = {
                query: lq,
                fields: ['geometry'],
            };
            ps.findPlaceFromQuery(request, function (results, status) {
                if (status === 'OK') {
                    this_event.createMapMarker(results[0].geometry.location, m);
                } else if (status === 'OVER_QUERY_LIMIT') {
                    var millisecondsToWait = Math.random() * 5000;
                    setTimeout(function() {
                        this_event.createMapMarkerFromQuery(location_query, places_service, map);
                    }, millisecondsToWait);

                }
            });
        });
    }


    formattedInfoWindow() {
        return `<div class="text-strato-blue"><img class="featured_image" style="width:100%;" src="${this.image_url}"/><h2 class="mt-3">${this.title}</h2><span class="intro mb-2">${this.formattedDate()} - <a target="_blank" href="${this.external_url}">${this.external_url}</a></span><p>${this.description}</p></div>`
    }


}

var factory = function(){
    var time = 0, count = 0, difference = 0, queue = [];
    return function limit(func){
        if(func) queue.push(func);
        difference = 1000 - (window.performance.now() - time);
        if(difference <= 0) {
            time = window.performance.now();
            count = 0;
        }
        if(++count <= 10) (queue.shift())();
        else setTimeout(limit, difference);
    };
};

var limited = factory();

let place = null;
let count = 0;
let count_m = 0;
let saved_event = null;

function createMarkersForMobilizeUrl(url, places_service, map,) {
    if (url != null) {
        $.getJSON(url, function (response) {
            createMarkersForMobilizeUrl(response['next'], places_service, map); // launch for next url
            const data = response['data'];
            $.each(data, function (index, event) {
                const e = new Event(event['title'], event['timeslots'][0]['start_date'], event['description'],
                    event['event_type'], event['featured_image_url'], event['browser_url']);
                if (event && event['location']) {
                    if ('location' in event['location']) {
                        const event_loc = new google.maps.LatLng(event['location']['location']['latitude'],
                            event['location']['location']['longitude']);
                        e.createMapMarker(event_loc, map);
                    } else if (e.external_url in location_data) {
                        const event_loc = new google.maps.LatLng(location_data[e.external_url]['lat'],
                                                    location_data[e.external_url]['lng']);
                        e.createMapMarker(event_loc, map);
                    }
                    else {
                        const event_zip = event['location']['postal_code'];
                        const event_locality = event['location']['locality'];
                        const event_region = event['location']['region'];
                        e.createMapMarkerFromQuery(`${event_locality}, ${event_region} ${event_zip}`, places_service, map);
                    }
                }

            });
        });
    }
}

function showAllMarkers(bool) {
    for (let i = 0; i < markers.length; i++) {
        if (bool) {
            markers[i].setVisible(true);
        } else {
            markers[i].setVisible(false);
        }
    }
}

function showFutureEvents() {
    const now = Date.now();
    for (let i = 0; i < markers.length; i++) {
        if (markers[i].timestamp * 1000 > now) {
            markers[i].setVisible(true);
        } else {
            markers[i].setVisible(false);
        }
    }
}

function showOnlyType(event_type) {
    for (let i = 0; i < markers.length; i++) {
        if (markers[i].event_type === event_type) {
            markers[i].setVisible(true);
        } else {
            markers[i].setVisible(false);
        }
    }
}

function ShowControl(controlDiv, f, title, map) {

    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.display = 'block';
    controlUI.style.border = '1px solid #000';
    controlUI.style.cursor = 'pointer';
    controlUI.style.textAlign = 'center';
    controlUI.title = title;
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = title;
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener('click', f);

}

function initMap() {
    $.getJSON("map-options.json", function (mapstyle) {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 5,
            center: {lat: 39.8097343, lng: -98.5556199},
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            scaleControl: true,
            mapTypeControl: false,
            fullscreenControl: true,
            streetViewControl: false,
            rotateControl: false,
            styles: mapstyle,
        });


        // Create the DIV to hold the control and call the CenterControl()
        // constructor passing in this DIV.
        var centerControlDiv = document.createElement('div');
        centerControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.LEFT_CENTER].push(centerControlDiv);

        // Create global controls
        // new ShowControl(centerControlDiv, showAllMarkers, 'Show All', map);
        // new ShowControl(centerControlDiv, showFutureEvents, 'Upcoming', map);
        // new ShowControl(centerControlDiv, showOnlyType("HOUSE_PARTY"), 'Watch Parties', map);

        places_service = new google.maps.places.PlacesService(map); // initialize the places service for location queries
        for (let i = 0; i < organization_ids.length; i++) {
            createMarkersForMobilizeUrl(`https://api.mobilize.us/v1/organizations/${organization_ids[i]}/events`, places_service, map);
        }
    });
}



