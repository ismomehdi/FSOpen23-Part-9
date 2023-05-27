import { useState } from "react"
import { DiaryFormProps, NewDiaryEntry } from "../types"

const DiaryForm = (props: DiaryFormProps) => {
    const [date, setDate] = useState('')
    const [visibility, setVisibility] = useState('')
    const [weather, setWeather] = useState('')
    const [comment, setComment] = useState('')

    const createDiary = (event: React.SyntheticEvent) => {
        event.preventDefault()

        const diary: NewDiaryEntry = {
            "date": date,
            "visibility": visibility,
            "weather": weather,
            "comment": comment
        }

        props.addDiary(diary)

        setDate('')
        setVisibility('')
        setWeather('')
        setComment('')
    }    

    return (
        <>
            <h2>Add New</h2>
            <form onSubmit={createDiary}>
                date
                <input type='date' value={date} onChange={(event) => setDate(event.target.value)}/><br/>

                visibility{' '}
                great
                <input type='radio' name='visibility' value='great' checked={visibility === 'great'} onChange={(event) => setVisibility(event.target.value)}/>
                good
                <input type='radio' name='visibility' value='good' checked={visibility === 'good'} onChange={(event) => setVisibility(event.target.value)}/>
                ok
                <input type='radio' name='visibility' value='ok' checked={visibility === 'ok'} onChange={(event) => setVisibility(event.target.value)}/>
                poor
                <input type='radio' name='visibility' value='poor' checked={visibility === 'poor'} onChange={(event) => setVisibility(event.target.value)}/><br/>


                weather{' '}
                sunny
                <input type='radio' name='weather' value='sunny' checked={weather === 'sunny'} onChange={(event) => setWeather(event.target.value)}/>
                rainy
                <input type='radio' name='weather' value='rainy' checked={weather === 'rainy'} onChange={(event) => setWeather(event.target.value)}/>
                cloudy
                <input type='radio' name='weather' value='cloudy' checked={weather === 'cloudy'} onChange={(event) => setWeather(event.target.value)}/>
                windy
                <input type='radio' name='weather' value='windy' checked={weather === 'windy'} onChange={(event) => setWeather(event.target.value)}/><br/>

                comment
                <input value={comment} onChange={(event) => setComment(event.target.value)}/><br/>
                <button type='submit'>add</button>
            </form>
        </>
    )
}

export default DiaryForm;