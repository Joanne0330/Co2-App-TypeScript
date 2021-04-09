import React from 'react';
import axios from 'axios';
//components
import Header from './components/Header';
import SearchForm from './components/SearchForm';


function App() {
  const [morning, setMorning] = React.useState([])

  const handleSearchData = async(date: string): Promise<any> => {
    console.log(date)


    const headers ={
      "headers": {
          "Accept": "application/json"
      }
    }
    const data = await axios(`https://api.carbonintensity.org.uk/regional/intensity/${date}/fw24h`, headers);
   
    console.log(data.data)
    console.dir(data.data[0])
    // setMorning(data.data[15].regions)


  };

  return (
    <div>
      <Header />
      <SearchForm searchData={handleSearchData}/>
      {/* {morning.map((region: []) => (
        <p>region.shortname</p>
      ))} */}
    </div>
  );
}

export default App;
