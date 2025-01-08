import React from "react";
import styles from "@/styles/Home.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} width={300} height={399} />
      <div className={styles.cardContent}>
        {/* <p className={styles.cardTitle}>{product.title}</p> */}

        <div className={styles.cardTitleContainer}>
          <p className={styles.cardTitle}>{product.title}</p>
          <img
            src="/heart.svg"
            alt="like"
            width={16}
            height={16}
            className={styles.desktopHidden}
          />
        </div>

        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            <u>Sign in</u> or Create an account to see pricing
          </p>
          <img
            src="/heart.svg"
            alt="like"
            width={24}
            height={24}
            className={styles.mobileHidden}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
