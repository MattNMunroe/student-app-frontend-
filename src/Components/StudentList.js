import StudentCard from "../StudentCard/StudentCard";

const StudentList = ({ studentData }) => {
  return (
    <div className="StudentList">
        {studentData.map((student, index) => {
            return (
                <div key={index}> 
                    <StudentCard key={student.id} student={student}/>
                    </div>
            )
        })}
      </div>
)};

export default StudentList;
