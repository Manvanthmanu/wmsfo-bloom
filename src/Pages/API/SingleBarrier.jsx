import React from 'react'
import Dropdown from '../API/Dropdown'
import Datepicker from '../API/Calender'
import InputField from '../API/InputField'
import CounterParty , {Custodian,AccountName,DayCountConvention,ClearingHouse,Currency,BenchmarkIndex,BusinessCentreHoliday,PaymentFrequency,RestructingType,RollConvention,PriceConvention,OrderTypeCDS,OrderTypeIRS,ValuationCDS,ValuationOptions,Commission,TypeOfBarrier,BusinessDateAdjustment,QuoteFormatcds,TradeTypesirs,TerminationDate,BookingStatus,QuoteType,Rounding,TradeTypeOtc,PrincipalExchange,FeesOtc,DiscountCurve,CashFlowType,Status,TraderDealer,PrimeBrokersServices,OrderType,ExpirationStyle,SettlementType,CurrencyPairs,OrderTypeRepo,SecurityType,TypeOfBarrierSingle,BusinessDateAdjustmentRestBdc ,ReferenceInstrument, BermudaExcerise, Type, Settlement, PaymentTypes, Yesno, NearRateType} from '../Data/Datamain'
import { Grid, Grow } from '@mui/material'
import './style.css'


function SingleBarrier() {
  return (
    <>
    <Grow in={'checked'}>
        <div  spacing={1} className="singlebarrier">
            <div className="singlebarrier-header">
                <h1 className='red'>Single Barrier</h1>
            </div>
            <Grid className='section' container spacing={1}>
                <Dropdown name={TypeOfBarrierSingle} label={TypeOfBarrierSingle.label} />
                <InputField label={'Knock in/out price'} type={'number'}/>
                <Datepicker name={'Effective Date'} label={'Effective Date'}/>
                <Datepicker name={'Termination date'} label={'Termination date'}/>
                <InputField label={'Rebate'} type={'number'}/>
                <Datepicker name={'barrier Instrument '} label={'barrier Instrument '}/>

            </Grid>
        </div>
    </Grow>
    </>
  )
}
function DoubleBarrier() {
  return (
    <>
    <Grow in={'checked'}>
        <div className="singlebarrier">
            <div className="singlebarrier-header" id='barrier'>
                <h1 className='red'>Single Barrier</h1>
            </div>
            <Grid className='section' container spacing={1}>
                <Dropdown name={TypeOfBarrierSingle} label={TypeOfBarrierSingle.label} />
                <InputField label={'Knock in/out price'} type={'number'}/>
                <Datepicker name={'Effective Date'} label={'Effective Date'}/>
                <Datepicker name={'Termination date'} label={'Termination date'}/>
                <InputField label={'Rebate'} type={'number'}/>
                <Datepicker name={'barrier Instrument '} label={'barrier Instrument '}/>

            </Grid>
        </div>
        </Grow>

        <Grow
            in={'checked'}
            style={{ transformOrigin: '0 0 0' }}
            {...('checked' ? { timeout: 1000 } : {})}
        >
        <div className="singlebarrier">
            <div className="singlebarrier-header">
                <h1 className='red'>Double Barrier</h1>
            </div>
            <Grid className='section' container spacing={1}>
                <Dropdown name={TypeOfBarrier} label={TypeOfBarrier.label} />
                <InputField label={'Lower Level'} type={'number'}/>
                <Datepicker name={'Effective Date'} label={'Effective Date'}/>
                <InputField label={'Upper Level'} type={'number'}/>
                <InputField label={'Rebate'} type={'number'}/>
                <Datepicker name={'Termination date'} label={'Termination date'}/>
                <Datepicker name={'barrier Instrument '} label={'barrier Instrument '}/>


            </Grid>
        </div>
        </Grow>
    </>
  )
}

export default SingleBarrier
export {DoubleBarrier}