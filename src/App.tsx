import React from 'react';
import axios from 'axios';
// CSS
import './App.css';
//components
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchUK from './components/SearchUK';
import Table from './components/Table';


export type GenerationMixType = {
  fuel: string;
  perc: number
}

// export type CityName = {
//   shortname: string
// }

// export type Postcode = {
//   postcode: string
// }

function App() {

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  //general info
  const [city, setCity] = React.useState<string>("");
  const [postcode, setPostcode] = React.useState<string>("")

  // timed info
  const [morningGM, setMorningGM] = React.useState([] as GenerationMixType[]);
  const [middayGM, setMiddayGM] = React.useState([] as GenerationMixType[]);
  const [eveningGM, setEveningGM] = React.useState([] as GenerationMixType[]);
  const [nightGM, setNightGM] = React.useState([] as GenerationMixType[]);


  const handleSearchData = async(postcode: string, date: string): Promise<any> => {
    const headers ={
      "headers": {
          "Accept": "application/json"
      }
    };
    const data = await axios(`https://api.carbonintensity.org.uk/regional/intensity/${date}/fw24h/postcode/${postcode}`, headers);

    // general info
    const generalData = data.data.data;
    console.log(generalData);

    setCity(generalData.shortname);
    setPostcode(generalData.postcode);


    //morning 7am
    const morningDetails = generalData.data[15].generationmix;
    setMorningGM(morningDetails);

    //midday 12pm
    const middayDetails = generalData.data[25].generationmix;
    setMiddayGM(middayDetails);

    //evening 6pm

    const eveningDetails = generalData.data[37].generationmix;
    setEveningGM(eveningDetails);

    //near midnight
    const nightDetails = generalData.data[48].generationmix;
    setNightGM(nightDetails);

    setIsLoading(true);

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
      <div className='cityByDate'>
        <h4 className="h4Style">Search carbon intensity of a UK city or region by postcode and date</h4>
        <SearchForm searchData={handleSearchData}/>
        {isLoading && <div>
          <Table 
            city={city}
            postcode={postcode}
            morning={morningGM}
            midday={middayGM}
            evening={eveningGM}
            night={nightGM} 
          />
        </div>}
      </div>
      <div className='regionsCompare'>
          <h4 className='h4Style'>Search Carbon intensity of 24 UK regions by date</h4>
          <SearchUK />
      </div>
    </div>
  );
}

export default App;
