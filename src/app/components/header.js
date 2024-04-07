"use client";
import React from "react";
import styles from "../../../styles/header.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const navigate = () => {
    router.push("/");
    router.refresh();
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.nav_container}>
          <span className={styles.web_name} onClick={navigate}>
            Feedback App
          </span>
          <div className={styles.links}>
            <Link href={"/request_feedback"} className={styles.link}>
              Request Feedback
            </Link>
            <Link href={"/respond_to_feedback"} className={styles.link}>
              Respond to Feedback
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
