// make a search to google books api
//  "https://api.flightapi.io/roundtrip/YOURAPIKEY/LHR/LAX/2019-10-11/2019-10-15/2/0/1/Economy/US
export const searchFlightInfo = (query) => {
    return fetch(`https://api.flightapi.io/roundtrip/YOURAPIKEY/LHR/LAX/2019-10-11/2019-10-15/2/0/1/Economy/US${query}`);
  };