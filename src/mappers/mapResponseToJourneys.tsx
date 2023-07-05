import { Journey } from '../models/Journey';

export const mapResponseToJourneys = async (response: Response): Promise<Journey[]> => {
    const data = await response.json();
    const journeys: Journey[] = data.outboundJourneys;
    return journeys;
};

//data => data.json().then(d => console.log(d.outboundJourneys)))