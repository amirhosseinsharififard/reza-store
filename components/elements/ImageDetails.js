import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./ImageDetails.module.css";
const ImageDetails = ({linkTo, variant, title}) => {
  console.log(variant);
  return (
    <Link href={`${linkTo}`} className={`${styles.card} ${styles[variant]}`}>
      <Image src='' alt={"iamge"} />
      <h3>{title}</h3>
    </Link>
  );
};

export default ImageDetails;
