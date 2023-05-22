"use client";
import React from "react";
import styles from "./TopList.module.css";

const TopList = ({ name, list }) => {
  return (
    <div className={styles.top_list}>
      <h2 className={styles.top_title}>Top {name}</h2>
      <div className={styles.list}>
        {list.map(({ id, name }) => {
          return (
            <div className={styles.list_item}>
              <p>{id}</p>
              <h3>{name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopList;
