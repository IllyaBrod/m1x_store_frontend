import Link from "next/link";
import styles from "../styles/Nav.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [windowHeight, setWindowHeight] = useState("");
    const handleWindowScroll = () => {
        setWindowHeight(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleWindowScroll);
        return () => window.removeEventListener("scroll", handleWindowScroll);
    });

    const [transparency, setTransparency] = useState(0);

    useEffect(() => {
        if (windowHeight >= 1000) {
            let bgTransparency = (windowHeight-1000)/600;

            if (bgTransparency <= 1) {
                setTransparency(bgTransparency);
            }
        } else {
            setTransparency(0);
        }
        
    }, [windowHeight]);

  return (
    <nav style={{ opacity: `${transparency}` }} className={styles.nav}>
        <div className={styles.container}>
          <p className={styles.logo}>M1X</p>

          <ul className={styles.navCatalogList}>
            <li><p>Бренди</p></li>
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