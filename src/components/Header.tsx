import CSS from 'csstype'

const Header = () => {
    return (
        <div style={headerStyle}>
            <h1>Co2 Consumption App</h1>
            <h4>Search Co2 consumption of a UK city or region by postcode and date...</h4>
        </div>
    )
}

const headerStyle: CSS.Properties = {
    backgroundColor: 'crimson',
    color: 'white',
    overflow: 'auto',
    fontFamily: 'Helvetica',
    textAlign: 'center'
}

export default Header
