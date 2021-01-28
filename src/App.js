import React, { Fragment } from 'react'
import './App.css';
import Radian from './Radian.jsx'
import Grades from './Grades.jsx'


const App = () => {
  return (
      <Fragment>
        <div className="app">
          <div className="components">
          <div className="component-1">
              <Radian />
            </div>
            <div>
              <Grades />
            </div>
          </div>
        </div>   
      </Fragment>
  );
}

export default App;
