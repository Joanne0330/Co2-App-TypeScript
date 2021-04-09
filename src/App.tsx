import React from 'react';
import axios from 'axios';
//components
import Header from './components/Header';
import SearchForm from './components/SearchForm';


function App() {
  // const [morning, setMorning] = React.useState([])

  const handleSearchData = async(date: string): Promise<any> => {
    console.log(date)


    const headers ={
      "headers": {
          "Accept": "application/json"
      }
    }

    const data = await axios(`https://api.carbonintensity.org.uk/regional/intensity/${date}/fw24h/postcode/SE13`, headers);

    const generalData = data.data.data;
    console.log(generalData)

    //morning 7am
    const morningData = data.data.data.data[15];
    const morningDetails = data.data.data.data[15].generationmix;
    console.log(morningData.from)
    console.log(morningDetails)

    //midday 12pm
    const middayData = data.data.data.data[25];
    const middayDetails = data.data.data.data[25].generationmix;
    console.log(middayData.from)
    console.log(middayDetails)


    //evening 6pm
    const eveningData = data.data.data.data[37];
    const eveningDetails = data.data.data.data[37].generationmix;
    console.log(eveningData.from)
    console.log(eveningDetails)


    //near midnight
    const nightData = data.data.data.data[48];
    const nightDetails = data.data.data.data[48].generationmix;
    console.log(nightData.from)
    console.log(nightDetails)

    



  };

  return (
    <div>
      <Header />
      <SearchForm searchData={handleSearchData}/>


    </div>
  );
}

export default App;
