import "./Footer.css";



export function Footer() {
 

  return (
    <footer className="footer">
      <div className="containerFooter">

        <div className="epadocaPlataform">
          <img
            className="epadoca-logo"
            src="./assets/images/epadoca-logotipo.png"
            alt="epadoca-logo"
          />
        </div>

        <div className="social">
          <div className="socialContainer">
            <a
              href="https://www.linkedin.com/in/flávio-jcosta"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="socialImage"
                alt="socialImage"
                src="./assets/images/linkedin-logo.png"
              />
            </a>
            <a
              href="https://github.com/Flaviojcf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="socialImage"
                alt="socialImage"
                src="./assets/images/github-logo.png"
              />
            </a>
            <a href="mailto:flaviojcostafilho@gmail.com?subject=VagaDeEstagio&body=Ola%0D%0A%0D%0AFlavio,%0D%0A%0D%0AEquipe Epadoca">
              <img
                className="socialImage"
                alt="socialImage"
                src="./assets/images/gmail.png"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
