import { Station } from './Station';

export type Journey = {
    arrivalTime: string;
    departureTime: string;
    destinationStation: Station;
    journeyId: string;
}