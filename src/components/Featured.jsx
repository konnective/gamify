import React from 'react'
import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';


const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <div className="title">Total Revenue</div>
        </div>
        <div className="bottom">
            <div className="featuredchart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
              <p className="title">Total Sales Made</p>
              <p className="amount">110</p>
              <p className="desc">This is to show some description.
              </p>
              <div className="summary">
                <div className="item">
                    <div className="itemtitle">Target</div>
                    <div className="itemresult">
                        <div className="resultamount">$12.4k</div>
                    </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Featured