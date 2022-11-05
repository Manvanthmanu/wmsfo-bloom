import React from 'react'
import Dropdown from '../API/Dropdown'
import Datepicker from '../API/Calender'
import InputField from '../API/InputField'
import CounterParty , {Custodian,AccountName,DayCountConvention,ClearingHouse,Currency,BenchmarkIndex,BusinessCentreHoliday,PaymentFrequency,RestructingType,RollConvention,PriceConvention,OrderTypeCDS,OrderTypeIRS,ValuationCDS,ValuationOptions,Commission,TypeOfBarrier,BusinessDateAdjustment,QuoteFormatcds,TradeTypesirs,TerminationDate,BookingStatus,QuoteType,Rounding,TradeTypeOtc,PrincipalExchange,FeesOtc,DiscountCurve,CashFlowType,Status,TraderDealer,PrimeBrokersServices,OrderType,ExpirationStyle,SettlementType,CurrencyPairs,OrderTypeRepo,SecurityType,TypeOfBarrierSingle,BusinessDateAdjustmentRestBdc ,ReferenceInstrument, BermudaExcerise, Type, Settlement, PaymentTypes, Yesno} from '../Data/Datamain'



import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material'
import { green,blue } from '@mui/material/colors'
import { createTheme } from '@mui/material'
import './repo.css'

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
          <h1 style={{textAlign:'center' }}>interest are cap and floor</h1>
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

           
            <Grid container spacing={1} className='mainGrid-3' > 
              <div className='subheading subheading-1'>
                  <h3 className='subHeading'>FINANCING </h3>
              </div>
              <div className="container">
                <Grid container className='container-sub' >
                  <Dropdown name={PaymentTypes} label={PaymentTypes.label} />
                  <Dropdown name={PaymentFrequency} label={PaymentFrequency.label} />
                  <Dropdown name={DayCountConvention} label={'Accural method '} />
                  <Dropdown name={BusinessDateAdjustment} classname={'lowsize'} label={'Business Day Convention'} />
                  <Datepicker name={'1st  payment date '} label={'1st  payment date '}/>
                  <Datepicker name={'Last Payment date'} label={'Last Payment date'}/>
                  <Dropdown name={PaymentFrequency}  label={'compunding frequency '} />
                  <Datepicker name={'Settlment Adjustment date '} classname={'lowsize'} label={'Settlment Adjustment date '}/>

                </Grid>
              </div>
            </Grid>

            <Grid container spacing={1} className='mainGrid-3' > 
              <div className='subheading subheading-1'>
                  <h3 className='subHeading'>CASH SETTLEMENT </h3>
              </div>
              <div className="container">
                <Grid container className='container-sub' >
                  <Datepicker name={'Open ( Start)'} label={'Open ( Start)'}/>
                  <Datepicker name={'Termination Trade Date'} label={'Termination Trade Date'}/>
                  <Datepicker name={'Term  (Termination date)'} label={'Term  (Termination date)'}/>
                  <Dropdown name={BusinessCentreHoliday} label={'Holiday Centres'} />
                  <InputField label={'Hair Cut'} type={'number'}/>
                </Grid>
              </div>
            </Grid>

            <Grid container spacing={1} className='mainGrid-3' > 
              <div className='subheading subheading-1'>
                  <h3 className='subHeading'>COLLATERAL </h3>
              </div>
              <div className="container">
                <Grid container className='container-sub' >
                  <Dropdown name={OrderTypeRepo} label={OrderTypeRepo.label} />
                  <InputField label={'Dirty Price'} type={'number'}/>
                  <InputField label={'Notional Quanity '} type={'number'}/>
                  <InputField label={'Net Dirty Price'} type={'number'}/>
                  <InputField label={'Clean Price '} type={'number'}/>
                  <InputField label={'Accured'} type={'number'}/>
                  <Dropdown name={Yesno} label={'Price Reset Daily'} />
                  <Dropdown name={Currency} label={Currency.label} />
                  <Dropdown name={Yesno} label={'Accured Over Ride'} />
                  <InputField label={'Start Cashcured'} type={'number'}/>
                  <Dropdown name={Currency} label={'Settlement Currency '} />
                  <InputField label={'Interest'} type={'number'}/>
                  <Dropdown name={Currency} label={'Settlement FX Rate '} />
                  <InputField label={'End Cash'} type={'number'}/>
                  <Dropdown name={Yesno}  classname={'lowsize'} label={'Realised With Holding Tax'} />
                  <Dropdown name={Yesno} classname={'lowsize'} label={'Interest Settles on unwind date'} />

                </Grid>


              </div>
            </Grid>


            <Grid container spacing={1} className='mainGrid-2' >
                <Dropdown name={OrderType} label={'Order type'} />
                <Grid item className={'section'} xs={5.5}></Grid>
                <Dropdown name={Status} label={'Destination'} />
                <Grid item className={'section'} xs={5.5}></Grid>
                <Dropdown name={PrimeBrokersServices} label={'Prime Broker'} />
                <Grid item className={'section'} xs={5.5}></Grid>
                <Dropdown name={Commission} label={Commission.label} />
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
