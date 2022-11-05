import React from 'react'
import Dropdown from '../API/Dropdown'
import Datepicker from '../API/Calender'
import InputField from '../API/InputField'
import CounterParty , {Custodian,AccountName,DayCountConvention,ClearingHouse,Currency,BenchmarkIndex,BusinessCentreHoliday,PaymentFrequency,RestructingType,RollConvention,PriceConvention,OrderTypeCDS,OrderTypeIRS,ValuationCDS,ValuationOptions,Commission,TypeOfBarrier,BusinessDateAdjustment,QuoteFormatcds,TradeTypesirs,TerminationDate,BookingStatus,QuoteType,Rounding,TradeTypeOtc,PrincipalExchange,FeesOtc,DiscountCurve,CashFlowType,Status,TraderDealer,PrimeBrokersServices,OrderType,ExpirationStyle,SettlementType,CurrencyPairs,OrderTypeRepo,SecurityType,TypeOfBarrierSingle,BusinessDateAdjustmentRestBdc ,ReferenceInstrument, BermudaExcerise, Type, Settlement, PaymentTypes, Yesno, NearRateType , FinancingType ,ordertypeslb} from '../Data/Datamain'
import BinaryNOTouchOptions ,{ BinaryNodoubleTouchOptions , BinarydoubleoneTouchOptions , BinaryoneTouchOptions , DigitalOptions } from './Switch/Switch'


import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material'
import { green,blue } from '@mui/material/colors'
import { createTheme } from '@mui/material'
import { Typography } from '@mui/material'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grow from '@mui/material/Grow'

import './Bdto.css'

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

function CDS() {
 
  const manvanth=true;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var date1= data.get('date1')
    var date2= data.get('date2')
    var currency= data.get(Currency.name)
    var input= data.get('input1')
    console.log(date1,date2 , currency,input)
  }


  const [changed, setchanged] = React.useState(<BinaryNOTouchOptions/>);
  const handleChange1=(event)=>{
    setchanged(<BinaryNOTouchOptions/>);
  }
  const handleChange2=(event)=>{
    setchanged(<BinaryNodoubleTouchOptions/>);
  }
  const handleChange3=(event)=>{
    setchanged(<BinarydoubleoneTouchOptions/>);
  }
  const handleChange4=(event)=>{
    setchanged(<BinaryoneTouchOptions/>);
  }
  const handleChange5=(event)=>{
    setchanged(<DigitalOptions/>);
  }
   
  return (
    <div style={{background:'black' ,paddingBottom:'100px'}}>
      <Container >
        <div className="header">
          <h1 style={{textAlign:'center' }}>Fx Options</h1>
        </div>
        <ThemeProvider theme={theme}>   
          <Box component='form'  onSubmit={handleSubmit}>

            <Grid container spacing={1} className='mainGrid-1' >
              <Dropdown name={CounterParty} label={CounterParty.label} />
              <Dropdown name={TradeTypesirs} label={TradeTypesirs.label} />
              <Dropdown name={AccountName} label={'Account Name'} />
              <Datepicker name={'Trade Date'} label={'Trade Date'}/>
              <InputField label={'Deal Number'} value={Math.floor((Math.random() * 1000) + 1)}  disabled={manvanth}/>
              <Datepicker name={'Settlement date'} label={'Settlement date'}/>
              <Dropdown name={TraderDealer} label={TraderDealer.label} />
              <Dropdown name={BookingStatus} label={BookingStatus.label} />
            </Grid>

            <Grid container className='barrier' spacing={2}>
            <RadioGroup
                    column="true"
                    defaultValue={'Binary NO Touch Options'}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    
                    name="row-radio-buttons-group"       
                    >
                    <FormControlLabel onClick={handleChange1} value='Binary NO Touch Options' control={<Radio />} label={'Binary NO Touch Options'} />
                    <FormControlLabel onClick={handleChange2} value='Binary No  double Touch Options' control={<Radio />} label={'Binary No  double Touch Options'} />
                    <FormControlLabel onClick={handleChange3} value='Binary double  one Touch Options' control={<Radio />} label={'Binary double  one Touch Options'} />
                    <FormControlLabel onClick={handleChange4} value='Binary one Touch Options' control={<Radio />} label={'Binary one Touch Options'}  />
                    <FormControlLabel onClick={handleChange5} value='Digital Options' control={<Radio />} label={'Digital Options '}  />
                </RadioGroup>
                </Grid>
           
                  {changed}
                
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5, mb: 2 ,width:'300px' ,float:'right' ,bgcolor:blue[400] ,color:'white'}}
              >
                Submit
              </Button>
          </Box>
        </ThemeProvider>
      </Container>
    </div>
  )
}

export default CDS
