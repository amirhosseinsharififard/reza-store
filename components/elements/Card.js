import Image from "next/image";
import styles from "./Card.module.css";

// image
import headphone from "../../public/headphone.png";
import Link from "next/link";



const Card = ({data,progress}) => {
  return (
    <div className={styles.card}>
      <Link href='/'>
        <div className={styles.image}>
          <Image src={headphone} alt='headphone' />
        </div>
        <div className={styles.title}>
          <h4>AirPods Max</h4>

          <div className={styles.price}>
            <span>5.500.000</span>
            <p>
              <span>6.500.000</span> تومان
            </p>
          </div>
          <div className={styles.count_number}>
            <p>
              مانده: <span>5/5</span>
            </p>
            <div class={styles.progress_container}>
              <div className={styles.progress_bar} style={{ width: `${progress}%` }}></div>
            </div>
            <div class={styles.progress_label}></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
