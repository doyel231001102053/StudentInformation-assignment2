import './AvatarFigure.css'

/**
 * AvatarFigure — generic person silhouette (not a photo).
 * @param {'male'|'female'} gender
 * @param {number} size - Circle diameter in pixels
 * @param {string} name - Used in the accessible label
 */
function AvatarFigure({ gender, size, name }) {
  const isFemale = gender === 'female'

  return (
    <div
      className="avatar-figure"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${name}, profile placeholder`}
    >
      <svg
        viewBox="0 0 96 96"
        width={size}
        height={size}
        aria-hidden="true"
        focusable="false"
      >
        <circle className="avatar-figure__bg" cx="48" cy="48" r="48" />
        {isFemale ? (
          <>
            <path
              className="avatar-figure__shape"
              d="M22 40 C22 16 74 16 74 40 L76 78 C70 86 26 86 20 78 Z"
            />
            <circle className="avatar-figure__shape" cx="48" cy="38" r="15" />
            <path
              className="avatar-figure__shape"
              d="M30 56 Q48 50 66 56 L80 96 H16 Z"
            />
          </>
        ) : (
          <>
            <path
              className="avatar-figure__shape"
              d="M33 34 C33 22 63 22 63 34 L61 38 C55 32 41 32 35 38 Z"
            />
            <circle className="avatar-figure__shape" cx="48" cy="40" r="15" />
            <path
              className="avatar-figure__shape"
              d="M32 58 Q48 52 64 58 L76 96 H20 Z"
            />
          </>
        )}
      </svg>
    </div>
  )
}

export default AvatarFigure
