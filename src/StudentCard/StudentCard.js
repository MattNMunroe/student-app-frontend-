const StudentCard = ({ student }) => {
    const { email, company, firstName, lastName, id, pic, skill, grades } =
    student;

    //convert grades to numbers
    const numericGrades = grades.map((grade) => Number(grade));

    //add up the grades
    //Init total = 0
    let total = 0;
    //for each grade, add grade to total
    for (const grade of numericGrades) {
      total += grade;
    }
    //divide total by number of grades and assign a var
    const average = total / numericGrades.length;

    return (
        <div key={id}>
          <img src={pic} alt={`${(firstName, lastName)}`} />
          <h1>
            {firstName} {lastName}
          </h1>
          <ul>
            <li>Email: {email}</li>
            <li>Company: {company}</li>
            <li>Skill: {skill}</li>
            <li>Average: {average}</li>
          </ul>
        </div>
      );
}

export default StudentCard;