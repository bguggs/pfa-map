const location_data = JSON.parse(`{
  "https://www.mobilize.us/iowaforpete/event/94609/": {
    "lat": 41.3308893,
    "lng": -94.02867800000001
  },
  "https://www.mobilize.us/southcarolinaforpete/event/96697/": {
    "lat": 34.6856555,
    "lng": -82.9532036
  },
  "https://www.mobilize.us/iowaforpete/event/96625/": {
    "lat": 40.9296034,
    "lng": -94.9766416
  },
  "https://www.mobilize.us/newhampshireforpete/event/94843/": {
    "lat": 43.0717552,
    "lng": -70.76255320000001
  },
  "https://www.mobilize.us/iowaforpete/event/97887/": {
    "lat": 41.6613587,
    "lng": -91.49182350000001
  },
  "https://www.mobilize.us/newhampshireforpete/event/93058/": {
    "lat": 43.70195830000001,
    "lng": -72.2889045
  },
  "https://www.mobilize.us/iowaforpete/event/97844/": {
    "lat": 41.6113703,
    "lng": -91.5015009
  },
  "https://www.mobilize.us/newhampshireforpete/event/94839/": {
    "lat": 43.2086343,
    "lng": -71.54865619999998
  },
  "https://www.mobilize.us/iowaforpete/event/93440/": {
    "lat": 42.0166364,
    "lng": -91.66635229999997
  },
  "https://www.mobilize.us/newhampshireforpete/event/94841/": {
    "lat": 42.9561485,
    "lng": -71.4418101
  },
  "https://www.mobilize.us/peteforamerica/event/87664/": {
    "lat": 41.5443613,
    "lng": -87.50990569999999
  },
  "https://www.mobilize.us/peteforamerica/event/87655/": {
    "lat": 36.1198588,
    "lng": -80.07365329999999
  },
  "https://www.mobilize.us/peteforamerica/event/87704/": {
    "lat": 41.6144325,
    "lng": -94.01745299999999
  },
  "https://www.mobilize.us/peteforamerica/event/87709/": {
    "lat": 39.3729916,
    "lng": -77.4587239
  },
  "https://www.mobilize.us/newhampshireforpete/event/98134/": {
    "lat": 42.98234410000001,
    "lng": -70.82388739999999
  },
  "https://www.mobilize.us/newhampshireforpete/event/98128/": {
    "lat": 42.7795584,
    "lng": -71.51304449999998
  },
  "https://www.mobilize.us/peteforamerica/event/87740/": {
    "lat": 34.5034394,
    "lng": -82.65013320000003
  },
  "https://www.mobilize.us/peteforamerica/event/87741/": {
    "lat": 42.3517272,
    "lng": -71.04086239999998
  },
  "https://www.mobilize.us/peteforamerica/event/87794/": {
    "lat": 34.1531191,
    "lng": -118.2614332
  },
  "https://www.mobilize.us/peteforamerica/event/87800/": {
    "lat": 37.9360135,
    "lng": -107.81245760000002
  },
  "https://www.mobilize.us/peteforamerica/event/87867/": {
    "lat": 37.7561438,
    "lng": -122.43256819999999
  },
  "https://www.mobilize.us/peteforamerica/event/87874/": {
    "lat": 42.24758629999999,
    "lng": -83.8260884
  },
  "https://www.mobilize.us/peteforamerica/event/87957/": {
    "lat": 39.2079206,
    "lng": -84.52746159999998
  },
  "https://www.mobilize.us/peteforamerica/event/87967/": {
    "lat": 45.4874111,
    "lng": -122.6875541
  },
  "https://www.mobilize.us/peteforamerica/event/87674/": {
    "lat": 33.7717008,
    "lng": -84.3726049
  },
  "https://www.mobilize.us/peteforamerica/event/89824/": {
    "lat": 38.232417,
    "lng": -122.6366524
  },
  "https://www.mobilize.us/peteforamerica/event/87762/": {
    "lat": 40.9719853,
    "lng": -86.5561179
  },
  "https://www.mobilize.us/peteforamerica/event/87783/": {
    "lat": 33.2909517,
    "lng": -84.45936999999998
  },
  "https://www.mobilize.us/peteforamerica/event/87677/": {
    "lat": 38.9930421,
    "lng": -94.68120859999999
  },
  "https://www.mobilize.us/peteforamerica/event/87721/": {
    "lat": 33.8613433,
    "lng": -116.57278150000002
  },
  "https://www.mobilize.us/peteforamerica/event/93440/": {
    "lat": 42.0166364,
    "lng": -91.66635229999997
  },
  "https://www.mobilize.us/peteforamerica/event/87875/": {
    "lat": 40.477779,
    "lng": -88.9892448
  },
  "https://www.mobilize.us/peteforamerica/event/94843/": {
    "lat": 43.0717552,
    "lng": -70.76255320000001
  },
  "https://www.mobilize.us/peteforamerica/event/87717/": {
    "lat": 33.5114334,
    "lng": -112.06850270000001
  },
  "https://www.mobilize.us/peteforamerica/event/96287/": {
    "lat": 46.8083268,
    "lng": -100.78373920000001
  },
  "https://www.mobilize.us/peteforamerica/event/96279/": {
    "lat": 38.29975,
    "lng": -122.66642509999997
  },
  "https://www.mobilize.us/peteforamerica/event/96349/": {
    "lat": 33.9191799,
    "lng": -118.4164652
  },
  "https://www.mobilize.us/peteforamerica/event/96337/": {
    "lat": 34.0127473,
    "lng": -117.1617685
  },
  "https://www.mobilize.us/peteforamerica/event/96383/": {
    "lat": 39.02623510000001,
    "lng": -88.85372540000003
  },
  "https://www.mobilize.us/peteforamerica/event/96385/": {
    "lat": 37.3326639,
    "lng": -121.89183639999999
  },
  "https://www.mobilize.us/peteforamerica/event/96499/": {
    "lat": 26.180392,
    "lng": -80.13727569999998
  },
  "https://www.mobilize.us/peteforamerica/event/96504/": {
    "lat": 42.0499476,
    "lng": -71.6436028
  },
  "https://www.mobilize.us/peteforamerica/event/96592/": {
    "lat": 39.185008,
    "lng": -77.31059629999999
  },
  "https://www.mobilize.us/peteforamerica/event/96587/": {
    "lat": 43.16368749999999,
    "lng": -73.07232679999998
  },
  "https://www.mobilize.us/peteforamerica/event/96651/": {
    "lat": 34.10885,
    "lng": -118.2234229
  },
  "https://www.mobilize.us/peteforamerica/event/96648/": {
    "lat": 37.5061069,
    "lng": -77.6490005
  },
  "https://www.mobilize.us/peteforamerica/event/96697/": {
    "lat": 34.6856555,
    "lng": -82.9532036
  },
  "https://www.mobilize.us/peteforamerica/event/96702/": {
    "lat": 42.110535,
    "lng": -70.70495199999999
  },
  "https://www.mobilize.us/peteforamerica/event/87916/": {
    "lat": 37.5834425,
    "lng": -77.4185584
  },
  "https://www.mobilize.us/peteforamerica/event/87876/": {
    "lat": 35.9981205,
    "lng": -78.89204440000003
  },
  "https://www.mobilize.us/peteforamerica/event/96823/": {
    "lat": 39.3425174,
    "lng": -77.3668965
  },
  "https://www.mobilize.us/peteforamerica/event/96803/": {
    "lat": 34.1873985,
    "lng": -118.39002040000003
  },
  "https://www.mobilize.us/peteforamerica/event/96849/": {
    "lat": 35.5147939,
    "lng": -84.79022229999998
  },
  "https://www.mobilize.us/peteforamerica/event/96848/": {
    "lat": 38.0293059,
    "lng": -78.47667810000002
  },
  "https://www.mobilize.us/peteforamerica/event/96900/": {
    "lat": 44.7630567,
    "lng": -85.62063169999999
  },
  "https://www.mobilize.us/peteforamerica/event/87759/": {
    "lat": 36.0564654,
    "lng": -80.33245140000002
  },
  "https://www.mobilize.us/peteforamerica/event/96963/": {
    "lat": 27.7696063,
    "lng": -82.63213759999996
  },
  "https://www.mobilize.us/peteforamerica/event/96970/": {
    "lat": 41.8269891,
    "lng": -73.15856259999998
  },
  "https://www.mobilize.us/peteforamerica/event/97088/": {
    "lat": 29.99883119999999,
    "lng": -95.26215530000002
  },
  "https://www.mobilize.us/peteforamerica/event/97180/": {
    "lat": 40.0215499,
    "lng": -86.19551690000003
  },
  "https://www.mobilize.us/peteforamerica/event/97183/": {
    "lat": 34.0448583,
    "lng": -118.4484367
  },
  "https://www.mobilize.us/peteforamerica/event/97322/": {
    "lat": 39.9559288,
    "lng": -75.15745670000001
  },
  "https://www.mobilize.us/peteforamerica/event/97326/": {
    "lat": 40.6681669,
    "lng": -73.98006450000003
  },
  "https://www.mobilize.us/peteforamerica/event/97402/": {
    "lat": 38.8327423,
    "lng": -77.20602409999998
  },
  "https://www.mobilize.us/peteforamerica/event/97399/": {
    "lat": 35.1185868,
    "lng": -120.59072520000001
  },
  "https://www.mobilize.us/peteforamerica/event/97504/": {
    "lat": 32.7398671,
    "lng": -117.12059249999999
  },
  "https://www.mobilize.us/peteforamerica/event/97521/": {
    "lat": 35.9805462,
    "lng": -86.76174900000001
  },
  "https://www.mobilize.us/peteforamerica/event/97758/": {
    "lat": 41.6530149,
    "lng": -86.34781509999999
  },
  "https://www.mobilize.us/peteforamerica/event/97754/": {
    "lat": 32.6980553,
    "lng": -117.12059249999999
  },
  "https://www.mobilize.us/peteforamerica/event/87831/": {
    "lat": 32.7398671,
    "lng": -117.12059249999999
  },
  "https://www.mobilize.us/peteforamerica/event/87971/": {
    "lat": 34.0880507,
    "lng": -118.29651209999997
  },
  "https://www.mobilize.us/peteforamerica/event/97828/": {
    "lat": 39.0703574,
    "lng": -94.5676009
  },
  "https://www.mobilize.us/peteforamerica/event/97827/": {
    "lat": 35.1562307,
    "lng": -85.28259379999997
  },
  "https://www.mobilize.us/peteforamerica/event/97887/": {
    "lat": 41.6613587,
    "lng": -91.49182350000001
  },
  "https://www.mobilize.us/peteforamerica/event/97913/": {
    "lat": 38.8681054,
    "lng": -77.20027449999998
  },
  "https://www.mobilize.us/peteforamerica/event/97993/": {
    "lat": 39.0542102,
    "lng": -77.11975210000003
  },
  "https://www.mobilize.us/peteforamerica/event/97970/": {
    "lat": 42.2771417,
    "lng": -71.09137479999998
  },
  "https://www.mobilize.us/peteforamerica/event/98128/": {
    "lat": 42.7795584,
    "lng": -71.51304449999998
  },
  "https://www.mobilize.us/peteforamerica/event/98116/": {
    "lat": 45.0563001,
    "lng": -93.25994589999999
  },
  "https://www.mobilize.us/peteforamerica/event/98232/": {
    "lat": 38.9894702,
    "lng": -77.13701149999997
  },
  "https://www.mobilize.us/peteforamerica/event/98233/": {
    "lat": 38.9012225,
    "lng": -77.26526039999999
  },
  "https://www.mobilize.us/peteforamerica/event/98349/": {
    "lat": 38.9502497,
    "lng": -77.01614359999996
  },
  "https://www.mobilize.us/peteforamerica/event/98344/": {
    "lat": 27.4081935,
    "lng": -82.5294065
  },
  "https://www.mobilize.us/peteforamerica/event/87735/": {
    "lat": 33.0801429,
    "lng": -83.23209910000003
  },
  "https://www.mobilize.us/peteforamerica/event/87736/": {
    "lat": 39.829875,
    "lng": -86.13955980000003
  },
  "https://www.mobilize.us/peteforamerica/event/94839/": {
    "lat": 43.2086343,
    "lng": -71.54865619999998
  },
  "https://www.mobilize.us/peteforamerica/event/87731/": {
    "lat": 34.0586259,
    "lng": -84.38574419999998
  },
  "https://www.mobilize.us/peteforamerica/event/93058/": {
    "lat": 43.70195830000001,
    "lng": -72.2889045
  },
  "https://www.mobilize.us/peteforamerica/event/95967/": {
    "lat": 47.2529105,
    "lng": -122.4417426
  },
  "https://www.mobilize.us/peteforamerica/event/96332/": {
    "lat": 33.1158665,
    "lng": -117.185294
  },
  "https://www.mobilize.us/peteforamerica/event/87675/": {
    "lat": 36.1675026,
    "lng": -94.21283369999998
  },
  "https://www.mobilize.us/peteforamerica/event/96267/": {
    "lat": 29.7945258,
    "lng": -95.11194069999999
  },
  "https://www.mobilize.us/peteforamerica/event/96369/": {
    "lat": 47.3165043,
    "lng": -122.32239749999997
  },
  "https://www.mobilize.us/peteforamerica/event/96523/": {
    "lat": 39.7845048,
    "lng": -104.97977530000003
  },
  "https://www.mobilize.us/peteforamerica/event/96472/": {
    "lat": 42.3421605,
    "lng": -71.12405590000003
  },
  "https://www.mobilize.us/peteforamerica/event/87719/": {
    "lat": 43.106456,
    "lng": -76.21770459999999
  },
  "https://www.mobilize.us/peteforamerica/event/96552/": {
    "lat": 40.9719853,
    "lng": -86.5561179
  },
  "https://www.mobilize.us/peteforamerica/event/96522/": {
    "lat": 33.5563145,
    "lng": -117.77251999999999
  },
  "https://www.mobilize.us/peteforamerica/event/87981/": {
    "lat": 47.2529105,
    "lng": -122.4417426
  },
  "https://www.mobilize.us/peteforamerica/event/96677/": {
    "lat": 43.0886431,
    "lng": -70.68116129999999
  },
  "https://www.mobilize.us/peteforamerica/event/96673/": {
    "lat": 41.67087710000001,
    "lng": -86.61585379999997
  },
  "https://www.mobilize.us/peteforamerica/event/96851/": {
    "lat": 45.59087340000001,
    "lng": -122.69316980000002
  },
  "https://www.mobilize.us/peteforamerica/event/96741/": {
    "lat": 40.06811920000001,
    "lng": -82.5196037
  },
  "https://www.mobilize.us/peteforamerica/event/96757/": {
    "lat": 34.050751,
    "lng": -118.38417770000001
  },
  "https://www.mobilize.us/peteforamerica/event/96846/": {
    "lat": 38.9091199,
    "lng": -77.2922332
  },
  "https://www.mobilize.us/peteforamerica/event/96843/": {
    "lat": 29.7508512,
    "lng": -95.4122817
  },
  "https://www.mobilize.us/peteforamerica/event/96885/": {
    "lat": 42.6763235,
    "lng": -71.014118
  },
  "https://www.mobilize.us/peteforamerica/event/96891/": {
    "lat": 33.921563,
    "lng": -78.02026769999998
  },
  "https://www.mobilize.us/peteforamerica/event/96915/": {
    "lat": 40.8562383,
    "lng": -73.9653715
  },
  "https://www.mobilize.us/peteforamerica/event/97031/": {
    "lat": 40.4974532,
    "lng": -80.06034449999999
  },
  "https://www.mobilize.us/peteforamerica/event/97485/": {
    "lat": 42.2660881,
    "lng": -83.71460009999998
  },
  "https://www.mobilize.us/peteforamerica/event/97647/": {
    "lat": 29.5857075,
    "lng": -98.41293960000002
  },
  "https://www.mobilize.us/peteforamerica/event/97478/": {
    "lat": 37.5410261,
    "lng": -77.43864289999999
  },
  "https://www.mobilize.us/peteforamerica/event/97421/": {
    "lat": 39.9350642,
    "lng": -75.15161940000002
  },
  "https://www.mobilize.us/peteforamerica/event/97768/": {
    "lat": 42.37954089999999,
    "lng": -71.0646337
  },
  "https://www.mobilize.us/peteforamerica/event/97465/": {
    "lat": 39.2014404,
    "lng": -85.92137960000002
  },
  "https://www.mobilize.us/peteforamerica/event/97419/": {
    "lat": 40.7728432,
    "lng": -73.9558204
  },
  "https://www.mobilize.us/peteforamerica/event/97954/": {
    "lat": 39.6166715,
    "lng": -104.87465079999998
  },
  "https://www.mobilize.us/peteforamerica/event/97798/": {
    "lat": 44.0581728,
    "lng": -121.31530959999998
  },
  "https://www.mobilize.us/peteforamerica/event/97809/": {
    "lat": 40.1466378,
    "lng": -74.99522589999998
  },
  "https://www.mobilize.us/peteforamerica/event/97931/": {
    "lat": 38.912068,
    "lng": -77.01902280000002
  },
  "https://www.mobilize.us/peteforamerica/event/97940/": {
    "lat": 37.4484914,
    "lng": -122.18028119999997
  },
  "https://www.mobilize.us/peteforamerica/event/98297/": {
    "lat": 38.5974642,
    "lng": -121.53129100000001
  },
  "https://www.mobilize.us/peteforamerica/event/98198/": {
    "lat": 38.9302229,
    "lng": -77.34392830000002
  },
  "https://www.mobilize.us/peteforamerica/event/98227/": {
    "lat": 39.7713425,
    "lng": -86.15737089999999
  },
  "https://www.mobilize.us/peteforamerica/event/87722/": {
    "lat": 33.8613433,
    "lng": -116.57278150000002
  },
  "https://www.mobilize.us/peteforamerica/event/87730/": {
    "lat": 39.2053078,
    "lng": -86.4794359
  },
  "https://www.mobilize.us/peteforamerica/event/87679/": {
    "lat": 38.9516143,
    "lng": -77.11975210000003
  },
  "https://www.mobilize.us/peteforamerica/event/98360/": {
    "lat": 39.0684387,
    "lng": -84.32264880000002
  },
  "https://www.mobilize.us/peteforamerica/event/96389/": {
    "lat": 34.1540054,
    "lng": -118.49223549999999
  },
  "https://www.mobilize.us/peteforamerica/event/96551/": {
    "lat": 28.1988979,
    "lng": -80.78794069999998
  },
  "https://www.mobilize.us/peteforamerica/event/87724/": {
    "lat": 38.5844193,
    "lng": -90.29487970000002
  },
  "https://www.mobilize.us/peteforamerica/event/96312/": {
    "lat": 44.1858193,
    "lng": -88.46260899999999
  },
  "https://www.mobilize.us/peteforamerica/event/96377/": {
    "lat": 42.1675254,
    "lng": -87.89701400000001
  },
  "https://www.mobilize.us/peteforamerica/event/96511/": {
    "lat": 39.7284944,
    "lng": -121.83747770000002
  },
  "https://www.mobilize.us/peteforamerica/event/87861/": {
    "lat": 47.8408323,
    "lng": -120.0168079
  },
  "https://www.mobilize.us/peteforamerica/event/96847/": {
    "lat": 30.5229719,
    "lng": -87.90332610000002
  },
  "https://www.mobilize.us/peteforamerica/event/96454/": {
    "lat": 43.0385133,
    "lng": -76.0798006
  },
  "https://www.mobilize.us/peteforamerica/event/96605/": {
    "lat": 40.7218318,
    "lng": -74.04470029999999
  },
  "https://www.mobilize.us/peteforamerica/event/96926/": {
    "lat": 28.6678749,
    "lng": -81.31243410000002
  },
  "https://www.mobilize.us/peteforamerica/event/96872/": {
    "lat": 40.7602619,
    "lng": -73.9932872
  },
  "https://www.mobilize.us/peteforamerica/event/96906/": {
    "lat": 45.7328944,
    "lng": -122.54648559999998
  },
  "https://www.mobilize.us/peteforamerica/event/96975/": {
    "lat": 39.8433769,
    "lng": -86.39777350000003
  },
  "https://www.mobilize.us/peteforamerica/event/87845/": {
    "lat": 32.2992109,
    "lng": -110.84337089999997
  },
  "https://www.mobilize.us/peteforamerica/event/97189/": {
    "lat": 38.9156487,
    "lng": -77.07371490000003
  },
  "https://www.mobilize.us/peteforamerica/event/97263/": {
    "lat": 39.6444898,
    "lng": -86.86473160000003
  },
  "https://www.mobilize.us/peteforamerica/event/97119/": {
    "lat": 39.165325,
    "lng": -86.52638569999999
  },
  "https://www.mobilize.us/peteforamerica/event/97770/": {
    "lat": 40.7658303,
    "lng": -89.59690599999999
  },
  "https://www.mobilize.us/peteforamerica/event/97177/": {
    "lat": 41.957544,
    "lng": -86.48557490000002
  },
  "https://www.mobilize.us/peteforamerica/event/97740/": {
    "lat": 41.0644747,
    "lng": -85.17385760000002
  },
  "https://www.mobilize.us/peteforamerica/event/87947/": {
    "lat": 39.9119721,
    "lng": -82.97166170000003
  },
  "https://www.mobilize.us/peteforamerica/event/97812/": {
    "lat": 29.5676137,
    "lng": -98.60507359999997
  },
  "https://www.mobilize.us/peteforamerica/event/90030/": {
    "lat": 33.5636878,
    "lng": -112.05956029999999
  },
  "https://www.mobilize.us/peteforamerica/event/97800/": {
    "lat": 41.6724038,
    "lng": -86.2539519
  },
  "https://www.mobilize.us/peteforamerica/event/97997/": {
    "lat": 42.2094839,
    "lng": -85.78445299999998
  },
  "https://www.mobilize.us/peteforamerica/event/98176/": {
    "lat": 43.5187336,
    "lng": -72.12976530000003
  },
  "https://www.mobilize.us/peteforamerica/event/87687/": {
    "lat": 33.8092255,
    "lng": -84.28054780000002
  },
  "https://www.mobilize.us/peteforamerica/event/98263/": {
    "lat": 34.8030992,
    "lng": -92.24827049999999
  },
  "https://www.mobilize.us/peteforamerica/event/94609/": {
    "lat": 41.3308893,
    "lng": -94.02867800000001
  },
  "https://www.mobilize.us/peteforamerica/event/96646/": {
    "lat": 40.2109404,
    "lng": -75.27823169999999
  },
  "https://www.mobilize.us/peteforamerica/event/96370/": {
    "lat": 38.8984667,
    "lng": -94.70188999999999
  },
  "https://www.mobilize.us/peteforamerica/event/96489/": {
    "lat": 41.9543997,
    "lng": -73.4298073
  },
  "https://www.mobilize.us/peteforamerica/event/87718/": {
    "lat": 41.9403795,
    "lng": -87.65318049999996
  },
  "https://www.mobilize.us/peteforamerica/event/96330/": {
    "lat": 41.9965452,
    "lng": -88.314212
  },
  "https://www.mobilize.us/peteforamerica/event/87712/": {
    "lat": 41.9901263,
    "lng": -87.66304500000001
  },
  "https://www.mobilize.us/peteforamerica/event/96678/": {
    "lat": 40.8138912,
    "lng": -73.96243270000002
  },
  "https://www.mobilize.us/peteforamerica/event/87902/": {
    "lat": 41.377456,
    "lng": -89.07524990000002
  },
  "https://www.mobilize.us/peteforamerica/event/96763/": {
    "lat": 47.1474103,
    "lng": -122.32398899999998
  },
  "https://www.mobilize.us/peteforamerica/event/97043/": {
    "lat": 41.4470451,
    "lng": -81.92074230000003
  },
  "https://www.mobilize.us/peteforamerica/event/96527/": {
    "lat": 33.4577032,
    "lng": -81.96439129999999
  },
  "https://www.mobilize.us/peteforamerica/event/87767/": {
    "lat": 39.7716518,
    "lng": -86.40860609999999
  },
  "https://www.mobilize.us/peteforamerica/event/96976/": {
    "lat": 38.9516143,
    "lng": -77.11975210000003
  },
  "https://www.mobilize.us/peteforamerica/event/96715/": {
    "lat": 35.9049831,
    "lng": -78.70882949999998
  },
  "https://www.mobilize.us/peteforamerica/event/97471/": {
    "lat": 38.647459,
    "lng": -90.25730999999996
  },
  "https://www.mobilize.us/peteforamerica/event/96845/": {
    "lat": 43.9546648,
    "lng": -69.2504563
  },
  "https://www.mobilize.us/peteforamerica/event/97336/": {
    "lat": 37.7717185,
    "lng": -122.44389289999998
  },
  "https://www.mobilize.us/peteforamerica/event/97458/": {
    "lat": 42.3001868,
    "lng": -74.56976170000002
  },
  "https://www.mobilize.us/peteforamerica/event/97861/": {
    "lat": 40.2364486,
    "lng": -83.36714319999999
  },
  "https://www.mobilize.us/peteforamerica/event/97951/": {
    "lat": 45.4874111,
    "lng": -122.6875541
  },
  "https://www.mobilize.us/peteforamerica/event/97929/": {
    "lat": 38.2694347,
    "lng": -108.54786910000001
  },
  "https://www.mobilize.us/peteforamerica/event/98137/": {
    "lat": 42.4884618,
    "lng": -71.1329685
  },
  "https://www.mobilize.us/peteforamerica/event/96264/": {
    "lat": 41.1859156,
    "lng": -111.89263030000001
  },
  "https://www.mobilize.us/peteforamerica/event/97832/": {
    "lat": 33.9900649,
    "lng": -84.34368810000001
  },
  "https://www.mobilize.us/peteforamerica/event/87846/": {
    "lat": 40.0683417,
    "lng": -86.06315610000001
  },
  "https://www.mobilize.us/peteforamerica/event/98045/": {
    "lat": 35.9980929,
    "lng": -94.08999110000002
  },
  "https://www.mobilize.us/peteforamerica/event/87787/": {
    "lat": 27.9552692,
    "lng": -82.45631989999998
  },
  "https://www.mobilize.us/peteforamerica/event/96724/": {
    "lat": 45.056004,
    "lng": -92.80884429999998
  },
  "https://www.mobilize.us/peteforamerica/event/96722/": {
    "lat": 47.6338217,
    "lng": -122.32154479999997
  },
  "https://www.mobilize.us/peteforamerica/event/96652/": {
    "lat": 39.047958,
    "lng": -77.48166930000002
  },
  "https://www.mobilize.us/peteforamerica/event/97398/": {
    "lat": 34.0931603,
    "lng": -118.37833469999998
  },
  "https://www.mobilize.us/peteforamerica/event/96996/": {
    "lat": 34.2985355,
    "lng": -119.22045479999997
  },
  "https://www.mobilize.us/peteforamerica/event/97061/": {
    "lat": 40.6772802,
    "lng": -74.00944709999999
  },
  "https://www.mobilize.us/peteforamerica/event/96828/": {
    "lat": 35.1958704,
    "lng": -106.69398030000002
  },
  "https://www.mobilize.us/peteforamerica/event/97099/": {
    "lat": 32.7248887,
    "lng": -97.31385539999997
  },
  "https://www.mobilize.us/peteforamerica/event/96839/": {
    "lat": 42.7043124,
    "lng": -84.53270379999998
  },
  "https://www.mobilize.us/peteforamerica/event/97786/": {
    "lat": 34.1893001,
    "lng": -118.2702036
  },
  "https://www.mobilize.us/peteforamerica/event/97614/": {
    "lat": 38.149576,
    "lng": -79.07169579999999
  },
  "https://www.mobilize.us/peteforamerica/event/97873/": {
    "lat": 42.279853,
    "lng": -71.79190269999998
  },
  "https://www.mobilize.us/peteforamerica/event/98224/": {
    "lat": 35.2827524,
    "lng": -120.6596156
  },
  "https://www.mobilize.us/peteforamerica/event/87768/": {
    "lat": 30.3317278,
    "lng": -97.70515799999998
  },
  "https://www.mobilize.us/peteforamerica/event/97783/": {
    "lat": 39.7380371,
    "lng": -105.0265195
  },
  "https://www.mobilize.us/peteforamerica/event/98059/": {
    "lat": 35.0535496,
    "lng": -80.82116959999996
  },
  "https://www.mobilize.us/peteforamerica/event/98363/": {
    "lat": 40.6986772,
    "lng": -73.9859414
  },
  "https://www.mobilize.us/peteforamerica/event/96486/": {
    "lat": 39.9559288,
    "lng": -75.15745670000001
  },
  "https://www.mobilize.us/peteforamerica/event/96468/": {
    "lat": 41.6414438,
    "lng": -80.15144839999999
  },
  "https://www.mobilize.us/peteforamerica/event/96520/": {
    "lat": 39.7379842,
    "lng": -86.15991489999999
  },
  "https://www.mobilize.us/peteforamerica/event/97120/": {
    "lat": 43.2086343,
    "lng": -71.54865619999998
  },
  "https://www.mobilize.us/peteforamerica/event/97833/": {
    "lat": 42.5415192,
    "lng": -83.30410610000001
  },
  "https://www.mobilize.us/peteforamerica/event/96887/": {
    "lat": 39.0555831,
    "lng": -95.67472090000001
  },
  "https://www.mobilize.us/peteforamerica/event/97094/": {
    "lat": 40.7452159,
    "lng": -73.57119119999999
  },
  "https://www.mobilize.us/peteforamerica/event/87725/": {
    "lat": 33.7440941,
    "lng": -84.377861
  },
  "https://www.mobilize.us/peteforamerica/event/96478/": {
    "lat": 40.8173411,
    "lng": -73.94332989999998
  },
  "https://www.mobilize.us/peteforamerica/event/97355/": {
    "lat": 41.7120459,
    "lng": -71.86899169999998
  },
  "https://www.mobilize.us/peteforamerica/event/87732/": {
    "lat": 26.7153474,
    "lng": -80.05332529999998
  },
  "https://www.mobilize.us/peteforamerica/event/97999/": {
    "lat": 42.0938577,
    "lng": -86.48954630000003
  },
  "https://www.mobilize.us/peteforamerica/event/96760/": {
    "lat": 37.48521520000001,
    "lng": -122.23635480000002
  },
  "https://www.mobilize.us/peteforamerica/event/87860/": {
    "lat": 37.7726402,
    "lng": -122.40991539999999
  },
  "https://www.mobilize.us/peteforamerica/event/98306/": {
    "lat": 42.4726258,
    "lng": -122.80281769999999
  },
  "https://www.mobilize.us/peteforamerica/event/96297/": {
    "lat": 33.3951613,
    "lng": -111.70184519999998
  },
  "https://www.mobilize.us/peteforamerica/event/97239/": {
    "lat": 34.2804923,
    "lng": -119.29451990000001
  },
  "https://www.mobilize.us/peteforamerica/event/96431/": {
    "lat": 38.232417,
    "lng": -122.6366524
  },
  "https://www.mobilize.us/peteforamerica/event/98015/": {
    "lat": 26.5254562,
    "lng": -80.05908039999997
  },
  "https://www.mobilize.us/peteforamerica/event/97815/": {
    "lat": 34.8742328,
    "lng": -82.3343375
  },
  "https://www.mobilize.us/peteforamerica/event/97558/": {
    "lat": 39.7781333,
    "lng": -104.87465079999998
  },
  "https://www.mobilize.us/peteforamerica/event/98352/": {
    "lat": 40.103874,
    "lng": -105.1708193
  },
  "https://www.mobilize.us/peteforamerica/event/98271/": {
    "lat": 35.1322706,
    "lng": -106.49948890000002
  },
  "https://www.mobilize.us/peteforamerica/event/96911/": {
    "lat": 38.9894702,
    "lng": -77.13701149999997
  },
  "https://www.mobilize.us/peteforamerica/event/97127/": {
    "lat": 40.0480476,
    "lng": -83.025396
  },
  "https://www.mobilize.us/peteforamerica/event/97288/": {
    "lat": 37.386812,
    "lng": -122.07515490000003
  },
  "https://www.mobilize.us/peteforamerica/event/96290/": {
    "lat": 37.66373189999999,
    "lng": -97.28147179999996
  },
  "https://www.mobilize.us/peteforamerica/event/89754/": {
    "lat": 39.0038878,
    "lng": -77.10536730000001
  },
  "https://www.mobilize.us/peteforamerica/event/97102/": {
    "lat": 42.3476181,
    "lng": -71.1002881
  },
  "https://www.mobilize.us/peteforamerica/event/96292/": {
    "lat": 35.5220651,
    "lng": -97.5301397
  },
  "https://www.mobilize.us/peteforamerica/event/97627/": {
    "lat": 36.849734,
    "lng": -76.09720099999998
  },
  "https://www.mobilize.us/peteforamerica/event/92796/": {
    "lat": 42.7795584,
    "lng": -71.51304449999998
  },
  "https://www.mobilize.us/peteforamerica/event/96624/": {
    "lat": 38.345068,
    "lng": -85.61551700000001
  },
  "https://www.mobilize.us/peteforamerica/event/98175/": {
    "lat": 36.0754183,
    "lng": -79.0997347
  },
  "https://www.mobilize.us/peteforamerica/event/97347/": {
    "lat": 40.7095135,
    "lng": -111.96417280000003
  },
  "https://www.mobilize.us/peteforamerica/event/97852/": {
    "lat": 37.27528,
    "lng": -107.88006669999999
  },
  "https://www.mobilize.us/peteforamerica/event/96263/": {
    "lat": 38.1297678,
    "lng": -87.93502990000002
  },
  "https://www.mobilize.us/peteforamerica/event/96573/": {
    "lat": 34.1103407,
    "lng": -118.25850960000002
  },
  "https://www.mobilize.us/peteforamerica/event/97321/": {
    "lat": 41.5471471,
    "lng": -85.86909330000003
  },
  "https://www.mobilize.us/peteforamerica/event/97883/": {
    "lat": 38.2856247,
    "lng": -85.82413120000001
  },
  "https://www.mobilize.us/peteforamerica/event/96625/": {
    "lat": 40.9296034,
    "lng": -94.9766416
  },
  "https://www.mobilize.us/peteforamerica/event/87699/": {
    "lat": 39.8099873,
    "lng": -75.21179039999998
  },
  "https://www.mobilize.us/peteforamerica/event/89710/": {
    "lat": 40.038629,
    "lng": -105.37166839999998
  },
  "https://www.mobilize.us/peteforamerica/event/96679/": {
    "lat": 40.6681669,
    "lng": -73.98006450000003
  },
  "https://www.mobilize.us/peteforamerica/event/97265/": {
    "lat": 42.737853,
    "lng": -84.57200519999998
  },
  "https://www.mobilize.us/peteforamerica/event/98010/": {
    "lat": 39.7312095,
    "lng": -104.98269649999997
  },
  "https://www.mobilize.us/peteforamerica/event/87891/": {
    "lat": 40.6805029,
    "lng": -73.96243270000002
  },
  "https://www.mobilize.us/peteforamerica/event/97332/": {
    "lat": 41.6530149,
    "lng": -86.34781509999999
  },
  "https://www.mobilize.us/peteforamerica/event/97777/": {
    "lat": 38.8845126,
    "lng": -77.09385829999997
  },
  "https://www.mobilize.us/peteforamerica/event/96852/": {
    "lat": 39.5978465,
    "lng": -84.15406589999998
  },
  "https://www.mobilize.us/peteforamerica/event/96266/": {
    "lat": 34.1616729,
    "lng": -118.05284560000001
  },
  "https://www.mobilize.us/peteforamerica/event/87969/": {
    "lat": 41.729365,
    "lng": -86.24633369999998
  },
  "https://www.mobilize.us/peteforamerica/event/97293/": {
    "lat": 40.1578402,
    "lng": -83.0751869
  },
  "https://www.mobilize.us/peteforamerica/event/96840/": {
    "lat": 33.5563145,
    "lng": -117.77251999999999
  },
  "https://www.mobilize.us/peteforamerica/event/97710/": {
    "lat": 42.2128686,
    "lng": -88.23638189999997
  },
  "https://www.mobilize.us/peteforamerica/event/97207/": {
    "lat": 26.7044143,
    "lng": -80.19866489999998
  },
  "https://www.mobilize.us/peteforamerica/event/87701/": {
    "lat": 40.4175762,
    "lng": -86.88976550000001
  },
  "https://www.mobilize.us/peteforamerica/event/97844/": {
    "lat": 41.6113703,
    "lng": -91.5015009
  },
  "https://www.mobilize.us/peteforamerica/event/96660/": {
    "lat": 38.8189466,
    "lng": -77.05932459999997
  },
  "https://www.mobilize.us/peteforamerica/event/87751/": {
    "lat": 40.8076529,
    "lng": -91.11289010000002
  },
  "https://www.mobilize.us/peteforamerica/event/87863/": {
    "lat": 42.1275267,
    "lng": -87.82895480000002
  },
  "https://www.mobilize.us/peteforamerica/event/96725/": {
    "lat": 34.0235914,
    "lng": -84.59557319999999
  },
  "https://www.mobilize.us/peteforamerica/event/87975/": {
    "lat": 41.7389287,
    "lng": -86.8569736
  },
  "https://www.mobilize.us/peteforamerica/event/97372/": {
    "lat": 47.2887352,
    "lng": -122.5134478
  },
  "https://www.mobilize.us/peteforamerica/event/96801/": {
    "lat": 45.5113506,
    "lng": -122.64567390000002
  },
  "https://www.mobilize.us/peteforamerica/event/87720/": {
    "lat": 34.5034394,
    "lng": -82.65013320000003
  },
  "https://www.mobilize.us/peteforamerica/event/98134/": {
    "lat": 42.98234410000001,
    "lng": -70.82388739999999
  },
  "https://www.mobilize.us/peteforamerica/event/96305/": {
    "lat": 32.7546169,
    "lng": -117.0302408
  },
  "https://www.mobilize.us/peteforamerica/event/87727/": {
    "lat": 39.829875,
    "lng": -86.13955980000003
  },
  "https://www.mobilize.us/peteforamerica/event/96761/": {
    "lat": 29.9798109,
    "lng": -90.07934879999999
  },
  "https://www.mobilize.us/peteforamerica/event/87710/": {
    "lat": 44.4965177,
    "lng": -72.36402720000001
  },
  "https://www.mobilize.us/peteforamerica/event/96764/": {
    "lat": 41.4037088,
    "lng": -72.48498610000001
  },
  "https://www.mobilize.us/peteforamerica/event/96270/": {
    "lat": 38.1297678,
    "lng": -87.93502990000002
  },
  "https://www.mobilize.us/peteforamerica/event/94841/": {
    "lat": 42.9561485,
    "lng": -71.4418101
  },
  "https://www.mobilize.us/peteforamerica/event/97397/": {
    "lat": 33.755711,
    "lng": -84.3883717
  },
  "https://www.mobilize.us/newhampshireforpete/event/97120/": {
    "lat": 43.2086343,
    "lng": -71.54865619999998
  },
  "https://www.mobilize.us/peteforamerica/event/98312/": {
    "lat": 39.9583587,
    "lng": -75.1953934
  },
  "https://www.mobilize.us/peteforamerica/event/96862/": {
    "lat": 37.5021585,
    "lng": -122.20865789999999
  },
  "https://www.mobilize.us/peteforamerica/event/97834/": {
    "lat": 48.4201105,
    "lng": -122.33745429999999
  },
  "https://www.mobilize.us/peteforamerica/event/96258/": {
    "lat": 38.5844193,
    "lng": -90.29487970000002
  },
  "https://www.mobilize.us/peteforamerica/event/90295/": {
    "lat": 37.6818745,
    "lng": -121.76800880000002
  },
  "https://www.mobilize.us/peteforamerica/event/96905/": {
    "lat": 41.7084764,
    "lng": -83.53900019999998
  },
  "https://www.mobilize.us/peteforamerica/event/96850/": {
    "lat": 33.7241323,
    "lng": -118.26435670000001
  },
  "https://www.mobilize.us/peteforamerica/event/87879/": {
    "lat": 41.1345338,
    "lng": -73.84778740000002
  },
  "https://www.mobilize.us/peteforamerica/event/98105/": {
    "lat": 34.8030992,
    "lng": -92.24827049999999
  },
  "https://www.mobilize.us/peteforamerica/event/96682/": {
    "lat": 42.7287542,
    "lng": -84.63744840000004
  },
  "https://www.mobilize.us/peteforamerica/event/89712/": {
    "lat": 38.0270044,
    "lng": -122.54858730000001
  },
  "https://www.mobilize.us/peteforamerica/event/97790/": {
    "lat": 40.79676670000001,
    "lng": -74.4815438
  },
  "https://www.mobilize.us/peteforamerica/event/87810/": {
    "lat": 37.4484914,
    "lng": -122.18028119999997
  },
  "https://www.mobilize.us/peteforamerica/event/97383/": {
    "lat": 41.5254822,
    "lng": -72.76882260000002
  },
  "https://www.mobilize.us/peteforamerica/event/97813/": {
    "lat": 32.8778842,
    "lng": -96.64952199999999
  },
  "https://www.mobilize.us/peteforamerica/event/87903/": {
    "lat": 36.4799024,
    "lng": -121.73279309999998
  },
  "https://www.mobilize.us/peteforamerica/event/96640/": {
    "lat": 38.1052454,
    "lng": -122.24837259999998
  },
  "https://www.mobilize.us/peteforamerica/event/87667/": {
    "lat": 35.0771847,
    "lng": -114.55990150000002
  },
  "https://www.mobilize.us/peteforamerica/event/98162/": {
    "lat": 41.816736,
    "lng": -71.4091563
  },
  "https://www.mobilize.us/peteforamerica/event/97702/": {
    "lat": 30.7216604,
    "lng": -97.75253520000001
  },
  "https://www.mobilize.us/peteforamerica/event/97107/": {
    "lat": 33.8676889,
    "lng": -84.46451839999997
  },
  "https://www.mobilize.us/peteforamerica/event/87761/": {
    "lat": 40.0487466,
    "lng": -75.1953934
  },
  "https://www.mobilize.us/peteforamerica/event/97046/": {
    "lat": 40.7322535,
    "lng": -73.98741050000001
  },
  "https://www.mobilize.us/peteforamerica/event/96311/": {
    "lat": 39.7312095,
    "lng": -104.98269649999997
  },
  "https://www.mobilize.us/peteforamerica/event/96379/": {
    "lat": 38.8984667,
    "lng": -94.70188999999999
  },
  "https://www.mobilize.us/peteforamerica/event/96687/": {
    "lat": 39.9063963,
    "lng": -86.1242881
  },
  "https://www.mobilize.us/peteforamerica/event/97649/": {
    "lat": 40.2741832,
    "lng": -76.89227289999997
  },
  "https://www.mobilize.us/peteforamerica/event/97438/": {
    "lat": 37.7929789,
    "lng": -122.42124239999998
  },
  "https://www.mobilize.us/peteforamerica/event/87809/": {
    "lat": 41.90070970000001,
    "lng": -87.65318049999996
  },
  "https://www.mobilize.us/peteforamerica/event/96980/": {
    "lat": 58.3019444,
    "lng": -134.4197221
  },
  "https://www.mobilize.us/peteforamerica/event/96633/": {
    "lat": 37.89618249999999,
    "lng": -121.98143540000001
  },
  "https://www.mobilize.us/peteforamerica/event/96842/": {
    "lat": 41.8809155,
    "lng": -87.62542510000003
  },
  "https://www.mobilize.us/peteforamerica/event/98006/": {
    "lat": 43.15867859999999,
    "lng": -76.33270949999996
  },
  "https://www.mobilize.us/peteforamerica/event/98379/": {
    "lat": 41.6253116,
    "lng": -87.71754909999999
  },
  "https://www.mobilize.us/peteforamerica/event/96949/": {
    "lat": 40.7434064,
    "lng": -111.98801989999998
  }
}`);