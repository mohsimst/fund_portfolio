import React,{ useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import clsx from 'clsx';
//component
import {getDetails as listDetails} from '../../redux/actions/actions';
// material-ui styling
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import {Grid, Box, Paper,makeStyles,Button} from '@material-ui/core';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
//react-icons
import { GrMoney } from "react-icons/gr";
import { FiAtSign } from "react-icons/fi";
import { RiFileCopyLine } from "react-icons/ri";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import MenuIcon from '@mui/icons-material/Menu';

// css file
import './PortfolioDetails.css';


const useStyles = makeStyles({
    box:{
        margin:'20px 0px 0 0',
        padding:'0 0 0 3px'
        // height:'100vh',
        // display:'flex',
        // justifyContent:'center',
        // alignItems:'center'
    },
    component:{
        // backgroundColor: 'red',
        display: 'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        // marginBottom:'5px',
        padding:'5px 7px',
        fontFamily: 'Montserrat',
        boxShadow:'none',
        fontWeight:800,
        '& > *':{
            marginRight:10
        },
        height:'12vh',
        backgroundColor:'#F3F6F9'

    },
    menuIcon:{
     color:'#8b8888'
    },
    shareName:{
        color:'#8b8888',
        // backgroundColor:'red',
        fontWeight:600
    },
    priceSign:{
        fontSize:18,
        // color:'#959595',
        color:'#919191',
        fontWeight:500
    },
    price:{
        fontFamily:'Roboto',
        fontWeight:700,
        fontSize:20,
        color:'#00b5ac',
    },
    logoContainer:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flexDirection:'column',
    },
    // subtitle:{
       
    // },
    logo:{
        fontSize:20,
        fontWeight:700,
        fontFamily:'PT Sans',
        color:'#8caf7e'
    },
    NameIndex:{
     fontFamily:'Assistant',
     fontWeight:700,
     fontSize:20,
     color: "#000000"
    },
    type:{
        color:'#3c393c',
        fontSize:12,
        fontWeight:700
    },
    icon:{
        marginRight:5,
        fontSize:'12px'
    },
    tableData:{
        fontFamily: "Roboto",
        padding:3,
        fontSize:12,
        fontWeight:400,
        color:'#8f8a8a'
    },
    tableValue:{
        '& > *':{
            fontSize:12,
            fontWeight:600,
            paddingBottom:7,
            // backgroundColor:'red'
        }
    },
    marketContainer:{
        padding:'5px 7px',
        height:'12vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        backgroundColor:'#F3F6F9',
// marginBottom:7,
        "&>*":{
            marginBottom:9,
            fontWeight:600,
            fontSize:12,
        }
    },
    marketValue:{
      fontWeight:700,
      display:'flex',
      justifyContent:'space-between',
      
    },
    linearBar:{
        width:'100%',
    },
    arrow:{
        color:'#13bf13',
        fontSize:14,
        marginRight:0
    },
    btnContainer:{
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:'5px 7px',
        boxShadow:'none',
        backgroundColor:'#F3F6F9',
        height:'12vh',
        '&>*':{     
            fontFamily: "sans-serif",
                    width:'35%',
                    margin:'3px 0',
                    fontSize:'70%',
                    fontWeight:500,
                    color:'#e13232',
                    borderColor:'#e13232',
         },
               

    },
    // btnBox:{
    //     display:'flex',
    //     flexDirection:'column',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     padding:'5px 7 px',
    //     height:'10vh',
    //     '&>*':{
    //         width:'70px',
    //         margin:'3px 0',
    //         color:'#e13232',
    //         borderColor:'#e13232',
    //     },
       
    // }
})

const BorderLinearProgress = styled(LinearProgress)(({ theme, per_return,per_portfolio_value }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' && per_return > 0 || per_portfolio_value ? '#13bf13' : '#c72b2b',
    },
  }));

