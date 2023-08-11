import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import PartList from '../components/PartList';
import { useStateContext } from '../context/StateProvider';

const AssemblyPage = ({ onAssembly, setPage }) => {
  const { selectedParts, setSelectedParts, assembledParts, setAssembledParts } =
    useStateContext();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addParts(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addParts = (id) => {
    const partList = selectedParts.find((picture) => id === picture.id);
    setAssembledParts((parts) => [...parts, partList]);
    const removedItem = selectedParts.filter((picture) => id !== picture.id);

    setSelectedParts(removedItem);
  };

  return (
    <>
      <div className='flex items-center justify-between p-4 bg-slate-200 '>
        <div className=' flex flex-col items-center gap-2 rounded-md font-bold border-[3px] border-dotted border-indigo-500'>
          Parts{' '}
          {selectedParts.map((pictures) => (
            <PartList key={pictures.id} pictures={pictures} />
          ))}
        </div>
        <div
          ref={drop}
          className='bg-white p-6 w-[50%] min-h-[50vh] h-auto  border-[3px] border-dotted border-indigo-400 mr-40 flex flex-wrap gap-4 rounded-md'
        >
          {assembledParts.map((pictures) => {
            return <PartList key={pictures.id} pictures={pictures} />;
          })}
        </div>
      </div>
      <div className='flex items-center justify-between w-[98%] p-6'>
        <div
          onClick={() => setPage(2)}
          className='px-2 py-1 font-semibold bg-blue-700 w-auto min-w-[5rem] h-12 rounded-md flex items-center justify-center hover:bg-blue-900 hover:scale-105 text-white'
        >
          Go Back
        </div>
        <button
          className='px-2 py-1 font-semibold bg-blue-700 w-auto min-w-[5rem] h-12 rounded-md flex items-center justify-center hover:bg-blue-900 hover:scale-105 text-white'
          onClick={() => onAssembly()}
        >
          Finish
        </button>
      </div>
    </>
  );
};

export default AssemblyPage;
