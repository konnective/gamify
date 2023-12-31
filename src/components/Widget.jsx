import React, { useEffect } from 'react';
import './widget.scss';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/apiCalls';

const Widget = ({ person }) => {
  const points = parseInt(localStorage.getItem('points'));

  useEffect(() => {
    setPoints();
  }, [points]);
  const setPoints = () => {
    localStorage.setItem('points', person?.data.points);
    console.log(person.data.name);
  };
  // console.log(person?.data[0])
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{person?.data.name}</span>
        <span className="counter">{points}</span>
      </div>
      <div className="right">
        <span className="percentage positive">
          <ArrowDropUpIcon />
          20%
        </span>
      </div>
    </div>
  );
};

export default Widget;
