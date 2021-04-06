import CSS from 'csstype';

const SearchForm = () => {
    return (
        <div>
            <form
                style={formStyle}
            
            >
                <label>Search countries or cities: </label>
                <select
                    style={inputStyle}
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
                >
                </input>
                <button
                    style={buttonStyle}
                >Search</button>
            </form>
            
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
