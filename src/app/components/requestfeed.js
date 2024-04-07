"use client";
import React from "react";
import styles from "../../../styles/requestfeed.module.css";
import { useRouter } from "next/navigation";

const RequestFeedback = () => {
  const router = useRouter();
  const func1 = () => {
    router.push("/adhoc_feedback");
    router.refresh();
  };
  const func2 = () => {
    router.push("/mid_year_feedback");
    router.refresh();
  };
  const func3 = () => {
    router.push("/360_feedback");
    router.refresh();
  };
  return (
    <>
      <section className={styles.req_section}>
        <div className={styles.sec_container}>
          <span onClick={func1}>Adhoc Feedback</span>
          <span onClick={func2}>Mid Year Feedback</span>
          <span onClick={func3}>360 Feedback</span>
        </div>
      </section>
    </>
  );
};

export default RequestFeedback;
