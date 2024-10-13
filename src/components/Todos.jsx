import Draggable from './Draggable.jsx';

function Todos({ todos, title, status }) {
  return (
    <section className='todo-section'>
      <h2 className='todo-section__title'>{title}</h2>
      <ul className='todo-list'>
        {todos
          .filter((todo) => todo.status === status)
          .map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
      </ul>
    </section>
  );
}

function TodoItem({ id, text }) {
  return (
    <Draggable id={id} className='todo-item'>
      {text}
    </Draggable>
  );
}

export default Todos;
