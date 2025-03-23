import Image from "next/image";
import Link from "next/link";

import styles from "./Categories.module.css";

import React from "react";
const CategorySection = ({
    banner,title,img
}) => {
  return (
    <Link href='/'>
      <Image
        className={styles.categories_banner}
        src={banner}
        alt='back ground for category'
      />
      <div>
        <h3>{title}</h3>
        <Image src={img} alt='air pod logo' />
      </div>
    </Link>
  );
};

export default CategorySection;
