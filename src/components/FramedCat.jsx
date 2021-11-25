import React from "react";

import styles from './FramedCat.module.css';

function FramedCat(){
  return(
    <div className={styles.frame}>
      <div className={styles.CatPic}>
        <p className={styles.score}>3/5</p>
      </div>
    </div>
  );
}

export default FramedCat;
