import React from 'react'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CounterParty from '../Data/Datamain';
import{AccountName,DayCountConvention,ClearingHouse,Currency,BenchmarkIndex,BusinessCentreHoliday,PaymentFrequency,Commission,TradeTypesirs,BookingStatus,PrincipalExchange,DiscountCurve,CashFlowType,Status,TraderDealer,PrimeBrokersServices,Rounding,OrderType,BusinessDateAdjustmentRestBdc} from '../Data/Datamain';
import { amber } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import {ThemeProvider} from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { green ,blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import './style.css'
import Datepicker from '../../Components/Datepicker';
import Dropdown from '../../Components/Dropdown';

function IrsCoupon(props) {
    
    const [counterparty, setCounterparty] = React.useState('BBVAS');
    const [tradetypesirscoupon, settradetypesirscoupon] = React.useState('assign');
    const [accountname, setAccountName] = React.useState('reg-us-a2021');
    const [traderdealer, setTraderDealer] = React.useState('a001');
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
          main: green['A200'],
        },
        secondary: {
          main: green[500],
        },
      },
    });

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      var counterpartydata= data.get('counterpartydata')
      var principalexchange= data.get(PrincipalExchange.name)
      console.log(counterpartydata ,principalexchange)
    }



  return (
    
  <div style={{background:'black'}}>
      <Container >
        
        <div className="header">
         <h1 style={{textAlign:'center' }}>Interest Rate Swap Coupon</h1>
        </div>
      <ThemeProvider theme={theme}>   
          <Box component='form'  onSubmit={handleSubmit}>
            <Grid container spacing={1} className='mainGrid-1' >

              <Grid className='section section-1-1'  item xs={5.5}>
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
                  name='counterpartydata'
                >
                 {CounterParty.elements.map((option) => (
                    <MenuItem style={{fontSize:'10px'}}  key={option.value} value={option.value}  >
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
              
              <Datepicker/>
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
            {/* ========================================================================================================== */}
            <Grid container spacing={1} className='mainGrid-2' > 
            {/* 1 */}
              <Grid className='section section-1-2-1' item xs={5.5}>
                <Typography>
                  Start Date
                </Typography>
                <Datepicker  value={manvanth}/>
              </Grid>
              {/* 2 */}
              <Grid className='section section-1-2-2' item xs={5.5}>
                <Typography>
                  Terminate Date
                </Typography>
                <Datepicker  value={manvanth}/>
              </Grid>
              {/* 3 */}
                <Dropdown name={PrincipalExchange} lable={PrincipalExchange.label} />
              {/* 4 */}
                <Dropdown name={Currency} lable={Currency.label} />
              {/* 5 */}
                <Dropdown name={ClearingHouse} lable={Currency.label}/>
              {/* 6 */}
                <Dropdown name={BusinessCentreHoliday} lable={BusinessCentreHoliday.label}/>
              {/* 7 */}
              <Grid className='section section-1-2-7' item xs={5.5}>
                <Typography>
                  Notional 
                </Typography>
                <TextField
                  className='textfield5'
                  id="outlined-disabled"
                  sx={{color:'black'}}
                />
              </Grid>
              {/* 8 */}
              <Grid className='section section-1-2-8' item xs={5.5}>
                <Typography>
                  Dirty Price 
                </Typography>
                <TextField
                  className='textfield5'
                  id="outlined-disabled"
                  sx={{color:'black'}}
                />
                
              </Grid>
            </Grid>
            {/* ======================================================================================================= */}
            <Grid container spacing={1} className='mainGrid-3' > 
              <div className='subheading-1'>
                  <h3 className='subHeading'>Fixed Leg</h3>
              </div>
           
              <div className="fixedlegcontainer">
              <Grid container className='sectiondiff section-1-3-1' >
              
                {/* 1 */}
                  <Dropdown name={Currency} lable={'Notional Currency'} />
                  {/* 2 */}
                  <Dropdown name={PaymentFrequency} lable={PaymentFrequency.label} />
                  {/* 3 */}
                  <Dropdown name={DayCountConvention} lable={DayCountConvention.label} />
                  {/* 4 */}
                  <Dropdown name={BusinessDateAdjustmentRestBdc} lable={BusinessDateAdjustmentRestBdc.label} />
                  {/* 5 */}
                  <Grid className='section section-1-3-5' item xs={5.5}>
                    <Typography>
                    First Payment Date
                    </Typography>
                    <Datepicker  value={manvanth}/>
                  </Grid>
                  {/* 6 */}
                  <Grid className='section section-1-3-6' item xs={5.5}>
                    <Typography>
                      Last Payment Date 
                    </Typography>
                    <Datepicker  value={manvanth}/>
                  </Grid>
                  {/* 7 */}
                  <Grid className='section section-1-2-7' item xs={5.5}>
                    <Typography>
                      Fixed Rate 
                    </Typography>
                    <TextField
                      className='textfield5'
                      id="outlined-disabled"
                      type='number'
                      step=".01"
                      inputProps={{ min:1 }}
                      sx={{color:'black'}}
                    />
                  </Grid>
                  {/* 8 */}
                  <Dropdown name={DiscountCurve} lable={DiscountCurve.label} />
                  {/* 9 */}
                  <Dropdown name={CashFlowType} lable={CashFlowType.label} />
                  {/* 10 */}
                  <Dropdown name={BusinessCentreHoliday} lable={'Holiday centers'} />

                </Grid>
              </div>
            </Grid>
            <Grid container spacing={1} className='mainGrid-3' > 
              <div className='subheading-1'>
                  <h3 className='subHeading'>Floating Leg</h3>
              </div>
           
              <div className="fixedlegcontainer"></div>
              <Grid container className='sectiondiff section-1-3-1' >

                <Dropdown name={Currency} lable={'Notional Currency'} />
                <Dropdown name={PaymentFrequency} lable={PaymentFrequency.label} />
                <Dropdown name={DayCountConvention} lable={'Day Count'} />
                <Dropdown name={BusinessDateAdjustmentRestBdc} lable={'Business Day Conven'} />
                <Grid className='section section-1-3-5' item xs={5.5}>
                    <Typography>
                    First Payment Date
                    </Typography>
                    <Datepicker  value={manvanth}/>
                  </Grid>
                  <Grid className='section section-1-3-6' item xs={5.5}>
                    <Typography>
                      Last Payment Date 
                    </Typography>
                    <Datepicker  value={manvanth}/>
                  </Grid>
                  <Dropdown name={BenchmarkIndex} lable={BenchmarkIndex.label} />
                  <Dropdown name={DiscountCurve} lable={DiscountCurve.label} />
                  <Dropdown name={PaymentFrequency} lable={'Rest Frequency'} />
                  <Dropdown name={BusinessCentreHoliday} lable={'Holiday Centers'} />
                  <Grid className='section section-1-2-7' item xs={5.5}>
                    <Typography>
                      Lookback days
                    </Typography>
                    <TextField
                      className='textfield5'
                      id="outlined-disabled"
                      type='number'
                      sx={{color:'black'}}
                    />
                    </Grid>
                  <Dropdown name={DayCountConvention} lable={'Reset Day Count'} />
                  <Grid className='section section-1-2-7' item xs={5.5}>
                    <Typography>
                      Floor Rate
                    </Typography>
                    <TextField
                      className='textfield5'
                      id="outlined-disabled"
                      type='number'
                      sx={{color:'black'}}
                    />
                    </Grid>
                  <Grid className='section section-1-2-7' item xs={5.5}>
                    <Typography>
                    Initial Spread (BPS)
                    </Typography>
                    <TextField
                      className='textfield5'
                      id="outlined-disabled"
                      type='number'
                      sx={{color:'black'}}
                    />
                    </Grid>
                    <Grid className='section section-1-3-6' item xs={5.5}>
                    <Typography>
                      First Reset Date 
                    </Typography>
                    <Datepicker  value={manvanth}/>
                  </Grid>
                  <Dropdown name={Rounding} lable={Rounding.label} />
                  <Grid className='section section-1-2-7' item xs={5.5}>
                    <Typography>
                    stub
                    </Typography>
                    <TextField
                      className='textfield5'
                      id="outlined-disabled"
                      type='number'
                      sx={{color:'black'}}
                    />
                    </Grid>
                  <Dropdown name={BusinessDateAdjustmentRestBdc} lable={'Rest BDC'} />
                  <Grid className='section section-1-2-7' item xs={5.5}>
                    <Typography>
                      Roll
                    </Typography>
                    <TextField
                      className='textfield5'
                      id="outlined-disabled"
                      type='number'
                      sx={{color:'black'}}
                    />
                    </Grid>
              </Grid>

              <Grid container spacing={1} className='mainGrid-5' > 
              <div className='subheading-1'>
                  <h3 className='subHeading'>Trade Instructions (SSI's)</h3>
              </div>
           
              <div className="fixedlegcontainer last containerlast"></div>
              <Grid container className='sectiondiff section-1-3-1' >
                <Dropdown name={OrderType} lable={OrderType.label} />
                <Dropdown name={Status} lable={'Destination'} />
                <Dropdown name={OrderType} lable={'swap transaction type'} />
                <Dropdown name={PrimeBrokersServices} lable={'Prime Broker'} />
                <Grid className='section section-1-2-7' item xs={5.5}>
                    <Typography>
                    FX Float/Fixed
                    </Typography>
                    <TextField
                      className='textfield5'
                      id="outlined-disabled"
                      type='number'
                      sx={{color:'black'}}
                    />
                    </Grid>
                <Dropdown name={Commission} lable={Commission.label} />
              </Grid>
              </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,width:'300px' ,float:'right' ,bgcolor:blue[400] ,color:'white'}}
                
              >
                Submit
              </Button>
            </Grid>
          </Box>
      </ThemeProvider>

      </Container>
    </div>
  )
}


export default IrsCoupon
