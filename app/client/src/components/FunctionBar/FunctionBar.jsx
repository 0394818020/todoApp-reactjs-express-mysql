import React, { useState } from 'react'
import './FunctionBar.scss'
import taskServices from '../../services/taskServices.js';
import useNotify from '../../hooks/useNotify.jsx';
import throttle from '../../helpers/throttle.js';
import useDebounce from '../../hooks/useDebounce.jsx';

function FunctionBar({ filter, setFilter, numberOfTask, setChange }) {

    const [task, setTask] = useState('');

    const notify = useNotify();

    const [loading, isLoading] = useState(false);

    const deBounceValue = useDebounce(task, 200);

    

    //validate

    //function

    const handleInput = (e) => {
        setTask(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key==='Enter'){
            addTask(task);
        }     
    }

    const addTask = async (task) => {
        const res = await taskServices.add(task);
        notify(res);
        setTask('');
        setChange();
    }

    const selectFilter = async (string) => {
        setFilter(string);
    }

    const changeFilterSelectedBackground = (name) => {
        if (filter === name)
            return 'linear-gradient(120deg, rgb(181, 102, 255), rgb(132, 0, 255))';
        return '';
    }

  return (
    <div className='FunctionBar'>

        <div className='FunctionBar-Add'>
            <input 
                type="text" 
                value={task}
                onChange={handleInput} 
                placeholder='Cần phải làm gì?'
                onKeyDown={handleKeyPress}
            />

            <button 
                disabled={!deBounceValue} 
                onClick={() => throttle(() => addTask(task), 600, loading, isLoading)}
            >Thêm</button>
        </div>

        <div className='FunctionBar-Filter'>

            <ul className='FunctionBar-Status'>
                <li style={{ color : '#00b7ffff'}}>{numberOfTask.active || 0} Đang làm</li>
                <li style={{ color : '#1cee00ff'}}>{numberOfTask.completed || 0} Hoàn thành</li>
            </ul>

            <ul className='FunctionBar-Filter-Button'>
                <li className='All' 
                    onClick={() => selectFilter('all')}
                    style={{ background : changeFilterSelectedBackground('all')}}
                >
                    <img src={filter === 'all' ? '/filter-solid.svg' : '/filter.svg'}/> 
                    <p>Tất cả</p>
                </li>

                <li className='Doing' 
                    onClick={() => selectFilter('active')}
                    style={{ background : changeFilterSelectedBackground('active')}}    
                >
                    <img src={filter === 'active' ? '/filter-solid.svg' : '/filter.svg'}/>
                    <p>Đang làm</p>
                </li>
                <li className='Finish' 
                    onClick={() => selectFilter('completed')}
                    style={{ background : changeFilterSelectedBackground('completed')}}     
                >
                    <img src={filter === 'completed' ? '/filter-solid.svg' : '/filter.svg'}/>
                    <p>Hoàn thành</p>
                </li>
            </ul>

        </div>
        
    </div>
  )
}

export default FunctionBar