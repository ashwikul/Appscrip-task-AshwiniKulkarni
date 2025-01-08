import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

function Tile({ state, updateFunction, list, label }) {
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <h1>{label}</h1>
        <Image
          src={state ? "/arrow-top.svg" : "/arrow-bottom.svg"}
          alt="Arrow"
          width={20}
          height={20}
          onClick={() => updateFunction(!state)}
        />
      </div>
      <p>All</p>
      {state && (
        <ul className={styles.options}>
          <li>
            <u>Unselect all</u>
          </li>
          {list.map((l) => (
            <li style={{ display: "flex", gap: "5px" }}>
              <input type="checkbox" />
              <label>{l}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tile;
