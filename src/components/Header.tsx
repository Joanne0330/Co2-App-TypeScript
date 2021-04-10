import CSS from 'csstype'

const Header = () => {
    return (
        <div style={headerStyle}>
            <h1>Co2 Consumption App</h1>
            <h3>Search carbon intensity of a UK city or region by postcode and date...</h3>
        </div>
    )
}

const headerStyle: CSS.Properties = {
    backgroundColor: 'steelblue',
    color: 'white',
    overflow: 'auto',
    fontFamily: 'Helvetica',
    textAlign: 'center'
}

export default Header
