// export enum Weather {
//     Sunny = 'sunny',
//     Rainy = 'rainy',
//     Cloudy = 'cloudy',
//     Stormy = 'stormy',
//     Windy = 'windy',
//   }
  
// export enum Visibility {
//     Great = 'great',
//     Good = 'good',
//     Ok = 'ok',
//     Poor = 'poor',
// }

export interface DiaryEntry {
    id: number;
    date: string;
    weather: string;
    visibility: string;
    comment: string;
}

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

export interface DiaryComponentProps {
    diary: NonSensitiveDiaryEntry;
}

export interface AllDiariesComponentProps {
    diaries: NonSensitiveDiaryEntry[];
}

export interface DiaryFormProps {
    addDiary: (diary: NewDiaryEntry) => void;
}

export interface NotificationComponentProps {
    notification: string
}