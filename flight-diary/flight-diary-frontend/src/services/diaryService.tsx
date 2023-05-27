import axios from 'axios';
import { NonSensitiveDiaryEntry, NewDiaryEntry } from '../types';

const baseUrl = 'http://localhost:3003/api/diaries'

export const getAllDiaries = async () => {
    const response = await axios
        .get<NonSensitiveDiaryEntry[]>(baseUrl);
    return response.data;
}

export const createDiary = async (newDiary: NewDiaryEntry) => {
    try {
        const response = await axios
            .post<NonSensitiveDiaryEntry>(baseUrl, newDiary);

        return response.data;
    
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data);
        }
    }

}