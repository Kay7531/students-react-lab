import { studentData } from "../data/data"
function Score(props) {
    return (
        <>
            <div>
                Date : {props.score.date}, Student Name: {props.studentName}, Score: {props.score.score}
            </div>

        </>
    )
}

export default Score