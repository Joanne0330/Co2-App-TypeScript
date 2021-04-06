import CSS from 'csstype'

const Header = () => {
    return (
        <div style={headerStyle}>
            <h1>Co2 Comparison App</h1>
            <h4>Compare countries or cities by date...</h4>
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
