import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./error.module.css";
import { RouteName } from "src/util/routeUtil";
import SizedBox from "src/components/SizedBox";
import CommonBtn from "src/components/CommonBtn";

const ErrorPage = () => {
  const navi = useNavigate();

  const moveToMain = () => {
    navi(RouteName.main + "?from=error");
  };

  return (
    <div className={styles.div_error}>
      <p>현재 페이지 : {window.location.href}</p>
      <SizedBox height={10} />
      <p>해당 페이지를 찾지 못했습니다</p>
      <SizedBox height={10} />
      <CommonBtn
        backgroundColor="white"
        color="black"
        width="250px"
        border="1px solid var(--shadow-color)"
        onClick={moveToMain}>
        메인 화면으로 이동
      </CommonBtn>
    </div>
  );
};

export default ErrorPage;
