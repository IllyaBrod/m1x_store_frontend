import Link from "next/link";
import styles from "../styles/LinkButton.module.css";

const LinkButton = ({ page, text, backgroundColor, border, textColor, className }) => {
  

  return (
    <button className={`${styles.button} ${className}`} style={{
      backgroundColor: backgroundColor,
      border: border,
      color: textColor,
    }}>
      <Link href={page} className={styles.link}>
        {text}
      </Link>
    </button>
    
  )
}

export default LinkButton