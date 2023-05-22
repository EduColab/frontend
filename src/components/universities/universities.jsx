'use client'
import React, { useState, useEffect } from "react";
import Cards from "../cards/cards";
import { useRouter } from 'next/navigation';
import axios from "axios";  

import "../careers/careers.modules.css";

const universities = ({ src, title }) => {

  const [token, setToken] = useState("");
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    if(token.length > 0 ) {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/universities`, {headers: {Authorization: `Bearer ${token}`}})
      .then((res) => {
        setUniversities(res.data)
      })
    }
  }, [token])

  const router = useRouter();
  return (
    <div className="componente-tarjeta">
      <div className="title-container">
        <h2>Universidades</h2>
        <button className="verTodosBtn">{universities.length}</button>
      </div>
      <div className="scroll-horizontal">
        {universities.map((university) => (
          <Cards title={university.name} src={'https://static.vecteezy.com/system/resources/previews/013/139/659/original/library-school-education-learning-university-flat-line-filled-icon-beautiful-logo-button-over-yellow-background-for-ui-and-ux-website-or-mobile-application-free-vector.jpg'} url={'university'} id={university.id}/>
        ))}
        {/* <Cards
          src={
            "data:image/jpeg;base64,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"
          }
          title={"Autonoma"}
        /> */}
      </div>
    </div>
  );
};

export default universities;
