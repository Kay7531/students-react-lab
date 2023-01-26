
import Score from "./Score"
function Student(props) {
    console.log(props)
    return (
        <>
            <h2>This is a Student component</h2>
            <h3>Name: {props.student.name}</h3>
            <h3>Bio: {props.student.bio}</h3>
            <div>
                {props.student.scores.map((score, idx) =>
                    <Score score={score}  key={idx} studentName={props.student.name} />
                )}
            </div>
        </>
    )
};

export default Student