import { AllDiariesComponentProps, DiaryComponentProps } from "../types"

const Diary = (props: DiaryComponentProps) => (
    <>
        <h4>{props.diary.date}</h4>
        <p>visibility: {props.diary.visibility}<br />
        weather: {props.diary.weather}</p>
    </>
)

const AllDiaries = (props: AllDiariesComponentProps) => {
    if (!props.diaries) {
        return <></>
    }

    return (
        <>
            {props.diaries.map((diary) => <Diary diary={diary} key={diary.id} />)}
        </>
    )
}

export default AllDiaries;