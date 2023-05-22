'use client'
import React from "react";
import { useRouter } from 'next/navigation';  

const cards = ({src, title, id, url}) => {
  const router = useRouter();
  return (
    <div className="card" onClick={() => router.push(`/${url}/${id}`)}>
      <img
        src={src}
        alt="Imagen"
        className="card-image-long"
      />
      <div className="card-content">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default cards;
