import React from 'react';
import Toast from 'react-bootstrap/esm/Toast';
import { Journey } from '../models/Journey';

type JourneyCardProps ={
    journey: Journey;
}
const JourneyCard: React.FC<JourneyCardProps> = ({ journey }) => {
    return(
        <Toast>
            <Toast.Header closeButton = { false }>
                <strong className = "mr-auto">{journey.departureTime + '===>' +journey.arrivalTime}</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>{ journey.destinationStation.displayName.toString() }</Toast.Body>
        </Toast>

    );
};

export default JourneyCard;