import React from "react";
import { useHistory } from "react-router-dom";
import style from "../styles/PersonInfoCard.module.css";

const PersonInfoCard = (props) => {
  const data = props.data;
  const history = useHistory();
  const backHandler = () => {
    history.push("/");
  };

  return (
    <div className={style.PersonInfoCard}>
      <div>
        <img src={data.image} />
      </div>
      <div className={style.PersonInfo}>
        <div>name: {data.name}</div>
        <div>status: {data.status}</div>
        <div>gender: {data.gender}</div>
        <div>location: {data.location.name}</div>
        <button onClick={backHandler}>Back to persons list</button>
      </div>
    </div>
  );
};

export default PersonInfoCard;
