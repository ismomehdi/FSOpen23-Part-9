interface CoursePart {
    name: string;
    exerciseCount: number;
}

interface CourseProps {
    courses: CoursePart[];
}

const Content = (props: CourseProps) => (
    <>
        {props.courses.map((course, index) => (
            <p key={index}>
                {course.name} {course.exerciseCount}
            </p>
        ))}
    </>
)

export default Content