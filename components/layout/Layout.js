import styles from "./Layout.module.css";

<<<<<<< HEAD
=======
import Logo from "/public/logo.png";

// icons header
import {BsBasket3} from "react-icons/bs";
import {FaMagnifyingGlass} from "react-icons/fa6";

// icons footer

import {IoLogoYoutube} from "react-icons/io";
import {FaTelegramPlane} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";

>>>>>>> 5cec35f (header and footer are complited)
import Header from "../module/Header";
import Footer from "../module/Footer";
const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
