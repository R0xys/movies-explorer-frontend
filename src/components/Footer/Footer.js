import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__flex-wrapper">
          <span className="footer__caption">© 2023</span>
          <nav className="footer__links">
            <a href="https://practicum.yandex.ru/" target='_blank' rel='noreferrer' className="footer__link zero-link">Яндекс.Практикум</a>
            <a href="https://github.com/R0xys" target='_blank' rel='noreferrer' className="footer__link zero-link">Github</a>
          </nav>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
