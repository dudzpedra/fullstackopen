import Content from "../Content"
import Header from "../Header"

const Course = ({ course, sum }) => {
    return (
        <div>
            <Header title={course.name} />
            <Content parts={course.parts} sum={sum} />
        </div>
    )
}

export default Course