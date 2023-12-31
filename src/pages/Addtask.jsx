import React, { useState } from 'react';
import './addtask.scss';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Addtask = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [points, setPoints] = useState('');
  const [option, setOption] = useState('');
  //for goal inputs
  const [goalName, setGoalName] = useState('');
  const [goalPoints, setGoalPoints] = useState('');
  const [goalDays, setGoalDays] = useState('');

  document.title = 'add Task';

  const handleClick = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', option);
    formData.append('duration', duration);
    formData.append('points', points);

    // return;
    try {
      const res = axios
        .post('http://127.0.0.1:80/the_mentor/public/api/add_task', formData)
        .then((res) => {
          // console.log(res.data?.data)
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoal = () => {
    console.log('first');

    const formData = new FormData();
    formData.append('name', goalName);
    formData.append('total_points', goalPoints);
    formData.append('total_days', goalDays);

    // console.log(goalName + goalPoints + goalDays);
    // return;
    try {
      const res = axios
        .post('http://127.0.0.1:80/the_mentor/public/api/add_goal', formData) //
        .then((res) => {
          // console.log(res.data?.data)
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addtask">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="inputcontainer">
          <div className="inputtitle">Create NewTask</div>
          <div className="inputwrapper">
            <input
              className="inputs"
              placeholder="task name"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              className="inputs"
              placeholder="task points"
              type="text"
              onChange={(e) => {
                setPoints(e.target.value);
              }}
            />
            <input
              className="inputs"
              placeholder="task duration"
              type="text"
              onChange={(e) => {
                setDuration(e.target.value);
              }}
            />
            <select
              className="inputs"
              value={option}
              onChange={(e) => {
                setOption(e.target.value);
              }}
            >
              <option value="">Select a type of task</option>
              <option value="daily">daily</option>
              <option value="single">single</option>
            </select>
          </div>
          <button className="btn_input" onClick={() => handleClick()}>
            ADD TASK
          </button>
        </div>
        <div className="inputcontainer">
          <div className="inputtitle">Create New Goal</div>
          <div className="inputwrapper">
            <input
              className="inputs"
              placeholder="Goal name"
              type="text"
              onChange={(e) => {
                setGoalName(e.target.value);
              }}
            />
            <input
              className="inputs"
              placeholder="goal points"
              type="text"
              onChange={(e) => {
                setGoalPoints(e.target.value);
              }}
            />
            <input
              className="inputs"
              placeholder="goal days"
              type="text"
              onChange={(e) => {
                setGoalDays(e.target.value);
              }}
            />
          </div>
          <button className="btn_input" onClick={() => handleGoal()}>
            ADD GOAL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addtask;
