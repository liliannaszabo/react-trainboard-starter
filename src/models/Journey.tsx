
export type Journey = {
    arrivalTime: string;
    arrivalTimeFormatted: Time;
    departureTime: string;
    departureTimeFormatted: Time;
    destinationStation: JourneyStation;
    journeyId: string;
    originStation: JourneyStation;
    legs: Leg[];
    status: string;
}

type JourneyStation = {
    crs: string;
    displayName: string;
    nlc: string;
}

type Time = {
    hours: string;
    minutes: string;
}

export type Leg = {
    destination: JourneyStation;
}