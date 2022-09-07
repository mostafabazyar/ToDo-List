import React, { useState } from "react";
import styles from "./TaskItem.module.css";
import { CheckIcon, PencilSquareIcon, TrashIcon} from "@heroicons/react/24/solid";

export default function TaskItem({ task, deleteTask, toggleTask, enterEditMode}) {
  const [isChaeck, setIsChecked] = useState(task.checked);

  const handleCheckbocChange = (e) => {
    setIsChecked(!isChaeck);
    toggleTask(task.id)
  };
  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type='checkbox'
          className={styles.checkbox}
          checked={isChaeck}
          name={task.name}
          id={task.id}
          onChange={handleCheckbocChange}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className='btn'
          aria-label={`Update ${task.name} task`}
          onClick={() => enterEditMode(task)}
        >
         <PencilSquareIcon strokeWidth={2} width={24} height={24} />
        </button>
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} task`}
          onClick={() => deleteTask(task.id)}
        >
         <TrashIcon strokeWidth={2} width={24} height={24} />
        </button>
      </div>
    </li>
  );
}
