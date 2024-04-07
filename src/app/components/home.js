import React from "react";
import styles from "../../../styles/home.module.css";
import Image from "next/image";
import feed from "../../../assets/feed_logo.webp";

const MainPage = () => {
  return (
    <>
      <section className={styles.section_home}>
        <div className={styles.section_container}>
          <div className={styles.para_contain}>
            <p>
              <strong>Introducing our Feedback App</strong> – the hassle-free
              solution for soliciting feedback from colleagues. In today's
              dynamic work environment, constructive criticism is crucial for
              growth. With our user-friendly interface, requesting and providing
              feedback becomes effortless. Say goodbye to cumbersome forms and
              emails – our app streamlines the process with customizable
              templates and scheduling options. Plus, it fosters a culture of
              continuous improvement by making feedback accessible to all.
            </p>
            <p>
              Our <strong>Feedback App</strong> isn't just about collecting
              feedback – it's about fostering collaboration and driving
              productivity. By making feedback more efficient, we empower
              employees to exchange praise and criticism openly. Our analytics
              dashboard offers valuable insights, allowing you to track trends
              and celebrate successes. Transform feedback from a daunting task
              into a powerful tool for development. Join thousands of
              organizations already benefiting from our Feedback App and elevate
              your team's performance today.
            </p>
          </div>
          <Image src={feed} className={styles.img}></Image>
        </div>
      </section>
    </>
  );
};

export default MainPage;
