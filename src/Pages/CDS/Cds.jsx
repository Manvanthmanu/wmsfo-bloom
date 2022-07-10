import React from 'react'
import Dropdown from './API/Dropdown'
import Datepicker from './API/Calender'
import InputField from './API/InputField'
import CounterParty , {Custodian,AccountName,DayCountConvention,ClearingHouse,Currency,BenchmarkIndex,BusinessCentreHoliday,PaymentFrequency,RestructingType,RollConvention,PriceConvention,OrderTypeCDS,OrderTypeIRS,ValuationCDS,ValuationOptions,Commission,TypeOfBarrier,BusinessDateAdjustment,QuoteFormatcds,TradeTypesirs,TerminationDate,BookingStatus,QuoteType,Rounding,TradeTypeOtc,PrincipalExchange,FeesOtc,DiscountCurve,CashFlowType,Status,TraderDealer,PrimeBrokersServices,OrderType,ExpirationStyle,SettlementType,CurrencyPairs,OrderTypeRepo,SecurityType,TypeOfBarrierSingle,BusinessDateAdjustmentRestBdc ,ReferenceInstrument} from '../Data/Datamain'



import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material'
import { green,blue } from '@mui/material/colors'
import { createTheme } from '@mui/material'
import './style.css'

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
          <h1 style={{textAlign:'center' }}>Credit Default Swaps</h1>
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
              <InputField label={'Intiail Margin %'} type={'integer'}/>
              <Dropdown name={Currency} label={'Currency'} />
              <InputField label={'Financing Aggrements'} type={'text'}/>
              <Grid item className='section' xs={5.5}></Grid>
              <Datepicker name={'Start Date'} label={'Start Date'}/>
              <Datepicker name={'Terminate date'} label={'Terminate date'}/>


              
            </Grid>

            <Grid container spacing={1} className='mainGrid-2' >
              <Dropdown  name={BusinessDateAdjustmentRestBdc} label={'Business Adjustment Date'} classname={'manvanth'}/>
              <Dropdown name={BusinessCentreHoliday} label={'Business Centre'} />
              <InputField label={'Recovery Rate'} type={'text'}/>
              <Dropdown name={ReferenceInstrument} label={ReferenceInstrument.label} />
              <Dropdown name={RestructingType} label={RestructingType.label} />
              <InputField label={'Seniority'} type={'number'}/>
              <Dropdown name={ClearingHouse} label={ClearingHouse.label} />

            </Grid>
            <Grid container spacing={1} className='mainGrid-2' >
              <Dropdown name={Currency} label={'Notional Currency'} />
              <InputField label={'FX Rate'} type={'text'}/>
              <Datepicker name={'First Payment Date'} label={'First Payment Date'}/>

              <Dropdown name={PaymentFrequency} label={PaymentFrequency.label} />
              <Dropdown name={RollConvention} label={RollConvention.label} />
              <Dropdown name={DayCountConvention} label={'Day Count'} />

            </Grid>


            <Grid container spacing={1} className='mainGrid-3' > 
              <div className='subheading subheading-1'>
                  <h3 className='subHeading'>Pricing Convention</h3>
              </div>
              <div className="container">
                <Grid container className='container-sub' >
                  <Dropdown name={QuoteType} label={QuoteType.label} />  
                  <InputField label={'Price Divisor'} type={'text'}/>
                  <Dropdown name={QuoteFormatcds} label={QuoteFormatcds.label} />  
                </Grid>
              </div>
            </Grid>


            <Grid container spacing={1} className='mainGrid-3' > 
              <h3>Cost</h3>
              <Dropdown name={OrderTypeCDS} label={OrderTypeCDS.label} />  
              <Grid item className='section' xs={5.5}></Grid>
              <InputField label={'Notional'} type={'number'}/>
              <Grid item className='section' xs={5.5}></Grid>
              <InputField label={'Upfront Fee'} type={'number'}/>
              <Grid item className='section' xs={5.5}></Grid>
              <InputField label={'Deal Spread'} type={'number'}/>
              <Grid item className='section' xs={5.5}></Grid>
              <InputField label={'Trade Spread'} type={'number'}/>

           
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,width:'300px' ,float:'right' ,bgcolor:blue[400] ,color:'white'}}
                
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
