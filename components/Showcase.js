import Image from "next/image";
import showcasePicture from "../public/homepageImages/showcasePictureCropped.png";
import styles from "../styles/Showcase.module.css";
import LinkButton from "./LinkButton";

const Showcase = () => {
  return (
    <section className={styles.container}>
        <Image alt="showcase image of watch" className={styles.img} src={showcasePicture}></Image>
        
        <div className={styles.titleBlock}>
          <p className={styles.title}><i className={styles.mixWord}>M1X</i> STORE</p>

          <p className={styles.description}>Магазин годинників із США <br/>
            Різні бренди, різні стилі та<br/>одне, що їх поєднує - <br/>найнижча ціна</p>

          <div className={styles.buttonsContainer}>
            <LinkButton className={styles.showcaseButton} page="/" text="Для нього"/>
            <LinkButton className={styles.showcaseButton} page="/" text="Для неї" />
          </div>
        </div>

    </section>
  );
};

export default Showcase;