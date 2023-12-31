import React, { useState } from 'react';
import './singlegoal.scss';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Singlegoal = () => {
  const [data, setdata] = useState([]);

  const handlenext = async (id) => {
    const user = localStorage.getItem('user');
    const formData = new FormData();
    formData.append('id', id);
    formData.append('user_id', user);
    try {
      const res = await axios
        .post('http://127.0.0.1:80/the_mentor/public/api/goal_next', formData)
        .then((response) => {
          setdata(response?.data.data);
          console.log(response?.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getGoals = async () => {
    const res = await axios.get(
      'http://127.0.0.1:80/the_mentor/public/api/goals'
    );
    // console.log(res.data?.data);
    setdata(res.data?.data);
    return res.data.data;
  };
  const query = useQuery({ queryKey: ['goals'], queryFn: getGoals });

  const val = 10;
  return (
    <>
      {data.map((item) => (
        <div className="single_goal" key={item.id}>
          <div className="goal-title">{item?.name}</div>
          <div className="points">
            {item?.points}/{item?.total_points}
          </div>
          <div className="points">Days remaining:{item?.days}</div>
          <div className="btn" onClick={() => handlenext(item.id)}>
            Next
          </div>
          <div className="progress-bar">
            <LinearProgress variant="determinate" value={item.percent} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Singlegoal;
