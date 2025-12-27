import React, {useState} from 'react'
import './TaskCard.scss'
import taskServices from '../../../services/taskServices.js';
import useNotify from '../../../hooks/useNotify.jsx';

function TaskCard({ title, date, id, setChange, status, completedDate, style}) {

    const [edit, setEdit] = useState(false);

    const [newTitle, setNewTitle] = useState(title);

    const [permission, setPermission] = useState(false);

    const notify = useNotify();

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('vi-VN');
    };

    const editMode = () => {
        setEdit(true);
        setNewTitle(title);
    }

    const saveEdit = async () => {
        const res = await taskServices.update(id, newTitle);
        notify(res);
        setEdit(false);

        if (!res.ok)
            return null;

        setChange(prev => prev.map(task => {
            if (task.id === res.newTask.id) {
                if (task.title !== res.newTask.title)
                    return {...res.newTask, status : task.status};
                else 
                    return task;
            }
            else
                return task;
        }));
        
    }

    const deleteTask = async () => {
        const res = await taskServices.delete(id);
        setPermission(false);
        notify(res);

        if (!res.ok)
            return null;

        setChange(prev => prev.filter(task => task.id !== id));
    }

    const finishTask = async () => {
        const res = await taskServices.finishTask(id);
        notify(res)

        if (!res.ok)
            return null;

        setChange(prev => prev.map(task => {
            if (task.id === id)
                return { ...task, status : 'completed', completed_at : Date.now()};
            return task;
        }));
    } 

  return (
    <div className='TaskCard' id={id} style={style}>
        {   
        !edit ?
            <>
                <div className='TaskCard-icon'>
                    {
                    status==='active' ?
                        <img src="/check-circle.svg" onClick={finishTask}/>
                        :
                        <img src="/check-circle-solid.svg"/>
                    }
                    
                </div>
                <div className='TaskCard-data'>
                    <p className='title'>{title}</p>

                    {
                        status === 'active'?
                            <p className='date'> Bắt đầu lúc: 📅 {formatDate(date)}</p>
                            :
                            <p className='date'> Hoàn thành lúc: 📅 {formatDate(completedDate)}</p>
                    }
                </div>
                <div className='TaskCard-func'>
                    
                    {
                    status ==='active' ?
                        
                        !permission ?
                            <>
                                <img src="/trash.svg" onClick={() => setPermission(true)}/>
                                <img src="/edit-pencil.svg" onClick={editMode} />
                            </>
                            :
                            <>
                                <img src='/trash-solid.svg' onClick={deleteTask}/>
                                <img src='xmark.svg' onClick={() => setPermission(false)}/>
                            </>
                        :
                        !permission ?
                            <>
                                <img src="/trash.svg" onClick={() => setPermission(true)}/>
                            </>
                            :
                            <>
                                <img src='/trash-solid.svg' onClick={deleteTask}/>
                                <img src='xmark.svg' onClick={() => setPermission(false)}/>
                            </>
                    }
                    
                    
                </div>
            </>
            : 
            <>
                <div className='TaskCard-data1'>
                    <input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
                    <button onClick={saveEdit}>Lưu</button>
                </div>
            </>
        }   
    </div>
  )
}

export default TaskCard