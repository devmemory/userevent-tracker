import React from "react";
import ChartComponenet from "src/components/Chart";
import useEventList from "src/hooks/useEventList";
import styles from './about.module.css'

const About = () => {
  const { stayingTime, clickEvent } = useEventList();

  return (
    <div className={styles.div_about}>
      <ChartComponenet {...stayingTime} />
      <br />
      <ChartComponenet {...clickEvent} />
    </div>
  );
};

export default About;
