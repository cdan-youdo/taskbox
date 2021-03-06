import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
     <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(id)}
          id={`archiveTask-${id}`}
          aria-label={`archiveTask-${id}`}
        />
      </label>
      <div className="title">
        <input 
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
          style={{ background: 'red' }}
        />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== ' ' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} id={`pinTask-${id}`} aria-label={`pinTask-${id}`} />
          </a>
        )}
      </div>
    </div>
  )
}
Task.propTypes = {
  /** Composition of the task */
  task: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired,
    /** Current state of the task */
    state: PropTypes.oneOf([
      'TASK_INBOX',
      'TASK_PINNED',
      'TASK_ARCHIVED',
    ]).isRequired,
  }),
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
}

export default Task

