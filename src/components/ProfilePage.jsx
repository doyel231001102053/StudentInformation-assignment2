import StudentPhoto from './StudentPhoto'

// Props: student, onBack
function ProfilePage({ student, onBack }) {
  const { name, rollNumber, department, year, semester, cgpa, gender, photo } = student

  return (
    <section className="profile fade-in">
      <div className="profile-photo">
        <StudentPhoto photo={photo} gender={gender} name={name} size={225} />
      </div>

      <h2 className="profile-name">{name}</h2>

      <table className="profile-table">
        <tbody>
          <tr><th>Roll Number</th><td>{rollNumber}</td></tr>
          <tr><th>Department</th><td>{department}</td></tr>
          <tr><th>Year</th><td>{year}</td></tr>
          <tr><th>Semester</th><td>{semester}</td></tr>
          <tr><th>CGPA</th><td>{cgpa}</td></tr>
        </tbody>
      </table>

      <button className="btn-primary profile-back" onClick={onBack}>
        ← Back to students
      </button>
    </section>
  )
}

export default ProfilePage