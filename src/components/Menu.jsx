import logo from "../assets/img/logo.png";
import { Routes, Route, Link } from "react-router-dom"; //Routes: todas las rutas de la app. //Route: define ruta especifica, //Link: crea enlaces sin recargar pagina.
import Contenido from "./Contenido";
import Preventa from "./Preventa";
import Aspirantes from "./Aspirantes";
import Profesiones from "./Profesiones";
import foto1 from "../assets/img/foto1.jpg";
import foto2 from "../assets/img/foto2.jpg";
import foto3 from "../assets/img/foto3.jpg";
import foto4 from "../assets/img/foto4.jpg";
import foto5 from "../assets/img/foto5.jpg";
import foto6 from "../assets/img/foto6.jpg";

function Menu() {

  //datos quemados (array de objetos)
  const profesionesQuemadas = [
    {
      id: 1,
      name: "Desarrollador Web",
    },

    {
      id: 2,
      name: "Desarrollador Backend",
    },
    {
      id: 3,
      name: "Administrador de base de datos",
    },
    {
      id: 4,
      name: "Area ciberseguridad",
    },
    {
      id: 5,
      name: "Area cloud",
    }
  ]

  const aspirantes = [
    {
      id: 1,
      name: "Emanuel Gonzalez",
      profesion: "Desarrollador Jr Frontend",
      img: foto5
    },
    {
      id: 2,
      name: "Yuviny Velásquez",
      profesion: "Desarrolladro Jr Backend",
      img: foto2
    },
    {
      id: 3,
      name: "Jose Cardona",
      profesion: "Administrador Jr de Base de datos",
      img: foto6
    },
  ]


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
          <Route path="/aspirantes" element={<Aspirantes listAspirantes={aspirantes} />} />
                                                            {/*Enviando una propt llamada listado. */}
          <Route path="/profesiones" element={<Profesiones listProfesiones={profesionesQuemadas} />} />
        </Routes>
      </main>
    </>
  );
}
export default Menu;
