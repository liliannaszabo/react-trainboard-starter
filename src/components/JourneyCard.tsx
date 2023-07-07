import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/esm/Toast';
import { getHoursAndMinsBetweenTwoDates } from '../helpers/dateHelper';
import { getJourneyLegsDestinations } from '../mappers/ResponseMapper';
import { Journey } from '../models/Journey';

type JourneyCardProps ={
    journey: Journey;
}
const JourneyCard: React.FC<JourneyCardProps> = ({ journey }) => {
    return(
        <div>
            <Toast className = "mt-3" >
                <Toast.Header closeButton = { false }>
                    <strong className = "mr-auto">{`${journey.departureTimeFormatted.hours}:${journey.departureTimeFormatted.minutes} ➨ ${journey.arrivalTimeFormatted.hours}:${journey.arrivalTimeFormatted.minutes}`}</strong>
                    <span>
                        {`Departs in ${getHoursAndMinsBetweenTwoDates(new Date(),new Date(journey.departureTime))}  `}
                        {journey.status.toLowerCase()=='normal' && (<Badge bg = 'success'>On Time</Badge>)}
                        {journey.status.toLowerCase()=='delayed' && (<Badge className = 'badge-black' bg = 'warning'>Delayed</Badge>)}
                        {journey.status.toLowerCase()=='cancelled' && (<Badge bg = 'danger'>Cancelled</Badge>)}
                    </span>

                </Toast.Header>
                <Toast.Body>
                    <h5>
                        {`${journey.originStation.displayName.toString()} to ${journey.destinationStation.displayName.toString() }`}
                    </h5>
                    <h6>
                        {(journey.legs.length-1==0)?'Direct':'Changes: ' + (journey.legs.length-1) }
                    </h6>
                    <div>
                        {journey.legs.length>1 && journey.status.toLowerCase()!='cancelled' && 'Changing at:'}
                    </div>
                    <div>
                        {journey.legs.length>1 && journey.status.toLowerCase()!='cancelled' && getJourneyLegsDestinations(journey.legs)}
                    </div>
                </Toast.Body>

            </Toast>
        </div>

    );
};

export default JourneyCard;