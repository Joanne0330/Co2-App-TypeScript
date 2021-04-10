import React from 'react';
import axios from 'axios';
//components
import Header from './components/Header';
import SearchForm from './components/SearchForm';


function App() {

  const handleSearchData = async(postcode: string, date: string): Promise<any> => {
    console.log(date)


    const headers ={
      "headers": {
          "Accept": "application/json"
      }
    }

    const data = await axios(`https://api.carbonintensity.org.uk/regional/intensity/${date}/fw24h/postcode/${postcode}`, headers);

    const generalData = data.data.data;
    console.log(generalData)

    //morning 7am
    const morningData = generalData.data[15];
    const morningDetails = generalData.data[15].generationmix;
    console.log(morningData.from)
    console.log(morningDetails)

    //midday 12pm
    const middayData = generalData.data[25];
    const middayDetails = generalData.data[25].generationmix;
    console.log(middayData.from)
    console.log(middayDetails)


    //evening 6pm
    const eveningData = generalData.data[37];
    const eveningDetails = generalData.data[37].generationmix;
    console.log(eveningData.from)
    console.log(eveningDetails)


    //near midnight
    const nightData = generalData.data[48];
    const nightDetails = generalData.data[48].generationmix;
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
