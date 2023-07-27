// import React, { useEffect, useState } from 'react';
// import * as React from 'react';
import React, { useEffect, useState } from 'react';
// import {Navbar} from './components/Navbar';
import Navbar from './components/Navbar';
import Character from './components/Characters';
import Pagination from './components/Pagination';
import Autocomplete from './components/Autocomplete';
// import { StyledEngineProvider } from '@mui/material/styles';
const App = () => {
  const [character, setCharacters] = useState([]);
  const [infoPagination, setInfoPaginatio] = useState([]);

  const urlApi = 'https://rickandmortyapi.com/api/character';
  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfoPaginatio(data.info);
      })
      .catch((e) => console.log(e));
  };

  const onPrevious = () => {
    fetchCharacters(infoPagination.prev);
  };

  const onNext = () => {
    fetchCharacters(infoPagination.next);
  };

  useEffect(() => {
    fetchCharacters(urlApi);
  }, []);
  return (
    <>
      <Navbar title={'Rick and Morty Api App'} />
      <div className="container mt-5">
        {/* <StyledEngineProvider injectFirst>
                    <Autocomplete/>
                </StyledEngineProvider> */}
        <Autocomplete />
        <Pagination
          prev={infoPagination.prev}
          next={infoPagination.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Character characters={character} />
        <Pagination
          prev={infoPagination.prev}
          next={infoPagination.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
};

export default App;
