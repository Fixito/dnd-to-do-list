import { useDroppable } from '@dnd-kit/core';

function Droppable({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    border: isOver ? '1px solid blue' : undefined,
    color: isOver ? 'blue' : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

export default Droppable;
