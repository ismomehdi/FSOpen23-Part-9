import { useEffect, useState } from 'react'

import { EntryListProps, Entry } from '../../types'
import diagnosisService from '../../services/diagnosis'

import Hospital from './Hospital'
import Occupational from './Occupational'
import HealthCheck from './Healthcheck'

const getDiagnosis = async ( diagnosisCode: string ) => {
    try {
        const diagnosis = await diagnosisService.getDiagnosis(diagnosisCode)
        return diagnosis.name
        
    } catch (error) {
        return 'Diagnosis not found!'
    }
}

const assertNever = (value: never): never => {
    throw new Error('Incorrect entry type!');
};

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
    switch (entry.type) {
        case 'Hospital':
            return <Hospital />
        case 'OccupationalHealthcare':
            return <Occupational />
        case 'HealthCheck':
            return <HealthCheck entry={entry} />
        default:
            return assertNever(entry);
    }
}

const EntriesList = ( { entry }: EntryListProps) => {
    const [descriptions, setDescriptions] = useState<string[]>([]);

    useEffect(() => {
        const fetchDescriptions = async () => {
            if (entry.diagnosisCodes) {
                const fetchedDescriptions = await Promise.all(
                    entry.diagnosisCodes.map((d) => getDiagnosis(d))
                );
                setDescriptions(fetchedDescriptions);
            }
        };
        fetchDescriptions();
    }, [entry.diagnosisCodes]);

    const icon = EntryDetails({entry})

    return ( 
    <div>
        <p>{entry.date}{icon}<br/>
        <i>{entry.description}</i></p>
        <ul>
            {entry.diagnosisCodes?.map((c, index) => (                
                <li key={c}>{c} {descriptions[index]} </li>
            )
            )}
        </ul>
        <p>diagnose by {entry.specialist}</p>
    </div>
    )
}

export default EntriesList;