import React from 'react'
import Dropdown from '../API/Dropdown'
import Datepicker from '../API/Calender'
import InputField from '../API/InputField'
import CounterParty , {Custodian,AccountName,DayCountConvention,ClearingHouse,Currency,BenchmarkIndex,BusinessCentreHoliday,PaymentFrequency,RestructingType,RollConvention,PriceConvention,OrderTypeCDS,OrderTypeIRS,ValuationCDS,ValuationOptions,Commission,TypeOfBarrier,BusinessDateAdjustment,QuoteFormatcds,TradeTypesirs,TerminationDate,BookingStatus,QuoteType,Rounding,TradeTypeOtc,PrincipalExchange,FeesOtc,DiscountCurve,CashFlowType,Status,TraderDealer,PrimeBrokersServices,OrderType,ExpirationStyle,SettlementType,CurrencyPairs,OrderTypeRepo,SecurityType,TypeOfBarrierSingle,BusinessDateAdjustmentRestBdc ,ReferenceInstrument, BermudaExcerise, Type, Settlement, PaymentTypes, Yesno, NearRateType , FinancingType ,ordertypeslb} from '../Data/Datamain'



import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material'
import { green,blue } from '@mui/material/colors'
import { createTheme } from '@mui/material'
import { Typography } from '@mui/material'
import './Slb.css'

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

            <Grid container spacing={1} className='mainGrid-2' >
               <h4>Orginal trade</h4>
               <Grid container spacing={1} className='mainGrid-2-1' ></Grid>
               <h2>Financing </h2>   
               </Grid>


            <Grid container spacing={1} className='mainGrid-2' >  
               <Dropdown name={FinancingType} label={FinancingType.label} />
               <Dropdown name={PaymentFrequency} label={PaymentFrequency.label} />
               <Dropdown name={DayCountConvention} label={'accural method'} />
               <Dropdown name={BusinessDateAdjustment} label={'payment BDC'} />
               <Datepicker name={'first payment date '} label={'First payment date '}/>
               <Datepicker name={'LAST PAYMENT DATE '} label={'Last Payment Date'}/>
               <Dropdown classname={'lowsize'} name={PaymentFrequency} label={'coumpounding frequency '} />
               <Datepicker  classname={'lowsize'} name={'Settlement adjustment date '} label={'Settlement adjustment date'}/>
            </Grid>


            <div container spacing={1} className='mainGrid-3' >
              <div>

              <h4>Fixed rate </h4>
              </div>
              
              <Grid container spacing={1} className='mainGrid'>
                <Dropdown name={ordertypeslb} label={ordertypeslb.label} />
                <InputField label={'Cash settlement '} type='text'/>
                <InputField label={'Notional quanity '} type='text'/>
                <InputField label={'Open'} type='text'/>
                <InputField label={'Clean price'} type='text'/>
                <InputField label={'Term'} type='text'/>
                <Datepicker name={'price reset date'} label={'Price reset date'}/>
                <Datepicker name={'Start Date'} label={'Start date'}/>
                <InputField label={'Accured over ride'} type='text'/>
                <Datepicker name={'termination date'} label={'Termination date'}/>
                <InputField label={'Settlment currency '} type='text'/>
                <InputField label={'Holiday centers'} type='text'/>
                <InputField label={'Settlement fx rate'} type='text'/>
                <Datepicker name={'End date'} label={'End date'}/>
              </Grid>


              </div>


              <Grid container spacing={1} className='mainGrid-2' >
                <InputField label={'Hair cut'} type='text'/>
                <InputField label={'Collater'} type='text'/>
                <InputField label={'dirty price'} type='text'/>
              </Grid>


              <Grid container spacing={1} className='mainGrid-2' >
                <InputField label={'Start cash'} type='text'/>
                <Grid item className={'section'} xs={5.5}></Grid>
                <InputField label={'Interest'} type='text'/>
                <Grid item className={'section'} xs={5.5}></Grid>
                <InputField label={'End cash'} type='text'/>
              </Grid>
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
