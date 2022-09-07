import React from 'react'
import TaskItem from './TaskItem'

import styles from'./TaskItem.module.css' ;


export default function TaskList({ tasks, deleteTask, toggleTask, enterEditMode }) {
  return (
    <ul className={styles.tasks}>
      {
         tasks.sort((a, b) => b.id - a.id).map(task => (
            <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} enterEditMode={enterEditMode}/>
         ))
      }
    </ul>
  )
}