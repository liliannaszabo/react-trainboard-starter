
export type Journey = {
    arrivalTime: string;
    departureTime: string;
    destinationStation: JourneyStation;
    journeyId: string;
}

type JourneyStation = {
    crs: string;
    displayName: string;
    nlc: string;
}