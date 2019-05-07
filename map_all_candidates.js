let map = null;
let places_service = null;
let markers = [];
let prevInfoWindow = false;

const mobilize_events_url = 'https://api.mobilize.us/v1/organizations/1297/events';

function createMarkersForMobilizeUrl(url, places_service, map) {
    if (url != null) {
        $.getJSON(url, function (response) {
            createMarkersForMobilizeUrl(response['next'], places_service, map);
            const data = response['data'];
            $.each(data, function (index, event) {
                const event_name = event['title'];
                const event_timestamp = event['timeslots'][0]['start_date'];
                const event_img = event['featured_image_url'];
                const event_url = event['browser_url'];
                const event_date = timeConverter(event_timestamp);
                const event_desc = event['description'];
                const candidate = event['sponsor']['candidate_name'];
                const event_type = candidate;
                const infostring = createInfoWindowDiv(event_name, event_date, event_desc, event_type, event_img, event_url);
                if (event && 'location' in event['location']) {
                    const event_lat = event['location']['location']['latitude'];
                    const event_lng = event['location']['location']['longitude'];
                    const event_loc = new google.maps.LatLng(event_lat, event_lng);
                    createMapMarker(event_loc, map, infostring, event_type, event_timestamp, event_date);

                } else {
                    const event_zip = event['location']['postal_code'];
                    createMapMarkerFromQuery(event_zip, places_service, map, infostring, event_type, event_timestamp, event_date);
                }

            });
        });
    }
}

function createMarkersForActionNetworkEventCampaignUrl(url) {
    if (url != null) {
        $.ajax({
            beforeSend: function (request) {
                request.setRequestHeader("OSDI-API-Token", 'be3ff06b494e4034d93262a86366abd9');
            },
            dataType: "json",
            url: url,
            success: function (data) {
                const events_url = data['_links']['osdi:events']['href'];
                createMarkersForActionNetworkUrl(events_url);
            }
        });
    }
}


function createInfoWindowDiv(title, date, description, type, img_url, event_url) {
    return `<div class="text-strato-blue"><img class="featured_image" style="width:100%;" src="${img_url}"/><h2 class="mt-3">${title}</h2><span class="intro mb-2">${date} - <a href="${event_url}">${event_url}</a></span><p>${description}</p></div>`

}

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    return `${month} ${date}, ${year}`;
}

let count_dict = {
    count: 0,
    warren: 0,
    buttigieg: 0,
    castro: 0,
    booker: 0,
    swalwell: 0,
    hickenlooper: 0,
    biden: 0,
    other: 0,
};

function createMapMarker(latlng, resultsMap, infostring, category, event_timestamp, event_date) {
    count_dict['count'] = count_dict['count'] + 1;
    let icon_url = "map-icon-blue.png";
    if (category === "Elizabeth Warren") {
        count_dict['warren'] = count_dict['warren'] + 1;
        icon_url = "map-icon-orange.png";
    } else if (category === "Pete Buttigieg") {
        count_dict['buttigieg'] = count_dict['buttigieg'] + 1;
        icon_url = "map-icon-yellow.png";
    } else if (category === "Julián Castro") {
        count_dict['castro'] = count_dict['castro'] + 1;
        icon_url = "map-icon-red.png";
    } else if (category === "Cory Booker") {
        count_dict['booker'] = count_dict['booker'] + 1;
        icon_url = "map-icon-green.png";
    } else if (category === "Eric Swalwell") {
        count_dict['swalwell'] = count_dict['swalwell'] + 1;
        icon_url = "map-icon-light-blue.png";
    } else if (category === "John Hickenlooper") {
        count_dict['hickenlooper'] = count_dict['hickenlooper'] + 1;
        icon_url = "map-icon-magenta.png";
    } else if (category === "Joe Biden") {
        count_dict['biden'] = count_dict['biden'] + 1;
    } else {
        count_dict['other'] = count_dict['other'] + 1;
    }
    const icon = {
        url: icon_url,
        size: new google.maps.Size(16, 16),
        scaledSize: new google.maps.Size(12, 12),
    };

    var marker = new google.maps.Marker({
        map: resultsMap,
        position: latlng,
        category: category,
        timestamp: event_timestamp,
        icon: icon,
        opacity: 0.5,
    });

    var infowindow = new google.maps.InfoWindow({
        content: infostring
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


function createMapMarkerFromQuery(query, places_service, map, event_zip, infostring, event_type, event_timestamp, event_date) {
    var request = {
        query: query,
        fields: ['geometry'],
    };

    places_service.findPlaceFromQuery(request, function (results, status) {
        if (status === 'OK') {
            createMapMarker(results[0].geometry.location, map, event_zip, infostring, event_type, event_timestamp, event_date);
        }
    });
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

function showOnlyCategory(category) {
    for (let i = 0; i < markers.length; i++) {
        if (markers[i].category === category) {
            markers[i].setVisible(true);
        } else {
            markers[i].setVisible(false);
        }
    }
}

// Shows any markers currently in the array.
function showMarkers() {
    showAllMarkers(true);
}

function showCampaignEvents() {
    showOnlyCategory("MEET_GREET");
}

function showHouseParties() {
    showOnlyCategory("HOUSE_PARTY");
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    showAllMarkers(false);
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

function perc2color(perc) {
    if (perc < 30) {
        return "#FFF";
    } else if (perc < 35) {
        return "#CCC";
    } else if (perc < 40) {
        return "#AAA";
    } else if (perc < 45) {
        return "#888";
    } else if (perc < 50) {
        return "#666";
    } else if (perc < 55) {
        return "#444";
    } else {
        return "#222";
    }
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
        new ShowControl(centerControlDiv, showAllMarkers, 'Show All', map);
        new ShowControl(centerControlDiv, showCampaignEvents, 'Meet and Greets', map);
        new ShowControl(centerControlDiv, showHouseParties, 'House Parties', map);
        new ShowControl(centerControlDiv, showFutureEvents, 'Upcoming', map);

        centerControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.LEFT_CENTER].push(centerControlDiv);
        places_service = new google.maps.places.PlacesService(map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1116/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1263/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1264/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1270/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1295/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1297/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1310/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1316/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1354/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1360/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1361/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1362/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1374/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1392/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1393/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1396/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1415/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1416/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1435/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1436/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1456/events', places_service, map);
        createMarkersForMobilizeUrl('https://api.mobilize.us/v1/organizations/1466/events', places_service, map);
    });
}
