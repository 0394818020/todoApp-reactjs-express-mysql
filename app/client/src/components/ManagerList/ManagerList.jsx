import React, { useEffect } from 'react'
import taskServices from '../../services/taskServices.js'
import './ManagerList.scss'
import TaskCard from '../ui/TaskCard/TaskCard.jsx'
import EmptyTaskCard from '../ui/EmptyTaskCard/EmptyTaskCard.jsx'
function ManagerList({ filterTask, setChange, filter, mode }) {

  if (!filterTask || filterTask.length === 0)
    return (
      <div className='ManagerList' key={filter}>
          <EmptyTaskCard/>
      </div>
  )

    return (
    <div className='ManagerList' key={`${filter}-${mode}`}>
        {
          filterTask.map((task, index) =>
            <TaskCard 
              key={index} 
              title={task.title} 
              date={task.created_at} 
              id={task.id}
              setChange={setChange}
              status={task.status}
              completedDate = {task.completed_at}
              style={{ animationDelay : `${index * 0.1}s`}}
            />
          )
        }
    </div>
  )
}

export default ManagerList