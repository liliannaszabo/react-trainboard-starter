
export type Journey = {
    arrivalTime: string;
    arrivalTimeFormatted: time;
    departureTime: string;
    departureTimeFormatted: time;
    destinationStation: JourneyStation;
    journeyId: string;
}

type JourneyStation = {
    crs: string;
    displayName: string;
    nlc: string;
}

type time = {
    hours: string;
    minutes: string;
}