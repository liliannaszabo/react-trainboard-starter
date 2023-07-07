import { Station } from '../models/Station';

export const fetchStations = () => {
    return fetch('https://mobile-api-softwire2.lner.co.uk/v1/stations', {
        headers: {
            'X-API-KEY': `${process.env.REACT_APP_X_API_KEY}`,
        },
    });
};

export const fetchTrains: ({ stationFrom, stationTo }: { stationFrom: Station; stationTo: Station }) => Promise<Response> = ({ stationFrom, stationTo }) => {
    const currentDate: Date = new Date();
    const year: number = currentDate.getFullYear();
    const month: number = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    const day: number = currentDate.getDate() + 1;
    currentDate.setHours(currentDate.getHours() + 1);

    const queryParams = new URLSearchParams({
        originStation : stationFrom.value,
        destinationStation : stationTo.value,
        outboundDateTime : currentDate.toISOString(),
        numberOfChildren : '0',
        numberOfAdults : '1',
    });

    return fetch(`https://mobile-api-softwire2.lner.co.uk/v1/fares?${queryParams}`, {
        headers: {
            'X-API-KEY': `${process.env.REACT_APP_X_API_KEY}`,
        },
    });

};