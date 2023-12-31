import React, { useEffect, useState } from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/apiCalls';
import { increase } from '../redux/userSlice';
import { useSelector } from 'react-redux';

const List = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      const res = axios
        .get('http://127.0.0.1:80/the_mentor/public/api/tasks')
        .then((res) => {
          // console.log(res.data?.data)
          setData(res.data?.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e, id, points) => {
    e.preventDefault();

    const formData = new FormData();
    const user = localStorage.getItem('user');
    formData.append('task_id', id);
    formData.append('points', points);
    formData.append('user_id', user);
    // console.log(formData);
    // return
    try {
      const res = axios
        .post('http://127.0.0.1:80/the_mentor/public/api/remove_task', formData)
        .then((res) => {
          const newPts = points + parseInt(localStorage.getItem('points'));
          localStorage.setItem('points', newPts);
          // console.log(res.data?.data)
          setData(res.data?.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const rowss = data || [];
  const rows = [
    {
      id: 234567,
      name: 'jacob',
      calories: 50,
      fat: 50,
      carbs: 50,
      protein: 50,
    },
  ];

  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowss.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.duration}</TableCell>
                <TableCell align="right">{row.points}</TableCell>
                <TableCell align="right">data</TableCell>
                <TableCell align="right">data</TableCell>
                <TableCell align="right">
                  <button
                    className="btn_table"
                    onClick={(e) => handleClick(e, row.id, row.points)}
                  >
                    Completed
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
