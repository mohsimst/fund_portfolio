import React from 'react';
import {Grid, Box, Paper,makeStyles,Button} from '@material-ui/core';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const Practice = () => {
    return (
      <>
            <h1>Hellosafcxz</h1>
            <Paper>
              <Grid container >
                <Grid container lg={5}>
                    <Grid container lg={7}>
                        <Grid item lg={5}>
                          item 1
                        </Grid>
                        <Grid item lg={6}>
                          item 2
                        </Grid>
                    </Grid>
                    <Grid container lg={4}>
                        <Grid item lg={5}>
                          item 1-1
                        </Grid>
                        <Grid item lg={6}>
                          item 2-2
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container lg={6}>
                    <Grid item lg={5}>
                      item 3
                    </Grid>
                    <Grid item lg={6}>
                      item 4
                    </Grid>
                </Grid>
              </Grid>
            </Paper>
      </>         
        //  <Grid container lg={12} style={{backgroundColor:'pink',padding:'10px  0',borderRadius:'20%'}}>
        //    <Grid container  lg={8} style={{padding:'0 5px 5px 0', backgroundColor:'red',borderRadius:'0 10px 10px 0'}}>
        //         <Grid  item lg={6} style={{backgroundColor:'yellow',borderRadius:'20%'}}>
        //           <Paper style={{width:'100%'}}>
        //              <h1>innerGrid1</h1>
        //           </Paper>
        //         </Grid>
        //         <Grid   item lg={6} style={{backgroundColor:'yellow'}}>
        //          <Paper  style={{width:'100%'}}>
        //             <h1>innerGrid1e</h1>
        //           </Paper>
        //         </Grid>
        //     </Grid>
        //     <Grid container lg={4}>
        //         <Grid item lg={5} style={{backgroundColor:'yellow'}}>
        //           <Paper style={{width:'100%'}}>
        //              <h1>innerGrid2</h1>
        //           </Paper>
        //         </Grid>
        //         <Grid   item lg={5} style={{backgroundColor:'yellow'}}>
        //          <Paper  style={{width:'100%'}}>
        //             <h1>innerGrid2e</h1>
        //           </Paper>
        //         </Grid>
        //     </Grid>
        // </Grid> 
      
    )
}

export default Practice;
