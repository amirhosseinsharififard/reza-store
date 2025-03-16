import Image from "next/image";
import styles from "./Layout.module.css";
import Link from "next/link";

import Logo from '/public/logo.png'
const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.header_section_signup}>
          <div className={styles.buttons}>
            <Link href={"/"}>ورود</Link>
          <span></span>
            <Link href={"/"}>ثبت نام</Link>
          </div>
          {/* <div className={styles.header_banner}>
            <Image src={""} alt='Logo' style={{background: "silver"}} />
          </div> */}
          <div className={styles.header_logo_section}>
          <h2 >Air Sound</h2>
            <Image src={Logo} alt='Logo' style={{background: "blue"}} />
          </div>
        </div>
        <div className={styles.header_section_buttons}>
          <div className={styles.header_buttons_search_section}>
            <Link href={"/"} className={styles.basket}>لوگو سبد خرید</Link>

<div>

            <Link href={'/'}>scanner</Link>
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
      <div>{children}</div>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
