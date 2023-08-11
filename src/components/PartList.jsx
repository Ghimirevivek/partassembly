import React from 'react';
import { useDrag } from 'react-dnd';

const PartList = ({ pictures }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id: pictures.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div>
      <img
        ref={drag}
        key={pictures.id}
        src={pictures.imageUrl}
        alt={pictures.name}
        width={'150px'}
        style={{
          border: isDragging ? '5px solid blue' : '5px transparent',
        }}
      />
    </div>
  );
};

export default PartList;
