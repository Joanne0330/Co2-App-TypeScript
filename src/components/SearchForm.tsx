import React from 'react';
import useEffect from 'react';
import axios from 'axios';
import CSS from 'csstype';

// type Props = {
//     searchData: (place: string, date: string) => void;
// }

const SearchForm = () => {
    const [place, setPlace] = React.useState("");
    const [date, setDate] = React.useState("");

    const handleSearchData = async(place: string, date: string) => {
        console.log(date)
        console.log(place)
        const header = {
            "headers": {
                // "Access-Control-Allow-Origin": "*",
                "Content-Type": "text/csv; charset=UTF-8"
            }
        }
        const data = await axios(`http://ladataverte.fr/api/1.0/data_points?id_indicators[]=1&id_indicators[]=4&type_place[]=${place}&from=${date}&to=${date}`, header)

  
        console.log('hello')
        console.log(data)
        setDate("")
        setPlace("")
    }

    return (
        <div>
            <label>Search countries or cities: </label>
            <select
                style={inputStyle}
                onChange={(e) => setPlace(e.currentTarget.value)}
            >
                <option>Please choose...</option>
                <option value="country">Countries</option>
                <option value="city">Cities</option>
            </select>
            <br />
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
                onClick={() => handleSearchData(place, date)}
                style={buttonStyle}
            >Search</button>
        </div>
    )
}

const formStyle: CSS.Properties = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '23px',
    fontFamily: 'Helvetica',
    margin: '10px',
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
