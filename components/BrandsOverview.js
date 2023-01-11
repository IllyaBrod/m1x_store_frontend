import Link from "next/link";
import styles from "../styles/BrandsOverview.module.css";

const BrandsOverview = ({ className, brands }) => {
  return (
    <div className={`${styles.container} ${className}`}>
        <ul>
            {brands.map((brand) => (
                <li key={brand.id} className={styles.p}>{brand.title}</li>
            ))}
        </ul>
        
    </div>
    )
}

export default BrandsOverview