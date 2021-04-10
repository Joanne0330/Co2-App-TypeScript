import React from 'react';
import axios from 'axios';
//components
import Header from './components/Header';
import SearchForm from './components/SearchForm';


export type generationMixType = {
  fuel: string;
  perc: number
}

// export type cityName = {
//   shortname: string
// }

// export type postcode = {
//   postcode: string
// }

function App() {
  //general info
  const [city, setCity] = React.useState("");
  const [postcode, setPostcode] = React.useState("")

  // timed info
  const [morningGM, setMorningGM] = React.useState([] as generationMixType[]);
  const [middayGM, setMiddayGM] = React.useState([] as generationMixType[]);
  const [eveningGM, setEveningGM] = React.useState([] as generationMixType[]);
  const [nightGM, setNightGM] = React.useState([] as generationMixType[]);


  const handleSearchData = async(postcode: string, date: string): Promise<any> => {
    const headers ={
      "headers": {
          "Accept": "application/json"
      }
    }
    const data = await axios(`https://api.carbonintensity.org.uk/regional/intensity/${date}/fw24h/postcode/${postcode}`, headers);

    // general info
    const generalData = data.data.data;
    console.log(generalData)

    setCity(generalData.shortname)
    setPostcode(generalData.postcode)


    //morning 7am
    const morningDetails = generalData.data[15].generationmix;
    setMorningGM(morningDetails)

    //midday 12pm
    const middayDetails = generalData.data[25].generationmix;
    setMiddayGM(middayDetails);

    //evening 6pm

    const eveningDetails = generalData.data[37].generationmix;
    setEveningGM(eveningDetails);

    //near midnight
    const nightDetails = generalData.data[48].generationmix;
    setNightGM(nightDetails)
  };

  console.log(city)
  console.log(postcode)
  console.log(morningGM)
  console.log(middayGM)
  console.log(eveningGM)
  console.log(nightGM)


  return (
    <div>
      <Header />
      <SearchForm searchData={handleSearchData}/>


    </div>
  );
}

export default App;
