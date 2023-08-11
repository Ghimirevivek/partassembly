import React from 'react';
import Navbar from '../components/Navbar';

const ProductDescriptionPage = ({ onStartButton }) => {
  const productImageUrl =
    'https://www.theengineerspost.com/wp-content/uploads/2022/08/Parts-of-Motorcycle.jpg';

  return (
    <>
      <Navbar />
      <div className='w-screen h-screen flex flex-col items-center justify-center bg-slate-100 gap-4'>
        <h1 className='text-2xl font-bold'>Welcome to the Product Page 👋🏼</h1>
        <p>
          This is the main content area of the dashboard. You can assemble
          various parts and combine them.
        </p>
        <img src={productImageUrl} alt='Product' width='60%' />

        <button
          className='px-2 py-1 font-semibold bg-blue-700 w-auto min-w-[5rem] h-12 rounded-md flex items-center justify-center hover:bg-blue-900 hover:scale-105 text-white'
          onClick={onStartButton}
        >
          Start
        </button>
      </div>
    </>
  );
};

export default ProductDescriptionPage;
