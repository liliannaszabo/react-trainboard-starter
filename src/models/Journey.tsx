
export type Journey = {
    arrivalTime: string;
    departureTime: string;
    destinationStation: JourneyStation;
    journeyId: string;
    originStation: JourneyStation;
}

type JourneyStation = {
    crs: string;
    displayName: string;
    nlc: string;
}