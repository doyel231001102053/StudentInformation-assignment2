import './Footer.css'

/**
 * Footer — page credit and assignment note.
 * @param {string} author - Author name
 * @param {number} year - Copyright / assignment year
 */
function Footer({ author, year }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__credit">
          {author} · {year}
        </p>
        <p className="site-footer__note">
          Assignment 2: BCA 4th-year student information using props and
          reusable components. Data is owned by App and passed down.
        </p>
      </div>
    </footer>
  )
}

export default Footer
