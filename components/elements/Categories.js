import Image from "next/image";
import styles from "./Categories.module.css";

import Link from "next/link";
// image
import videoBanner from "../../public/running-shoes 1.png";
import accourdeon from "../../public/accourdeon.png";
import airpod from "../../public/dunk-low-retro-mens-shoes-21mPvm 1 (1) 1.png";
import CategorySection from "./categorySection";
const Categories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_links}>
        <CategorySection
          banner={accourdeon}
          title={"AIR Pods Pro"}
          img={airpod}
        />
        <CategorySection
          banner={accourdeon}
          title={"AIR Pods Pro"}
          img={airpod}
        />
        <CategorySection
          banner={accourdeon}
          title={"AIR Pods Pro"}
          img={airpod}
        />
      </div>
      <div>
        <Image src={videoBanner} alt={"video"} />
      </div>
    </div>
  );
};

export default Categories;
