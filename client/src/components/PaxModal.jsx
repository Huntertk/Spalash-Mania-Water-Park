import React, { useEffect, useState } from 'react'
import '../styles/paxModal.scss'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { 
    adultCountIncrease, 
    adultCountDecrease, 
    childCountIncrease, 
    childCountDecrease,
    seniorCountDecrease,
    seniorCountIncrease,
    adultTotalAmount,
    childTotalAmount,
    seniorTotalAmount,
    countTotalBookingAmount,
    cancelBooking,
    closePaxModel,
} from '../features/booking/bookingSlice';



const Pax = ({category, ageText, count, actionType, total}) => {
    const dispatch = useDispatch()
    
    const handleIncrese = () => {
        dispatch(actionType.increase())
    }
    
    const handleDecrease = () => {

        dispatch(actionType.decrease())
    }    
    return (
         <div className="pax">
            <p>
                <span>{category}</span>
                <span>{ageText}</span>
            </p>
            <div className="btnContainer">
                {
                    count === 0 ? <AiOutlineMinusCircle className='disabledBtn'  /> : <AiOutlineMinusCircle onClick={handleDecrease} />
                }
                <p>{count}</p>
                {
                    count === 10 ? <AiOutlinePlusCircle className='disabledBtn'  /> : <AiOutlinePlusCircle onClick={handleIncrese} />
                }
                    
            </div>
            <div className="price">
                <span>MYR {total}</span>
            </div>
        </div>
    )
}

const PaxModal = ({selectedDate}) => {
    const {
        adultCount, 
        childCount, 
        seniorCount,
        adultTotal,
        childTotal,
        seniorTotal,
        totalAmount,
        bookingDate,
        type,
        bookingTitle,
    } = useSelector((store) => store.booking)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(adultTotalAmount())
        dispatch(childTotalAmount())
        dispatch(seniorTotalAmount())
        dispatch(countTotalBookingAmount())

    },[adultCount, childCount, seniorCount])
    const navigate = useNavigate()

  return (
    <div className='paxSelectorContainer'>
        <div className='cancelBookingContainer'>
            <button  className='backIcon' onClick={() => dispatch(closePaxModel())}>Back</button>
            <button  className='crossIcon' onClick={() => {
                dispatch(cancelBooking())
                return navigate("/")
            }}>Cancel</button>
        </div>
        <p className='bookingType'>{bookingTitle}</p>
        <h1>Select number of tickets</h1>
        <div className="paxSelector">
                <Pax  
                category ={"Adult"} 
                ageText={"Above 120cm"} 
                count={adultCount}
                actionType={{
                    increase: adultCountIncrease,
                    decrease: adultCountDecrease
                }}
                total={adultTotal}
                />
                <Pax  
                category ={"Child"} 
                ageText={"90cm - 120cm"} 
                count={childCount}
                actionType={{
                    increase: childCountIncrease,
                    decrease: childCountDecrease
                }}
                total={childTotal}
                />
                <Pax  
                category ={"Senior"} 
                ageText={"above 60 yrs"} 
                count={seniorCount}
                actionType={{
                    increase: seniorCountIncrease,
                    decrease: seniorCountDecrease
                }}
                total={seniorTotal}
                />
        </div>
            <div className="totalPayable">
                <span>Total</span>
               <span>MYR {totalAmount}</span>
            </div>
               
        <div className="dateContainer">
                <p>{bookingDate}  </p> 
                {
                    totalAmount > 0 &&
                    <Link to="/booking"><button>Next</button></Link> 

                }
            
        </div>
    </div>
  )
}

export default PaxModal