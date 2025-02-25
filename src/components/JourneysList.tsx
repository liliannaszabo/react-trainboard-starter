import React, { useEffect } from 'react';
import { Journey } from '../models/Journey';

type JourneyListProps = {
    journeyData: Journey[];
}
const JourneysList: React.FC<JourneyListProps> = ({ journeyData }) => {
    useEffect(() => {
        console.log(journeyData);
    }, [journeyData]);

    return (
        <div>
            <tbody>
                <tr>
                    <th>Depart Time</th>
                    <th>Arrival Time</th>
                </tr>
                {journeyData.map(( journey, index ) => (
                    <tr key = { index }>
                        <td>{journey.departureTime}</td>
                        <td>{journey.arrivalTime}</td>
                    </tr>
                ))}
            </tbody>
        </div>
    );
};

export default JourneysList;