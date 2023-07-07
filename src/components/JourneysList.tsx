import React, { useEffect } from 'react';
import { ToastContainer } from 'react-bootstrap';
import '../Custom.css';
import { Journey } from '../models/Journey';
import JourneyCard from './JourneyCard';

type JourneyListProps = {
    journeyList: Journey[];
}
const JourneysList: React.FC<JourneyListProps> = ({ journeyList }) => {
    useEffect(() => {
        console.log(journeyList);
    }, [journeyList]);

    return <div className = "custom-toast" >
        {
            journeyList.map((obj, index) => <JourneyCard journey = { obj } key = { index }/>  )
        }
    </div>;
};

export default JourneysList;