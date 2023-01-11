import Link from "next/link";
import styles from "../styles/Nav.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import BrandsOverview from "./BrandsOverview";

const NavBar = ({ brandsList }) => {
    const [showBrands, setShowBrands] = useState(false);

  const handleMouseBrandsEnter = () => {
    setShowBrands(true);
  }

  const handleMouseBrandsLeave = () => {
    setShowBrands(false);
  }

  return (
    <nav className={styles.nav}>
        <div className={styles.container}>
          <p className={styles.logo}>M1X</p>

          <ul className={styles.navCatalogList}>
            <li className={styles.box} onMouseEnter={handleMouseBrandsEnter} onMouseLeave={handleMouseBrandsLeave}>
              <p>Бренди</p>
              {showBrands && <BrandsOverview className={styles.brandsOverview} brands={brandsList} />}
            </li>
            <li><Link href="/">Для чоловіків</Link></li>
            <li><Link href="/">Для жінок</Link></li>
            <li><Link href="/">Усі годинники</Link></li>
          </ul>

          <ul className={styles.navBasketAccountList}>
            <li><FaShoppingCart className={styles.icon} /> <p>Корзина</p></li>
            <li><FaUser className={styles.icon} /> <p>Акаунт</p></li>
          </ul>
        </div>
    </nav>
  );
};

export default NavBar;