"use client";
import React from "react";
import styles from "./TopList.module.css";

const TopList = ({ name }) => {
  const top_universities = [
    {
      name: "harvard",
      rank: "#1",
      points: "500",
    },
    {
      name: "Cambridge",
      rank: "#1",
      points: "500",
    },
    {
      name: "Masacchusset",
      rank: "#1",
      points: "500",
    },
    {
      name: "Columbia",
      rank: "#1",
      points: "500",
    },
    {
      name: "harvard",
      rank: "#1",
      points: "500",
    },
  ];


  return (
    <div className={styles.top_list}>
      <h2 className={styles.top_title}>Top {name}</h2>
      <div className={styles.list}>
        {top_universities.map(({ name, rank, points }) => {
          return (
            <div className={styles.list_item}>
              <p>{rank}</p>
              <h3>{name}</h3>
              <p>{points}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopList;