const PortfolioDetails = ({portfolioUp}) => {
    const classes= useStyles();
    const { shares } = useSelector(state=> state.getDetails)
    const dispatch = useDispatch();

    useEffect(()=> {
     dispatch(listDetails());
      console.log(shares);
    },[dispatch])


    return (
        
         <>
           {
            shares.map(share=>{
            const { scrip,price,quantity,avg_cost,invested_amt,per_portfolio_value,PL,per_return } = share
            return ( 
            <Box sx={{ flexGrow: 1 }} className={classes.box}>
                <Grid container lg={12} xs={12}>
                       <Grid container item lg={12} md={12} sm={12}  spacing={1} style={{padding:'2px 20px 2px 10px',borderRadius:'0 10px'}} >
                       <Paper  style={{backgroundColor:'#ffffff',width:'105%',boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',padding:'4px 4px 4px', display:'flex',flexDirection:'row'}}>
                            <Grid container lg={12} xs={12} spacing={1} > 
                                <Grid container item direction='row' lg={6} md={6} sm={12} xs={12} spacing={1} >
                                        <Grid item lg={7} md={12} sm={6} xs={12}>
                                            <Paper className={classes.component}>
                                                <MenuIcon className={classes.menuIcon} />
                                                <Box style={{display:'flex',flexDirection:'column'}}>
                                                    <Typography className={classes.shareName} variant="title">{scrip}</Typography>
                                                    <Typography className={classes.priceSign} variant="title">$<span className={classes.price}>{price}</span></Typography>
                                                </Box>
                                                <Box className={classes.logoContainer}>
                                                    <Typography variant="title" className={classes.logo}>iShares</Typography>
                                                    <Typography variant="title" className={classes.subtitle} style={{fontSize:'10px',color:'#3e3d3d',marginLeft:'50px',fontWeight:500}}>by Blackbox</Typography>
                                                    <Typography variant="title" className={classes.NameIndex}>S&P 500 Index</Typography>
                                                    <Typography variant="title" className={classes.type}>US Equity</Typography>
                                                </Box>
                                            </Paper>
                                        </Grid>
                                        <Grid item lg={5} md={12} sm={6} xs={12} >
                                            <Paper className={classes.component}>
                                                <Box className={clsx(classes.logoContainer, classes.tableValue)}>
                                                <Typography variant="title"><GrMoney style={{fontSize:10,marginRight:5, color:'#000000',fontWeight:600}}/><span  className={classes.tableData}>Quantity</span></Typography>
                                                <Typography variant="title"><FiAtSign  style={{fontSize:10,marginRight:5, color:'#000000',fontWeight:600}}/><span className={classes.tableData}>Avg. Cost</span></Typography>
                                                <Typography variant="title"><RiFileCopyLine  style={{fontSize:10,marginRight:5, color:'#000000',fontWeight:600}}/><span  className={classes.tableData}>Invested Amt.</span></Typography>
                                                </Box>
                                                <Box className={clsx(classes.logoContainer, classes.tableValue)} >
                                                <Typography variant="title">{quantity}</Typography>
                                                <Typography variant="title">{avg_cost}</Typography>
                                                <Typography variant="title">{invested_amt}</Typography>
                                                </Box>
                                            </Paper>
                                        </Grid>
                                </Grid>    

                                <Grid container item lg={6} md={6} sm={12} xs={12} spacing={1} >
                                    <Grid item lg={5} md={12} sm={12} xs={12}>
                                        <Paper style={{width:'100%',boxShadow:'none'}}>
                                            <Box className={classes.marketContainer} >
                                                <Box className={classes.marketValue}>
                                                    <Typography variant="title" style={{marginRight:'auto'}}>Market Value</Typography>
                                                    <Typography variant="title">${price*quantity}</Typography>
                                                </Box>
                                                <Box className={classes.marketValue} >
                                                <Typography variant="title" style={{marginRight:'auto',color:'#8f8a8a',fontSize:12}}>% of Portfolio Value</Typography>
                                                <Typography variant="title">{per_portfolio_value}%</Typography>
                                                </Box>
                                                <Box sx={{ flexGrow: 1 }}>
                                                <BorderLinearProgress className={classes.linearBar} variant="determinate" value={per_portfolio_value} per_portfolio_value={per_portfolio_value} />
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item lg={5} md={8} sm={8} xs={9}>
                                        <Paper style={{boxShadow:'none'}} >
                                        <Box className={classes.marketContainer}>
                                                <Box className={classes.marketValue}>
                                                    <Typography variant="title" style={{marginRight:'auto'}}>Unrealized P&L</Typography>
                                                    <Typography variant="title">{PL}</Typography>
                                                </Box>
                                                <Box className={classes.marketValue}>
                                                    <Typography variant="title" style={{marginRight:'auto',color:'#8f8a8a',fontSize:12}}>% Return</Typography>
                                                    <Typography variant="title">{ per_return > 0 ? <IoMdArrowDropup  className={classes.arrow}/>: <IoMdArrowDropdown  className={classes.arrow} style={{color:'red'}}/>}{per_return}%</Typography>
                                                </Box>
                                                <Box sx={{ flexGrow: 1 }}>
                                                <BorderLinearProgress className={classes.linearBar} variant="determinate" value={per_return <0?  - per_return: per_return } per_return={per_return} />
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item lg={2} md={4} sm={4} xs={3}>
                                        <Paper className={classes.btnContainer}>
                                            <Button variant="outlined" >BUY</Button>
                                            <Button variant="outlined" >SELL</Button>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>   
                            </Paper>

                        </Grid> 
                    </Grid>
            </Box>
            )
            }
            )
           }
        </>
    )
}

export default PortfolioDetails;