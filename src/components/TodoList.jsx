import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Droppable from './Droppable.jsx';
import Form from './Form.jsx';
import Todos from './Todos.jsx';

function TodoList({ todos }) {
  const [tasks, setTasks] = useState(todos);

  const addTodo = (text) => {
    const id = Date.now().toString();
    const newTodo = { id, text, status: 'to-do' };
    setTasks([...tasks, newTodo]);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    let updatedTasks = [];

    if (over?.id === 'trash') {
      updatedTasks = tasks.filter((task) => task.id !== active.id);
    } else {
      updatedTasks = tasks.map((task) =>
        task.id === active.id ? { ...task, status: over.id } : task
      );
    }

    setTasks(updatedTasks);
  };

  return (
    <main className='container'>
      <Form onSubmit={addTodo} />
      <DndContext onDragEnd={handleDragEnd}>
        <div className='todo-container'>
          <Droppable id='to-do'>
            <Todos id='to-do' todos={tasks} status='to-do' title='To Do' />
          </Droppable>
          <Droppable id='in-progress'>
            <Todos
              id='in-progress'
              todos={tasks}
              status='in-progress'
              title='In Progress'
            />
          </Droppable>
          <Droppable id='done'>
            <Todos id='done' todos={tasks} status='done' title='Done' />
          </Droppable>
        </div>
        <Droppable id='trash'>
          <div className='trash'>Trash</div>
        </Droppable>
      </DndContext>
    </main>
  );
}

export default TodoList;
