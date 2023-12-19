import "../../Components/Footer/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="logoContainer">
           <img src="https://logoarena-storage.s3.amazonaws.com/contests/public/10564/3280_1604992372_10564_.png" alt="logo" />
      </div>

      <div className="container margin">
        <h3>SECCIONES</h3>
        <div>
          <Link to="/medicinal" style={{ textDecoration: 'none', color: 'black' }}> Medicinales </Link>
          <Link to="/perfumery" style={{ textDecoration: 'none', color: 'black' }}> Perfumeria </Link>
          <Link to="/accesories" style={{ textDecoration: 'none', color: 'black' }}> Accesorios </Link>
          <Link to="/esthetic" style={{ textDecoration: 'none', color: 'black' }}> Estética </Link>
        </div>
      </div>

      <div className="container">
        <h3>CONTACTANOS</h3>
        <div>
          <p>
            Correo: <a href="mailto:aeroxxdsg@gmail.com" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>aeroxxdsg@gmail.com</a>
          </p>
          <p>
            Celular: <a href="https://wa.me/542616603249" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>+54-261-6603249</a>
          </p>
          <p>
            Direccion: <a href="https://www.google.com/maps/dir/Current+Location/-31.546963250745424,-69.08838526730734/" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>San Luis 244 - Las Heras, Mendoza</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;