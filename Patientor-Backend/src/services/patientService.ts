import { v1 as uuid } from 'uuid';
import patientData from '../../data/patients';
import { NonSensitivePatient, Patient, NewPatient, EntryWithoutId, Entry } from '../types';

const getNonSensitivePatients = (): NonSensitivePatient[] => {
    return patientData.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
    }));
};

const getPatient = (id: string): Patient => {
    const patient = patientData.filter((p) => (p.id === id))[0];

    return { ...patient };
};

const addPatient = ( patient: NewPatient ): Patient => {
    const id = uuid();
    const newPatient = { id, ...patient };

    patientData.push(newPatient);
    return newPatient;
};

const addEntry = (entry: EntryWithoutId, patientId: string): Entry => {  
    const id = uuid();
    const newEntry = { ...entry, id };
    const patient = getPatient(patientId);

    if (!patient) {
        throw new Error('Patient not found!');
    }

    patient.entries.push(newEntry);
    return newEntry;
};

export default {
    getNonSensitivePatients,
    addPatient,
    getPatient,
    addEntry
};