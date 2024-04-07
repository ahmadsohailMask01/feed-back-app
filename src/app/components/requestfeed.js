import React from "react";
import styles from "../../../styles/requestfeed.module.css";

const RequestFeedback = () => {
  return (
    <>
      <section className={styles.req_section}>
        <div className={styles.sec_container}>
          <span>Adhoc Feedback</span>
          <span>Mid Year Feedback</span>
          <span>360 Feedback</span>
        </div>
      </section>
    </>
  );
};

export default RequestFeedback;
