import './App.css';
import { Grid } from '@material-ui/core';
//component
// import Table from './component/table/Table';
import PortfolioChart from './component/portfolio/Portfolio';
import PortfolioDetails from './component/portfolioDetails/PortfolioDetails';
// import Practice from './component/practice/Practice';



function App() {
  return (
    <div className="App">
    {/* <Practice /> */}
     <Grid container  className="main-container">
          <Grid item lg={9} md={9} sm={12} xs={12} style={{width:'80%',backgroundColor:'#F3F6F9'}}>
                  <PortfolioDetails portfolioUp={true} />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12} style={{width:'20%'}}>
                  <PortfolioChart />
          </Grid>
          {/* <Table /> */}
      </Grid>
    </div>
  );
}

export default App;
