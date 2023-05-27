import { useEffect, useState } from 'react';
import { getAllDiaries, createDiary } from './services/diaryService';
import { NonSensitiveDiaryEntry, NewDiaryEntry } from './types';
import AllDiaries from './components/Diary';
import DiaryForm from './components/DiaryForm';

const App = () => {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);

  const addDiary = async (diary: NewDiaryEntry) => {
    const newDiary = await createDiary(diary)
    setDiaries(diaries.concat(newDiary));
  };


  useEffect(() => {
    getAllDiaries().then(data => {
      setDiaries(data)
    })
  }, [])

  return (
    <div>
      <h2>Diary Entries</h2>
      <DiaryForm addDiary={addDiary} />
      <AllDiaries diaries={diaries}  />
    </div>
  );
};

export default App;
