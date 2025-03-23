
import Image from "next/image";
import Link from "next/link";

// styles
import styles from "./Layout.module.css";

// icons
import {BsBasket3} from "react-icons/bs";
import {FaMagnifyingGlass} from "react-icons/fa6";
import Logo from "/public/logo.png";


const Header = () => {
  return (
    <header>
      <div className={styles.header_section_signup}>
        <div className={styles.buttons}>
          <Link href={"/"}>ورود</Link>
          <span></span>
          <Link href={"/"}>ثبت نام</Link>
        </div>
<<<<<<< HEAD
=======
        {/* <div className={styles.header_banner}>
            <Image src={""} alt='Logo' style={{background: "silver"}} />
          </div> */}
>>>>>>> 5cec35f (header and footer are complited)
        <div className={styles.header_logo_section}>
          <h2>Air Sound</h2>
          <Image src={Logo} alt='Logo'  />
        </div>
      </div>
      <div className={styles.header_section_buttons}>
        <div className={styles.header_buttons_search_section}>
          <Link href={"/"} className={styles.basket}>
            <BsBasket3 />
          </Link>

          <div>
            <Link href={"/"}>
              <FaMagnifyingGlass />
            </Link>
            <input placeholder='جستوجو' />
          </div>
        </div>
        <div className={styles.header_buttons_buttons_section}>
          <Link href={"/"}>خانه</Link>
          <Link href={"/"}>هدفون</Link>
          <Link href={"/"}>هندزفری</Link>
          <Link href={"/"}>اسپیکر</Link>
          <Link href={"/"}>میکروفون</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
