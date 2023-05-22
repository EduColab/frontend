"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

const University = ({ params }) => {
  const router = useRouter();
  const [university, setUniversity] = useState({});
  const [courses, setCourses] = useState(null);
  const { id } = params;
  const fetchUniversity = async () => {
    const res = await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/universities/id/${id}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    ).then(async (response) => {
      setUniversity(response.data);
      const resp = await axios(`${process.env.NEXT_PUBLIC_API_URL}/courses`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((response) => {
        const filtering = response.data.filter((course) => course.id < 6);
        setCourses(filtering);
      });
    });
    console.log(res);
  };
  useEffect(() => {
    fetchUniversity();
  }, []);
  console.log(university);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.h1}>{university.name}</h1>
      </div>
      <div className={styles.coursesContainer}>
        <h2 className={styles.h2}>Cursos</h2>
        {courses
          ? courses.map((course) => (
              <p
                className={styles.curso}
                onClick={() => {
                  router.push(`/curso/${course.id}`);
                }}
              >
                {course.name}
              </p>
            ))
          : null}
      </div>
    </div>
  );
};

export default University;
