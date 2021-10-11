import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import {CssBaseline, Grid, Typography , Box} from '@material-ui/core';
import Chart from 'react-apexcharts';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const Portfolio = () => {
    const options = {
        responsive: [
            {
              breakpoint: 1005,
              options: {
                yaxis: {
                    show: true,
                    showAlways: true,
                    showForNullSeries: true,
                    seriesName: undefined,
                    opposite: false,
                    reversed: false,
                    logarithmic: false,
                    tickAmount: 6,
                    min: 6,
                    max: 13,
                },
                plotOptions: {
                  donut: {
                    horizontal: false
                  }
                },
                legend: {
                  position: "bottom"
                }
              },
              breakpoint: 950,
              options: {
                yaxis: {
                    show: true,
                    showAlways: true,
                    showForNullSeries: true,
                    seriesName: undefined,
                    opposite: false,
                    reversed: false,
                    logarithmic: false,
                    tickAmount: 6,
                    min: 11,
                    max: 13,
                },
                plotOptions: {
                  donut: {
                    horizontal: false
                  }
                },
                legend: {
                  position: "bottom"
                }
              }
            }
          ],       
        colors: ['#06B6BF', '#9D8159C2'],
        legend: {
            show: true,
            position: 'right',
            horizontalAlign: 'left', 
            tooltipHoverFormatter: undefined,
            markers: {
                width: 12,
                height: 12,
                radius: 0,
            },
            onItemClick: {
                toggleDataSeries: false
            },
            onItemHover: {
                highlightDataSeries: false
            },
        },      
        labels:["Mutual Funds","ETFs"],
        dataLabels: {
            enabled: false,
        },
        
    };
   const series= [283, 68 ];
   const boxStyling= {display:'flex', alignItems:'center',justifyContent:'space-between', padding:'10px 20px'};
   const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <Grid>
              <Box style={boxStyling}>
                  <h1>Portfolio</h1>
                  <FormControl  style={{border:'none',outline:'none'}} sx={{ m: 0,minWidth: 80 }}>
                        <Select
                        style={{border:'none',outline:'none'}}
                        variant="standard"
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        autoWidth= {true}
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem value=""  style={{border:'none',outline:'none'}}>
                            <em>Asset-wise</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
              </Box>
              <Chart 
                  options={options}
                  series={series}
                  type="donut"
                  width= {'100%'}
                  height={120}
                  responsive={800}
              />
            </Grid>
        </>
    )
}

export default Portfolio;
