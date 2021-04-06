// import React from 'react';
// import axios from 'axios';
//components
import Header from './components/Header';
import SearchForm from './components/SearchForm';


function App() {

  // const handleSearchData = (place: string, date: string) => {
  //   console.log(place)
  //   console.log(date)


  //     const data = await axios(`http://ladataverte.fr/api/1.0/data_points?id_indicators[]=1&id_indicators[]=4&type_place[]=${place}&from=${date}&to=${date}`)
  //     console.log(data)

  // };

  return (
    <div>
      <Header />
      <SearchForm />
    </div>
  );
}

export default App;
