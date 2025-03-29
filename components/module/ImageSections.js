import ImageDetails from "../elements/ImageDetails";
import styles from "./ImageSections.module.css";
const ImageSections = () => {
  return (
    <div className={styles.container}>
      <div>
        <ImageDetails variant={"medium"} title={"تخفیف خرید اول 40%"} />
        <ImageDetails
          variant={"medium"}
          title={"جدید ترین هدفون های دور گوشی"}
        />
      </div>

      <ImageDetails variant={"large"} title={"هدفون"} />
      <ImageDetails variant={"small"} title={"ایرپاد"} />
    </div>
  );
};

export default ImageSections;
