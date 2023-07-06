import React from 'react';
import Toast from 'react-bootstrap/esm/Toast';
import { getHoursAndMinsBetweenTwoDates } from '../helpers/dateHelper';
import { Journey } from '../models/Journey';

type JourneyCardProps ={
    journey: Journey;
}
const JourneyCard: React.FC<JourneyCardProps> = ({ journey }) => {
    return(
        <Toast>
            <Toast.Header closeButton = { false }>
                <strong className = "mr-auto">{`${journey.departureTimeFormatted.hours}:${journey.departureTimeFormatted.minutes}➬${journey.arrivalTimeFormatted.hours}:${journey.arrivalTimeFormatted.minutes}`}</strong>
                <small></small>
            </Toast.Header>
            <Toast.Body>{ journey.destinationStation.displayName.toString() }</Toast.Body>
        </Toast>

    );
};

export default JourneyCard;