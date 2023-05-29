import { Patient, Entry } from '../../types'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import patientService from '../../services/patients'
import EntriesList from './EntriesList'


const PatientPage = () => {
    const { id } = useParams();
    const [patient, setPatient] = useState<null | Patient>(null);

    useEffect(() => {
        const fetchPatient = async () => {
            const fetchedPatient = await patientService.getPatient(String(id));
            setPatient(fetchedPatient);
        };

        fetchPatient();
    }, [id]);

    if (!patient) {
        return <div>Getting the patient...</div>
    }

    const getGender = () => {
        if (patient.gender === 'male') {
            return '♂'
        } else if (patient.gender === 'female') {
            return '♀'
        } else {
            return ''
        }
    }

    const gender = getGender()

    return (
        <>
            <h2>{patient.name} {gender}</h2>
            <p>ssn: {patient.ssn}<br/>
            occupation: {patient.occupation}</p>
            <h3>entries</h3>
            {patient.entries?.map((entry: Entry) => <EntriesList key={entry.id} entry={entry} />)}
        </>
    )
}

export default PatientPage