import { Station } from '../models/Station';

export const fetchStations = () => {
    return fetch('https://mobile-api-softwire2.lner.co.uk/v1/stations', {
        headers: {
            'X-API-KEY': `${process.env.REACT_APP_X_API_KEY}`,
        },
    });
};

export const fetchTrains: ({ stationFrom, stationTo }: { stationFrom: Station; stationTo: Station }) => Promise<Response> = ({ stationFrom, stationTo }) => {
    const queryParams = new URLSearchParams({
        originStation : stationFrom.value,
        destinationStation : stationTo.value,
        outboundDateTime : '2023-07-20',
        numberOfChildren : '0',
        numberOfAdults : '1',
    });

    return fetch(`https://mobile-api-softwire2.lner.co.uk/v1/fares?${queryParams}`, {
        headers: {
            'X-API-KEY': `${process.env.REACT_APP_X_API_KEY}`,
        },
    });
    // } else {
    //    
    // }
};