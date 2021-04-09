import React from 'react';
// import useEffect from 'react';
// import axios from 'axios';
import CSS from 'csstype';

type Props = {
    searchData: (date: string) => void;
}

const SearchForm = ({searchData}: Props) => {
    
    const [date, setDate] = React.useState("");

    // const handleSearchData = async(date: string) => {
    //     console.log(date)


    //     const headers ={
    //         "headers": {
    //             "Accept": "application/json"
    //         }
    //     }
    //     const data = await axios(`https://api.carbonintensity.org.uk/regional/intensity/${date}/pt24h`, headers);
   
    //     console.log(data.data)
    //     setDate("")
    // }

    return (
        <div>
            <label>Type in a date:</label>
            <input
                style={inputStyle}
                type="text"
                placeholder="format: YYYY-MM-DD..."
                value={date}
                onChange={(e) => setDate(e.currentTarget.value)}
            >
            </input>
            <button
                onClick={() => searchData(date)}
                style={buttonStyle}
            >Search</button>
        </div>
    )
}


const inputStyle: CSS.Properties = {
    fontSize: '15px',
    margin: '0px 10px 0px 10px',
    minHeight: '30px',
    fontFamily: 'Helvetica',
    borderRadius: '10px',
    color: 'darkslategrey',
    minWidth: '200px'
}

const buttonStyle: CSS.Properties = {
    backgroundColor: 'slategrey',
    cursor: 'pointer',
    color: 'white',
    borderRadius: '10px'
}

export default SearchForm
