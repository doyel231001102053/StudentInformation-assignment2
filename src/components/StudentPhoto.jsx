import { useState } from 'react'
import { getInitials } from '../utils/studentDisplay'
import './StudentPhoto.css'

/**
 * StudentPhoto — circular portrait with initials fallback.
 * @param {string} name
 * @param {string} photo
 * @param {string} [sizeClass]
 */
function StudentPhoto({ name, photo, sizeClass = '' }) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const showFallback = failed || !photo

  return (
    <div
      className={`student-photo ${sizeClass}`.trim()}
      role={showFallback ? 'img' : undefined}
      aria-label={showFallback ? name : undefined}
    >
      {showFallback ? (
        <div className="student-photo__initials" aria-hidden="true">
          {getInitials(name) || '?'}
        </div>
      ) : (
        <img
          className={`student-photo__img${loaded ? ' is-loaded' : ''}`}
          src={photo}
          alt={name}
          width={160}
          height={160}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

function StudentPhotoKeyed(props) {
  return <StudentPhoto key={props.photo || 'fallback'} {...props} />
}

export default StudentPhotoKeyed
