import React ,{useState} from 'react'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CounterParty from '../Data/Datamain';
import{Custodian,AccountName,DayCountConvention,ClearingHouse,Currency,BenchmarkIndex,BusinessCentreHoliday,PaymentFrequency,RestructingType,RollConvention,PriceConvention,OrderTypeCDS,OrderTypeIRS,ValuationCDS,ValuationOptions,Commission,TypeOfBarrier,BusinessDateAdjustment,QuoteFormatcds,TradeTypesirs,TerminationDate,BookingStatus,QuoteType,Rounding,TradeTypeOtc,PrincipalExchange,FeesOtc,DiscountCurve,CashFlowType,Status,TraderDealer,PrimeBrokersServices,OrderType,ExpirationStyle,SettlementType,CurrencyPairs,OrderTypeRepo,SecurityType,TypeOfBarrierSingle,BusinessDateAdjustmentRestBdc} from '../Data/Datamain';
import { amber } from '@mui/material/colors';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from '@mui/material/TextField';
import {ThemeProvider} from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import {grey} from '@mui/material/colors';
import Helmet from 'react-helmet';


import './style.css'
import { fontSize } from '@mui/system';
import Datepicker from '../../Components/Datepicker';

function IrsCoupon(props) {
    
    const [counterparty, setCounterparty] = React.useState('BBVAS');
    const [tradetypesirscoupon, settradetypesirscoupon] = React.useState('assign');
    const [accountname, setAccountName] = React.useState('reg-us-a2021');
    const [traderdealer, setTraderDealer] = React.useState('a001');
    // const [traderdealer, setTraderDealer] = React.useState('a001');
    const [bookingstatus, setBookingStatus] = React.useState(BookingStatus.elements[2].value);
    // const [value, setValue] = React.useState(null);
  
    const handleChange1 = (event) => {
      setCounterparty(event.target.value);
    }
    const handleChange2 = (event) =>{
      settradetypesirscoupon(event.target.value)
    }
    const handleChange3 = (event) =>{
      setAccountName(event.target.value)
    }
    const handleChange4 = (event) =>{
      setTraderDealer(event.target.value)
    }
    const handleChange5 = (event) =>{
      setBookingStatus(event.target.value)
    }


    const manvanth = {
      margin: '10px',
      width: '300px',
      height: '30px',
      fontSize:'12px'
    }

    const theme = createTheme({
      palette: {
        primary: {
          main: grey[50],
        },
        secondary: {
          main: green[500],
        },
      },
    });


  return (
    
  <div >
      <Container >
        
        <div className="header">
         <h1 style={{textAlign:'center' }}>Interest Rate Swaps</h1>
        </div>
      <ThemeProvider theme={theme}>   
          <Box component='form'>
            <Grid container spacing={1} className='mainGrid' >

              <Grid className='section section-1-1' item xs={5.5}>
                <Typography>
                  Counter Party 
                </Typography>
                <FormControl sx={{  minWidth: 120 ,bgcolor:'#FFC000' }} size="small" >
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  onChange={handleChange1}
                  value={counterparty}
                  style={{border:'none' , width:'345px' , height:'40px' ,fontSize:'12px'}}
                >
                 {CounterParty.elements.map((option) => (
                    <MenuItem style={{fontSize:'10px'}} key={option.value} value={option.value}  >
                      {option.text}
                    </MenuItem>
                      ))}
                </Select>
                </FormControl>
              </Grid>

              {/* ======================================== 2*/}
              <Grid className='section section-1-2' item xs={5.5}>
              <Typography>
                  Trade Type  
                </Typography>
                <FormControl sx={{ minWidth: 120, bgcolor:'#FFC000',}} size="small" >
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={tradetypesirscoupon}
                  onChange={handleChange2}
                  style={{border:'none' , width:'345px' , height:'40px' ,fontSize:'12px'}}
                >
                 {TradeTypesirs.elements.map((option) => (
                    <MenuItem style={{fontSize:'10px'}} key={option.value} value={option.value} inputprops={{ style: { fontFamily: 'Arial', color:  amber[400]}}} >
                      {option.text}
                    </MenuItem>
                      ))}
                </Select>
                </FormControl>
              </Grid>

              {/* ================================ 3 */}
              <Grid className='section section-1-1-3' item xs={5.5}>
              <Typography>
                  {AccountName.label} 
                </Typography>
                <FormControl sx={{  minWidth: 120 ,bgcolor:'#FFC000'}} size="small" >
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={accountname}
                  onChange={handleChange3}
                  style={{border:'none' , width:'345px' , height:'40px' ,fontSize:'12px'}}
                >
                 {AccountName.elements.map((option) => (
                    <MenuItem style={{fontSize:'10px'}} key={option.value} value={option.value} inputprops={{ style: { fontFamily: 'Arial', color:  amber[400]}}} >
                      {option.text}
                    </MenuItem>
                      ))}
                </Select>
                </FormControl>
              </Grid>
              {/* ============================ 4 */}
              <Grid className='section section-1-1-4' item xs={5.5}>
              <Typography>
                Trade Date
              </Typography>
              
              <Datepicker  value={manvanth}/>
              </Grid>
              {/* ========================== 5*/}
              <Grid className='section section-1-1-5' item xs={5.5}>

              <Typography>
                Deal Number
              </Typography>
              
                <TextField
                  className='textfield5'
                  disabled
                  id="outlined-disabled"
                  defaultValue={Math.floor((Math.random() * 1000) + 1)}
                />
                
              </Grid>
              {/* ================  6 */}
              <Grid className='section section-1-1-6' item xs={5.5}>
              <Typography>
              Settlement date
              </Typography>
              <Datepicker  value={manvanth}/>
              </Grid>
              {/* ======================= 7 */}
              <Grid item className='section section-1-1-7' xs={5.5}>
                  <Typography>
                    {TraderDealer.label}
                  </Typography>
                  <FormControl sx={{  minWidth: 120 , bgcolor:'#FFC000' }} size="small" >
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={traderdealer}
                      onChange={handleChange4}
                      style={{border:'none' , width:'345px' , height:'40px' ,fontSize:'12px'}}
                    >
                      {TraderDealer.elements.map((option) => (
                        <MenuItem style={{fontSize:'10px'}} key={option.value} value={option.value}  >
                            {option.text}
                        </MenuItem>
                      ))}
                </Select>
                </FormControl>
              </Grid>
              {/* =============== 8 */}
              <Grid className='section section-1-1-8' item xs={5.5}>
              <Typography>
              {BookingStatus.label}
                  </Typography>
                  <FormControl sx={{  minWidth: 120 , bgcolor:'#FFC000' }} size="small" >
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={bookingstatus}
                      onChange={handleChange5}
                      style={{border:'none' , width:'345px' , height:'40px' ,fontSize:'12px'}}
                    >
                      {BookingStatus.elements.map((option) => (
                        <MenuItem style={{fontSize:'10px'}} key={option.value} value={option.value}  >
                            {option.text}
                        </MenuItem>
                      ))}
                </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
      </ThemeProvider>
        {/* </FormControl> */}
      </Container>
    </div>
  )
}


export default IrsCoupon
