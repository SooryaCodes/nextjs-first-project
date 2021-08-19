import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <a>
            <Image width="70" height="70" src="/vercel.svg" alt="" />
          </a>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/about">
          About
        </Link>
        <Link className={styles.link} href="/profile">
          Profile
        </Link>
        <Link className={styles.link} href="/devs">
          Dev
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
