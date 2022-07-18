import React from 'react'
import Dropdown from '../API/Dropdown'
import Datepicker from '../API/Calender'
import InputField from '../API/InputField'
import CounterParty , {Custodian,AccountName,DayCountConvention,ClearingHouse,Currency,BenchmarkIndex,BusinessCentreHoliday,PaymentFrequency,RestructingType,RollConvention,PriceConvention,OrderTypeCDS,OrderTypeIRS,ValuationCDS,ValuationOptions,Commission,TypeOfBarrier,BusinessDateAdjustment,QuoteFormatcds,TradeTypesirs,TerminationDate,BookingStatus,QuoteType,Rounding,TradeTypeOtc,PrincipalExchange,FeesOtc,DiscountCurve,CashFlowType,Status,TraderDealer,PrimeBrokersServices,OrderType,ExpirationStyle,SettlementType,CurrencyPairs,OrderTypeRepo,SecurityType,TypeOfBarrierSingle,BusinessDateAdjustmentRestBdc ,ReferenceInstrument, BermudaExcerise, Type, Settlement, PaymentTypes, Yesno, NearRateType} from '../Data/Datamain'



import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material'
import { green,blue } from '@mui/material/colors'
import { createTheme } from '@mui/material'
import './Fxoptions.css'

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
              <Dropdown name={Custodian} label={'Account Name'} />
              <Datepicker name={'Trade Date'} label={'Trade Date'}/>
              <InputField label={'Deal Number'} value={Math.floor((Math.random() * 1000) + 1)}  disabled={manvanth}/>
              <Datepicker name={'Settlement date'} label={'Settlement date'}/>
              <Dropdown name={TraderDealer} label={TraderDealer.label} />
              <Dropdown name={BookingStatus} label={BookingStatus.label} />
            </Grid>

           
            <Grid container spacing={1} className='mainGrid-2' > 
              <Dropdown name={CurrencyPairs} label={CurrencyPairs.label} />
              <Grid item xs={5.5}></Grid>
              <InputField label={'Call'} type={'number'}/>
              <InputField label={'Put'} type={'number'}/>
              <InputField label={'Notional '} type={'number'}/>
              <Datepicker name={'Expiry  Date'} label={'Expiry  Date'}/>
              <InputField label={'Strike'} type={'number'}/>
              <Grid item xs={5.5}></Grid>
              <Datepicker name={'settlement date '} label={'Settlement date'}/>
              <Grid item xs={5.5}></Grid>
              <InputField label={'cut 1'} type={'number'}/>
              <InputField label={'cut 2'} type={'number'}/>
              <InputField label={'Excerise Type '} type={'text'}/>
              <Datepicker name={'Fixing date '} label={'Fixing date'}/>
              <InputField label={'Premium details'} type={'number'}/>
              <Grid item xs={5.5}></Grid>
              <InputField label={'Order type'} type={'text'}/>
              <InputField label={'currency'} type={'text'}/>
              <InputField label={'Decimal/price/amount'} type={'text'}/>
              <InputField label={'fx rate '} type={'number'}/>


              
            </Grid>

            <Grid container spacing={1} className='mainGrid-3' > 

              <Dropdown name={Currency} label={'settlement  currency'} />
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
