import { CourseProps, PartProps, assertNever } from "../types"

const Part = (props: PartProps) => {
    switch (props.part.kind) {
        case "basic":
            return (
                <>
                <h4>{props.part.name} {props.part.exerciseCount}</h4>
                <p>description: {props.part.description} </p>
                </>
            )
        case "group":
            return (
                <>
                <h4>{props.part.name} {props.part.exerciseCount}</h4>
                <p>project exercises: {props.part.groupProjectCount}</p>
                </>
            )
        case "background":
            return (
                <>
                <h4>{props.part.name} {props.part.exerciseCount}</h4>
                <p>description: {props.part.description} </p>
                <p>background material: {props.part.backgroundMaterial}</p>
                </>
            )
        case "special":
            return (
                <>
                <h4>{props.part.name} {props.part.exerciseCount}</h4>
                <p>description: {props.part.description} </p>
                <p>required: {props.part.requirements.join(', ')}</p>
                </>
            )
        default:
            return assertNever(props.part);
    }
}

const Content = (props: CourseProps) => (
    <>
        {props.courses.map((course, index) => <Part part={course} key={index} />)}
    </>
)

export default Content