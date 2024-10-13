import { useDraggable } from '@dnd-kit/core';

function Draggable({ id, children, className }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <li
      ref={setNodeRef}
      className={className}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </li>
  );
}

export default Draggable;
