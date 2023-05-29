import { NewPatient, Gender, EntryWithoutId, Diagnosis } from './types';

const toNewPatient = (object: unknown): NewPatient => {
    if ( !object || typeof object !== 'object' ) {
        throw new Error('Incorrect or missing data');
    }

    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) {
        const newEntry: NewPatient = {
            name: parseString(object.name),
            dateOfBirth: parseDate(object.dateOfBirth),
            ssn: parseString(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseString(object.occupation),
            entries: []
        };

        return newEntry;
    }

    throw new Error('Incorrect data: some fields are missing');
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};

const parseGender = (gender: unknown): Gender => {
    if (!isString(gender) || !isGender(gender)) {
        throw new Error('Missing gender.');
    }
    return gender;
};

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(g => g.toString()).includes(param);
};

const parseString = (text: unknown): string => {
    if (!isString(text)) {
        throw new Error('Incorrect or missing data.');
    }
    return text;
};

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseDiagnosisCodes = (object: unknown): Array<Diagnosis['code']> =>  {
    if (!object || typeof object !== 'object' || !('diagnosisCodes' in object)) {
      // we will just trust the data to be in correct form
      return [] as Array<Diagnosis['code']>;
    }
  
    return object.diagnosisCodes as Array<Diagnosis['code']>;
  };
  

export const toNewEntry = (object: unknown): EntryWithoutId => {
    if ( !object || typeof object !== 'object') {
        throw new Error('Incorrect or missing data');
    }

    const newEntry = object as EntryWithoutId;

    if (!newEntry.description || !newEntry.date || !newEntry.specialist || !newEntry.type) {
        throw new Error('Incorrect or missing data');
    }

    switch (newEntry.type) {
        case 'Hospital':
            if (!newEntry.discharge || !newEntry.discharge.date || !newEntry.discharge.criteria) {
                throw new Error('Missing discharge!');
            }
            break;
        case 'OccupationalHealthcare':
            if (!newEntry.employerName) {
                throw new Error('Missing employer name!');
            }
            break;
        case 'HealthCheck':
            if (newEntry.healthCheckRating === undefined || newEntry.healthCheckRating === null) {
                throw new Error('Missing health rating!');
            }
            break;
        default:
            throw new Error(`Incorrect entry type!`);
    }

    return { ...newEntry, diagnosisCodes: parseDiagnosisCodes(object) };
};

export default toNewPatient;

