import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/PersonCard.module.css";

const PersonCard = (props) => {
  const data = props.data;
  const id = props.data.id;

  return (
    <div className={style.PersonCard}>
      <Link style={{ textDecoration: 'none' }} to={`/characters/${id}`}>
        <img src={data.image} />
        <div className={style.overlay}>
          <h4>{data.name}</h4>
        </div>
      </Link>
    </div>
  );
};

export default PersonCard;
