import React from 'react';
import './Table.css';
import { Grid } from '@material-ui/core'

const Table = () => {
    return (
        <Grid container justifyContent='center' alignItems="center" style={{marginTop:50}}>
            <Grid item>
                    <table align='center' className='table'>
                        <thead>
                            <tr className='tableRow'>
                                <th >Scrip</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Avg. Cost</th>
                                <th>Invested Amount</th>
                                <th>% of Portfolio Value</th>
                                <th>Unrealized P&L</th>
                                <th>% Return</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='tableRow'>
                                <td className="leftAlign">AADR</td>
                                <td>430</td>
                                <td>$50.30</td>
                                <td>$41.75</td>
                                <td>$17,952.07</td>
                                <td>22.06%</td>
                                <td>$3,676.93</td>
                                <td> 20.48%</td>
                            </tr>
                            <tr className='tableRow'>
                                <td>MFEM </td>
                                <td>210</td>
                                <td>$23.20</td>
                                <td>$22.50</td>
                                <td>$4,725.84</td>
                                <td>5.81%</td>
                                <td>$146.16</td>
                                <td>3.09%</td>
                            </tr>
                            <tr className='tableRow'>
                                <td>JPEM </td>
                                <td>328</td>
                                <td>$52.50</td>
                                <td>$56.70</td>
                                <td>$18,597.60 </td>
                                <td>22.86%</td>
                                <td>-$1,377.60</td>
                                <td>-7.41%</td>
                            </tr>
                            <tr className='tableRow'>
                                <td>KEMQ </td>
                                <td>801</td>
                                <td>$20.40</td>
                                <td>$22.24</td>
                                <td>$17,811.04 </td>
                                <td>21.89%</td>
                                <td>-$1,470.64</td>
                                <td>-8.26%</td>
                            </tr><tr className='tableRow'>
                                <td>KLDW </td>
                                <td>523</td>
                                <td>$32.90</td>
                                <td>$26.32</td>
                                <td>$13,765.36 </td>
                                <td>16.92%</td>
                                <td>$3,441.34</td>
                                <td>25.00%</td>
                            </tr><tr className='tableRow'>
                                <td>KOIN</td>
                                <td>335</td>
                                <td>$25.40</td>
                                <td>$25.40</td>
                                <td>$8,509.00 </td>
                                <td>10.46%</td>
                                <td>$-</td>
                                <td>0.00%</td>
                            </tr>
                        </tbody>
                    </table>
             </Grid>
        </Grid>
    )
}
export default Table;