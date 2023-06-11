import React from "react";
import styles from "./card.module.css";

const Card = () => {
  const title = "Title";
  const desc = "Description";
  return (
    <div className={styles.div_card_track} title="card">
      <div
        style={
          { "--background-image": "url(/vite.svg)" } as React.CSSProperties
        }>
        <div className={styles.div_overlay}>
          <div>{title}</div>
          <div>{desc}</div>
        </div>
      </div>
      <div className={styles.div_text}>
        <div>{title}</div>
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default Card;
