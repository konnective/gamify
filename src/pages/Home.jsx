import React, { useEffect } from 'react';
import './home.scss';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import Chart from '../components/Chart';
import List from '../components/List';
import Widget from '../components/Widget';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { SettingsRemote } from '@mui/icons-material';
import { redirect } from 'react-router-dom';

const Home = () => {
  // const [userData, setUserData] = useState([])
  // const points = useSelector((state) => state.user.points);
  document.title = 'home';
  const user = localStorage.getItem('user');
  const ddd = [
    {
      name: 'kub',
      points: 30,
    },
  ];

  const getData = async () => {
    const user = localStorage.getItem('user');
    const formData = new FormData();
    formData.append('user_id', user);

    // console.log("res.data")

    const res = await axios.post(
      'http://127.0.0.1:80/the_mentor/public/api/user_data',
      formData
    );
    return res.data.data;
  };

  const query = useQuery({ queryKey: ['user'], queryFn: getData });

  const handleRefresh = () => {
    const res = axios.get(
      'http://127.0.0.1:80/the_mentor/public/api/daily_task'
    ); //http://127.0.0.1:80/the_mentor/public/api
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          {query.data ? <Widget person={query} /> : <p>Loading...</p>}
          <div className="spacing"></div>
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listcontainer">
          <div className="listtitle">Task List</div>
          <button className="refresh" onClick={() => handleRefresh()}>
            Refresh
          </button>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
