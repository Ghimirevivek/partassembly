import React from 'react';
import { useStateContext } from '../context/StateProvider';
const PartSelectionPage = ({ partsList, onPartSelect, setPage }) => {
  const { selectedParts, setSelectedParts } = useStateContext();

  const togglePartSelection = (part) => {
    const isSelected = selectedParts?.includes(part);
    if (isSelected) {
      setSelectedParts(selectedParts.filter((id) => id !== part));
    } else {
      setSelectedParts([...selectedParts, part]);
    }
  };
  return (
    <div className='pt-10 px-4 w-screen h-screen flex flex-col items-start justify-start bg-slate-100 gap-4'>
      <div className='flex items-center justify-between w-[98%]'>
        <div
          onClick={() => setPage(1)}
          className='px-2 py-1 font-semibold bg-blue-700 w-auto min-w-[5rem] h-12 rounded-md flex items-center justify-center hover:bg-blue-900 hover:scale-105 text-white'
        >
          Go Back
        </div>
        <button
          className='px-2 py-1 font-semibold bg-blue-700 w-auto min-w-[5rem] h-12 rounded-md flex items-center justify-center hover:bg-blue-900 hover:scale-105 text-white'
          onClick={() => onPartSelect()}
        >
          Next
        </button>
      </div>
      <div className='text-3xl font-bold p-4'>Select Parts</div>
      <div className='flex items-center justify-around gap-6 flex-wrap'>
        {partsList.map((part) => (
          <div
            key={part.id}
            className={`rounded-md border-blue-500 p-4 ${
              selectedParts?.includes(part)
                ? 'bg-blue-900 text-white'
                : 'bg-blue-600 text-white'
            }`}
            onClick={() => togglePartSelection(part)}
          >
            <img
              src={part.imageUrl}
              alt={part.name}
              className='w-60 h-60 object-cover'
            />
            <p className='mt-2 text-xl font bold px-4'>{part.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartSelectionPage;
