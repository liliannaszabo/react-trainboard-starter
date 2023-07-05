export const fetchStations = () => {
    return fetch('https://mobile-api-softwire2.lner.co.uk/v1/stations', {
        headers: {
            'X-API-KEY': `${process.env.REACT_APP_X_API_KEY}`,
        },
    });
};

export const fetchTrains: ({ stationFrom, stationTo }: { stationFrom: string; stationTo: string }) => Promise<Response> = ({ stationFrom, stationTo }) => {
    const queryParams = new URLSearchParams({
        originStation : stationFrom,
        destinationStation : stationTo,
        outboundDateTime : '2023-07-20',
        numberOfChildren : '0',
        numberOfAdults : '1',
    });

    return fetch(`https://mobile-api-softwire2.lner.co.uk/v1/fares?${queryParams}`, {
        headers: {
            'X-API-KEY': `${process.env.REACT_APP_X_API_KEY}`,
        },
    });//.then((response) => response.json());
};