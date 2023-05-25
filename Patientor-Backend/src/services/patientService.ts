import { v1 as uuid } from 'uuid';
import patientData from '../../data/patients';
import { NonSensitivePatient, Patient, NewPatient } from '../types';

const getNonSensitivePatients = (): NonSensitivePatient[] => {
    return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = ( patient: NewPatient ): Patient => {
    const id = uuid();
    const newPatient = { id, ...patient };

    patientData.push(newPatient);
    return newPatient;
};

export default {
    getNonSensitivePatients,
    addPatient
};