import React, { useState, Fragment } from 'react'
import './App.css';

const GradesToRadian = () => {
    const [isRadian, setIsRadian] = useState(0)
 
    const handleToRadian = (grades) => {
        const value = grades.target.value
        return setIsRadian(value * 0.01745)
    }

    return (
        <Fragment>
            <div className="content">
                <h2>Convert Grades To Radians</h2>
                <h4>Grades</h4>
                <input type="number" onChange={handleToRadian}  placeholder="Number"/>
             
                <h4>Radians</h4>
                <input placeholder={isRadian ? isRadian : '0.00'}  disabled={true}/>
            </div> 
        </Fragment>
    )
}
export default GradesToRadian