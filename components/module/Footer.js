import Image from "next/image";
import Link from "next/link";
// styles
import styles from "./Layout.module.css";

// icons
import {FaTelegramPlane} from "react-icons/fa";
import {FaTwitter, FaWhatsapp} from "react-icons/fa6";
import {IoLogoYoutube} from "react-icons/io";

// image
import zarinpal from "../../public/zarinpal.svg";
import Enamad from "../../public/Enamad.svg";
const Footer = () => {
  return (
    <footer>
      <p className={`${styles.pargraph} ${styles.pargraph24}`}>
        با عضویت در باشگاه مشتریان از 10% تخفیف بیشتر لذت ببرید!
      </p>

      <div className={styles.footer_sections}>
        <div className={styles.footer_section_links}>
          <Link href={"/"}>شرایط و قوانین</Link>
          <Link href={"/"}>سوالات متداول</Link>
          <Link href={"/"}>ارتباط با ما</Link>
          <Link href={"/"}>تماس با ما</Link>
        </div>
        <div className={styles.footer_section_logoes}>
          <div className={styles.footer_section_certificate}>
            <Link href={"/"}>
              <Image src={zarinpal} alt='zarin pal' />
            </Link>
            <Link href={"/"}>
              <Image src={Enamad} alt='E namad' />
            </Link>
          </div>
          <div className={styles.footer_section_socials}>
            <p>مارا دنبال کنید</p>
            <Link href={"/"}>
              <FaTelegramPlane />
            </Link>
            <Link href={"/"}>
              <IoLogoYoutube />
            </Link>
            <Link href={"/"}>
              <FaTwitter />
            </Link>
            <Link href={"/"}>
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
      <p className={`${styles.pargraph} ${styles.pargraph16}`}>
        کلیه حقوق محفوظ و متعلق به ایرساند میباشد
      </p>
    </footer>
  );
};

export default Footer;
