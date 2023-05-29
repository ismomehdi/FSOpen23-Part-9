"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const toNewPatient = (object) => {
    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing data');
    }
    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) {
        const newEntry = {
            name: parseString(object.name),
            dateOfBirth: parseDate(object.dateOfBirth),
            ssn: parseString(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseString(object.occupation),
        };
        return newEntry;
    }
    throw new Error('Incorrect data: some fields are missing');
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseDate = (date) => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};
const parseGender = (gender) => {
    if (!isString(gender) || !isGender(gender)) {
        throw new Error('Missing gender.');
    }
    return gender;
};
const isGender = (param) => {
    return Object.values(types_1.Gender).map(g => g.toString()).includes(param);
};
const parseString = (text) => {
    if (!isString(text)) {
        throw new Error('Incorrect or missing data.');
    }
    return text;
};
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
exports.default = toNewPatient;
