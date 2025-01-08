import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Content from "@/components/Content";
import React from "react";
import styles from "@/styles/Home.module.css";

function about() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.hr}></div>
      <div>Please show about here</div>
      <Footer />
    </div>
  );
}

export default about;
