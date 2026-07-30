import logo from "../assets/img/logo.png";
import { Routes, Route, Link } from "react-router-dom"; //Routes: todas las rutas de la app. //Route: define ruta especifica, //Link: crea enlaces sin recargar pagina.
import Contenido from "./Contenido";
import Preventa from "./Preventa";
import Aspirantes from "./Aspirantes";
import Profesiones from "./Profesiones";

function Menu() {
  return (
    <>
      {/**componente completo de Menu:  Opcones[empresas, personas, profeisones, postulate aqui, contancto] */}
      <header className="menu-wrap">
        <figure className="user">
          <div className="user-avatar">
            <Link to="/">
              <img className="w-100" src={logo} alt="Cedavilu Web Academy" />
            </Link> 

          </div>
          <figcaption>Cedavilu Web Academy</figcaption>
        </figure>
        <nav>
          <section className="menu">
            <h3>Opciones</h3>
            <ul>
              <li>
                <Link to="/empresa">
                  <i
                    className="bi bi-building"
                    style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                  ></i>
                  - Empresas
                </Link>
              </li>
              <li>
                <Link to="/aspirantes">
                  <i
                    className="bi bi-person"
                    style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                  ></i>
                  - Aspirantes
                </Link>
              </li>
              <li>
                <Link to="/profesiones">
                  <i className="bi bi-list-check"></i>- Profesiones
                </Link>
              </li>
              <li>
                <a href="#">
                  <i
                    className="bi bi-person-vcard"
                    style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                  ></i>
                  - Postulate aquí
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chat-left-text"></i>- Contacto
                </a>
              </li>
            </ul>
          </section>
        </nav>
      </header>

      {/*creando Enrutamiento */}
      <main className="content-wrap">
        <Routes>
          <Route path="/" element={<Contenido />} />
          <Route path="/empresa" element={<Preventa />} />
          <Route path="/aspirantes" element={<Aspirantes />} />
          <Route path="/profesiones" element={<Profesiones />} />
        </Routes>
      </main>
    </>
  );
}
export default Menu;
