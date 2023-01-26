
import Student from "./Student"


function StudentList(props) {
    console.log(props, 'student')
    return (
        <>
            <h1> This is StudentList component.</h1>
            {props.students.map((student,idx) =>
                <Student key={idx} student={student} />
            )};


        </>
    )
}

export default StudentList