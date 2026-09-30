import { useEffect, useId, useRef, useState } from 'react'
import AvatarFigure from './AvatarFigure'
import { getCgpaLabel } from '../utils/studentDisplay'
import './StudentCard.css'
import './ProfileModal.css'

const MODAL_AVATAR_SIZE = 160

/**
 * ProfileModal — detailed student profile dialog.
 * @param {{id: number, name: string, rollNumber: string, department: string, year: string, semester: string, cgpa: number, photo: string|null, gender: string, isYou?: boolean}|null} student
 * @param {() => void} onClose
 */
function ProfileModal({ student, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const titleId = useId()
  const [photoFailed, setPhotoFailed] = useState(false)
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const label = student ? getCgpaLabel(student.cgpa) : ''
  const percent = student
    ? Math.min(100, Math.max(0, (student.cgpa / 10) * 100))
    : 0
  const showPhoto = Boolean(student?.photo) && !photoFailed

  useEffect(() => {
    if (!student) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return
      }

      const focusable = dialogRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) {
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [student, onClose])

  if (!student) {
    return null
  }

  return (
    <div
      className="profile-modal-backdrop"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="profile-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <StudentPhoto
          name={student.name}
          photo={student.photo}
          sizeClass="student-photo--lg"
        />
        <h2 id={titleId} className="profile-modal__name">
          {student.name}
        </h2>
        {student.isYou ? (
          <p className="student-card__you-tag profile-modal__you">You</p>
        ) : null}
        <p className="profile-modal__meta">{student.rollNumber}</p>
        <p className="profile-modal__meta">Department: {student.department}</p>
        <p className="profile-modal__meta">Year: {student.year}</p>
        <p className="profile-modal__meta">Semester: {student.semester}</p>
        <p className="student-card__badge profile-modal__badge">
          <span>CGPA {student.cgpa.toFixed(2)}</span>
          <span className="student-card__badge-label">{label}</span>
        </p>
        <div
          className="student-card__bar"
          role="meter"
          aria-label={`CGPA ${student.cgpa.toFixed(2)} out of 10, ${label}`}
          aria-valuemin={0}
          aria-valuemax={10}
          aria-valuenow={student.cgpa}
        >
          <span
            className="student-card__bar-fill"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="student-card__bar-caption">
          {percent.toFixed(0)}% of 10.00 scale
        </p>
        <button
          ref={closeRef}
          type="button"
          className="profile-modal__close"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ProfileModal
