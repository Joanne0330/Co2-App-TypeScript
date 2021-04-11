import CSS from 'csstype'

const Header = () => {
    return (
        <div style={headerStyle}>
            <h1>Co2 Consumption App</h1>
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
