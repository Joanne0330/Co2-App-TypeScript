import React from 'react';
// import useEffect from 'react';
// import axios from 'axios';
import CSS from 'csstype';

type Props = {
    searchData: (postcode: string, date: string) => void;
}

const SearchForm = ({searchData}: Props) => {
    
    const [postcode, setPostcode] = React.useState("");
    const [date, setDate] = React.useState("");

    const onClicking = (postcode: string, date: string) => {
        searchData(postcode, date);
        setPostcode("");
        setDate("");
    }
    return (
        <div style={divStyle}>
            <label>Type in a postcode: </label>
            <input
                style={inputStyle}
                type="text"
                placeholder="Ex: SE13, M1..."
                value={postcode}
                onChange={(e) => setPostcode(e.currentTarget.value)}
            >
            </input>
            <label>Type in a date:</label>
            <input
                style={inputStyle}
                type="text"
                placeholder="Format: YYYY-MM-DD..."
                value={date}
                onChange={(e) => setDate(e.currentTarget.value)}
            >
            </input>
            <button
                onClick={() => onClicking(postcode, date)}
                // onClick={() => searchData(postcode, date)}
                style={buttonStyle}
            >Search</button>
        </div>
    )
}

const divStyle: CSS.Properties = {
    fontFamily: 'Helvetica',
    fontSize: '20px',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center'

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
