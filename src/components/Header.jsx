import './Header.css'

/**
 * Header — sticky app banner.
 * @param {string} title
 * @param {string} subtitle
 * @param {number} totalStudents
 * @param {boolean} isScrolled
 * @param {object} children - Sort controls
 */
// Props: title, subtitle, total
function Header({ title, subtitle, total }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div>
          <h1>{title}</h1>
          <span className="accent-bar" />
          <p>{subtitle}</p>
        </div>
        <span className="count">Students shown: <strong>{total}</strong></span>
      </div>
    </header>
  )
}

export default Header
