import { Station } from '../models/Station';

export const fetchStations = () => {
    return fetch('https://mobile-api-softwire2.lner.co.uk/v1/stations', {
        headers: {
            'X-API-KEY': `${process.env.REACT_APP_X_API_KEY}`,
        },
    });
};

export const fetchTrains: ({ originStation, destinationStation }: { originStation: Station; destinationStation: Station }) => Promise<Response> = ({ originStation, destinationStation }) => {
    const currentDate: Date = new Date();
    currentDate.setHours(currentDate.getHours() + 1);

    const queryParams = new URLSearchParams({
        originStation : originStation.value,
        destinationStation : destinationStation.value,
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