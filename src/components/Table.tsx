import React from 'react';
import CSS from 'csstype';


//types
import {GenerationMixType} from '../App';

type Props = {
    city: string;
    postcode: string;
    morning: GenerationMixType[];
    midday: GenerationMixType[];
    evening: GenerationMixType[]
    night: GenerationMixType[];

}

const Table = ({city, postcode, morning, midday, evening, night }: Props) => {
    return (
        <div>
            <div>
                <h1 style={titleStyle}>Co2 usage of {city} {postcode}: </h1>
            </div>
            <div>
                <table style={tableStyle}>
                    <tr>
                        <th>type of energy</th>
                        <th>Morning 7am</th>
                        <th>Midday 12pm</th>
                        <th>Evening 6pm</th>
                        <th>Midnight 12am</th>
                    </tr>
                    <tr>
                        <td>1. Bio Mass </td>
                        <td>{morning[0].perc}%</td>
                        <td>{midday[0].perc}%</td>
                        <td>{evening[0].perc}%</td>
                        <td>{night[0].perc}%</td>
                    </tr>
                    <tr>
                        <td>2. Coal</td>
                        <td>{morning[1].perc}%</td>
                        <td>{midday[1].perc}%</td>
                        <td>{evening[1].perc}%</td>
                        <td>{night[1].perc}%</td>
                    </tr>
                    <tr>
                        <td>3. Imports</td>
                        <td>{morning[2].perc}%</td>
                        <td>{midday[2].perc}%</td>
                        <td>{evening[2].perc}%</td>
                        <td>{night[2].perc}%</td>
                    </tr>
                    <tr>
                        <td>4. Gas</td>
                        <td>{morning[3].perc}%</td>
                        <td>{midday[3].perc}%</td>
                        <td>{evening[3].perc}%</td>
                        <td>{night[3].perc}%</td>
                    </tr>
                    <tr>
                        <td>5. Nuclear</td>
                        <td>{morning[4].perc}%</td>
                        <td>{midday[4].perc}%</td>
                        <td>{evening[4].perc}%</td>
                        <td>{night[4].perc}%</td>
                    </tr>
                    <tr>
                        <td>6. Other </td>
                        <td>{morning[5].perc}%</td>
                        <td>{midday[5].perc}%</td>
                        <td>{evening[5].perc}%</td>
                        <td>{night[5].perc}%</td>
                    </tr>
                    <tr>
                        <td>7. Hydro</td>
                        <td>{morning[6].perc}%</td>
                        <td>{midday[6].perc}%</td>
                        <td>{evening[6].perc}%</td>
                        <td>{night[6].perc}%</td>
                    </tr>
                    <tr>
                        <td>8. Solar</td>
                        <td>{morning[7].perc}%</td>
                        <td>{midday[7].perc}%</td>
                        <td>{evening[7].perc}%</td>
                        <td>{night[7].perc}%</td>
                    </tr>
                    <tr>
                        <td>9. Wind</td>
                        <td>{morning[8].perc}%</td>
                        <td>{midday[8].perc}%</td>
                        <td>{evening[8].perc}%</td>
                        <td>{night[8].perc}%</td>
                    </tr>

                </table>
            </div>
            

        </div>
    )
}

const titleStyle: CSS.Properties = {
    textAlign: 'center',
    padding: '8px',
    fontFamily: 'Helvetica'
}

const tableStyle: CSS.Properties = {
    fontFamily: 'Helvetica',
    fontSize: '20px',
    borderCollapse: 'collapse',
    width: '100%'
}

export default Table;


