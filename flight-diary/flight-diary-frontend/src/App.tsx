import { useEffect, useState } from 'react';
import { getAllDiaries, createDiary } from './services/diaryService';
import { NonSensitiveDiaryEntry, NewDiaryEntry } from './types';
import AllDiaries from './components/Diary';
import DiaryForm from './components/DiaryForm';
import Notification from './components/Notification';

const App = () => {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);
  const [notification, setNotification] = useState('')

  const Notify = (message: string) => {
    setNotification(message)

    const timer = setTimeout(() => {
      setNotification('');
    }, 5000);

    return () => {clearTimeout(timer)};

  }

  const addDiary = async (diary: NewDiaryEntry) => {
    try {
      const newDiary = await createDiary(diary);

      if (!newDiary) {
        Notify('Error! Something weird happened...')
        return
      }

      setDiaries(prevDiaries => prevDiaries.concat(newDiary));

    } catch (error) {
        Notify(String(error));
    }
  };


  useEffect(() => {
    getAllDiaries().then(data => {
      setDiaries(data)
    })
  }, [])

  return (
    <div>
      <Notification notification={notification} />
      <DiaryForm addDiary={addDiary} />
      <h2>Diary Entries</h2>
      <AllDiaries diaries={diaries}  />
    </div>
  );
};

export default App;
