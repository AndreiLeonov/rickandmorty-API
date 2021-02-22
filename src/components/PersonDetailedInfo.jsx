import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import PersonInfoCard from './PersonInfoCard'

const PersonDetailedInfo = () => {
  const { id } = useParams();

  const [personInfo, setPersonInfo] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => {
      setPersonInfo([res.data]);
    });
  }, [id]);

  return (
    <div>
      <div>
        {personInfo.map((item) => (
          <PersonInfoCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default PersonDetailedInfo;
