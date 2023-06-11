import React from "react";
import styles from "./my.module.css";
import CommonBtn from "src/components/CommonBtn";
import Card from "src/components/Card";

const MyPage = () => {
  return (
    <div>
      <CommonBtn onClick={() => console.log("test")}>Test</CommonBtn>
      <Card />
      <button className={styles.btn_test}>I'm button</button>
      <div className={styles.div_track} title="?">
        I'm div
      </div>
    </div>
  );
};

export default MyPage;
