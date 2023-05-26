interface CoursePart {
    name: string;
    exerciseCount: number;
}

interface TotalProps {
    courses: CoursePart[]
}

const Total = (props: TotalProps) => <p>
    Number of exercises{" "}
    {props.courses.reduce((carry, part) => carry + part.exerciseCount, 0)}
</p>

export default Total


{/* <p>
Number of exercises{" "}
{courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
</p> */}