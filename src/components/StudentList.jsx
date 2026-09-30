import StudentCard from './StudentCard'
import './StudentList.css'

const SKELETON_COUNT = 9

/**
 * StudentList — maps student props into cards (or skeleton placeholders).
 * @param {Array<{id: number, name: string, rollNumber: string, department: string, year: string, semester: string, cgpa: number, photo: string|null, gender: string, isYou?: boolean}>} students
 * @param {boolean} isLoading
 * @param {(student: object, trigger: HTMLButtonElement) => void} onViewProfile
 */
function StudentList({ students, isLoading, onViewProfile }) {
  if (isLoading) {
    return (
      <ul className="student-list" aria-busy="true" aria-label="Loading students">
        {Array.from({ length: SKELETON_COUNT }, (_, index) => (
          <li key={`skeleton-${index}`} className="student-list__item">
            <div className="student-card--skeleton" aria-hidden="true">
              <div className="skeleton-photo" />
              <div className="skeleton-line" />
              <div className="skeleton-line short" />
              <div className="skeleton-line short" />
              <div className="skeleton-line bar" />
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="student-list">
      {students.map((student, index) => (
        <li
          key={student.id}
          className="student-list__item"
          style={{ animationDelay: `${Math.min(index * 40, 280)}ms` }}
        >
          <StudentCard
            id={student.id}
            name={student.name}
            rollNumber={student.rollNumber}
            department={student.department}
            year={student.year}
            semester={student.semester}
            cgpa={student.cgpa}
            photo={student.photo}
            gender={student.gender}
            isYou={student.isYou}
            onViewProfile={onViewProfile}
          />
        </li>
      ))}
    </ul>
  )
}

export default StudentList
