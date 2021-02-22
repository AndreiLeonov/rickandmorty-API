import React from "react";
import axios from 'axios';
import PersonCard from './PersonCard';
import style from "../styles/Persons.module.css";

const Persons = () => {

  const [persons, setPersons] = React.useState([]);
  
  //settings for scroll
  const [currentPage, setCurrentPage] = React.useState(1);
  const [fetching, setFetching] = React.useState(true);

  React.useEffect(() => {
    if (fetching) {
      axios
        .get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
        .then((res) => {
          setPersons([...persons, ...res.data.results]);
          setCurrentPage((prevState) => prevState + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  React.useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if ( e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  };

  return (
    <div>
      <div className={style.Persons}>
        {persons.map(item => (
          <PersonCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Persons;
