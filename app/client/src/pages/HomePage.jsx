import React, { useEffect } from 'react'
import { useState, useMemo } from 'react'
import NotificationContext from '../components/Notification/NotificationContext.js';
import Notification from '../components/Notification/Notification.jsx';
import HeaderBar from '../components/HeaderBar/HeaderBar.jsx';
import FunctionBar from '../components/FunctionBar/FunctionBar.jsx';
import ManagerList from '../components/ManagerList/ManagerList.jsx';
import FooterBar from '../components/FooterBar/FooterBar.jsx';
import taskServices from '../services/taskServices.js';
import DateFilter from '../components/DateFilter/DateFilter.jsx';

function HomePage() {
    const [noti, setNoti] = useState({ type : '', message : '' });

    const [numberOfTask, setNumberOfTask] = useState({ active : 0, completed : 0 })

    const [filter, setFilter] = useState('all');

    const [list, setList] = useState([]);

    const [mode, setMode] = useState('ascending');

    console.log(1)

    // function
    const setChange = () => {
      tasksFetch();
    }

    useEffect(() => {
      tasksFetch();
    }, [filter]);
    

    const tasksFetch = async () => {
      let accounts = await taskServices.getAll() || [];

        if (!accounts)
          return null;

      const tasks = Array.isArray(accounts.tasks) ? accounts.tasks : [];

      setList(tasks || []);

      let active = 0;
      let completed = 0;

      tasks.forEach(task => {
        if (task.status === 'active')
          active++;
        if (task.status === 'completed')
          completed++;
      })

      setNumberOfTask({ active : active, completed : completed })
    }

    let filterTask = list.filter(task => {
      switch (filter) {
        case "active":
          return task.status === "active";
        case "completed":
          return task.status === "completed";
        default :
          return true;
      }
    })

    if (mode === 'ascending')
      filterTask = filterTask.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    else
      filterTask = filterTask.sort((b, a) => new Date(a.created_at) - new Date(b.created_at));


  return (
    <div className='main-page'>
      <NotificationContext.Provider value={{ noti, setNoti }}>
        <Notification/>
        <HeaderBar/>
        <FunctionBar filter={filter} setFilter={setFilter} numberOfTask={numberOfTask} setChange={setChange}/>
        <ManagerList filterTask={filterTask} setChange={setChange} filter={filter} mode={mode}/>
        <DateFilter mode={mode} setMode={setMode}/>
        <FooterBar numberOfTask={numberOfTask}/>
      </NotificationContext.Provider>
    </div>
  )
}

export default HomePage