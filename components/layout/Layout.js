import styles from "./Layout.module.css";

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
