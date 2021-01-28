import React, { useState, Fragment } from 'react'
import './App.css';


const RadianToGrades = () => {
    const [isRadian, setIsRadian] = useState(0)

    const handleToGrades = (radian) => {
        const value = radian.target.value
        return setIsRadian(value * 57.296)  
    }

    return (
        <Fragment>      
            <div className="content">
                <h2>Convert Radians To Grades</h2>
                <h4>Radians</h4>
                <input type="number" onChange={handleToGrades}  placeholder="Number"/>
             
                <h4>Grades</h4>
                <input placeholder={isRadian ? isRadian : '0.00'}  disabled={true}/>
            </div> 
        </Fragment>
    )
}
export default RadianToGrades