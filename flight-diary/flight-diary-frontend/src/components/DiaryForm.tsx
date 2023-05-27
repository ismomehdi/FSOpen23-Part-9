import { useState } from "react"
import { DiaryFormProps, NewDiaryEntry } from "../types"

const DiaryForm = (props: DiaryFormProps) => {
    const [date, setDate] = useState('')
    const [visibility, setVisibility] = useState('')
    const [weather, setWeather] = useState('')
    const [comment, setComment] = useState('')

    const createDiary = (event: React.SyntheticEvent) => {
        event.preventDefault()

        if (!visibility || !weather || !date ) {
            throw new Error('Incorrect or missing input!')
        }

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
                <input value={date} onChange={(event) => setDate(event.target.value)}/><br/>
                visibility
                <input value={visibility} onChange={(event) => setVisibility(event.target.value)}/><br/>
                weather
                <input value={weather} onChange={(event) => setWeather(event.target.value)}/><br/>
                comment
                <input value={comment} onChange={(event) => setComment(event.target.value)}/><br/>
                <button type='submit'>add</button>
            </form>
        </>
    )
}

export default DiaryForm;