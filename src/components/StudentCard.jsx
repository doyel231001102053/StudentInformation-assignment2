import StudentPhoto from './StudentPhoto'

// Props: id, name, rollNumber, department, year, semester, cgpa, gender, photo, onViewProfile
function getGrade(cgpa) {
  if (cgpa >= 9) return 'Outstanding'
  if (cgpa >= 8) return 'Excellent'
  if (cgpa >= 7) return 'Good'
  return 'Average'
}

function StudentCard({ id, name, rollNumber, department, year, semester, cgpa, gender, photo, onViewProfile }) {
  const open = () => onViewProfile(id)

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      open()
    }
  }

  return (
    <article
      className="card"
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={handleKey}
      aria-label={`View profile of ${name}`}
    >
      <StudentPhoto photo={photo} gender={gender} name={name} size={110} />

      <h2 className="card-name">{name}</h2>

      <div className="card-rows">
        <p className="row"><span>Roll Number</span><span>{rollNumber}</span></p>
        <p className="row"><span>Department</span><span>{department}</span></p>
        <p className="row"><span>Year</span><span>{year}</span></p>
        <p className="row"><span>Semester</span><span>{semester}</span></p>
      </div>

      <div className="cgpa-box">
        <div className="cgpa-top">
          <span>CGPA <strong>{cgpa.toFixed(2)}</strong></span>
          <span className="grade">{getGrade(cgpa)}</span>
        </div>
        <div className="bar"><div className="bar-fill" style={{ width: `${cgpa * 10}%` }} /></div>
      </div>
    </article>
  )
}

export default StudentCard