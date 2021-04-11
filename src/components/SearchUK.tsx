import React from 'react';
import CSS from 'csstype';

const SearchUK = () => {
    
    const [date, setDate] = React.useState("");

    const onClicking = (date: string) => {

        setDate("");
    }
    return (
        <div style={divStyle}>
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
                onClick={() => onClicking( date)}
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

export default SearchUK