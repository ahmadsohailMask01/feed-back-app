import React from "react";
import styles from "../../../styles/header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.nav_container}>
          <span className={styles.web_name}>Feedback App</span>
          <div className={styles.links}>
            <Link href={""} className={styles.link}>
              Request Feedback
            </Link>
            <Link href={""} className={styles.link}>
              Respond to Feedback
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
