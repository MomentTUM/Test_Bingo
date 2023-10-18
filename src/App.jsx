import React from 'react';
import './App.css';
import logoBingo from './assets/bingoTxT.png';
import ProvinceSet from './components/ProvinceSet';

function App() {
  return (
    <>
      <div className='flex bg-[radial-gradient(at_center_top,_#4585BB,_#18548B,_#0D4171)]'>
        <div className='w-screen h-screen flex justify-between'>
          <div className='flex-1'>{/* side left */}</div>
          <div className='flex-[2_1_0%] pt-5 pb-5'>
            <div className='w-auto flex justify-center mb-5'>
              <img src='https://www.tat.or.th/images/logo/TAT-logo-header.svg' alt='logo' />
            </div>
            <p className='sm:text-lg md:text-2xl lg:text-3xl flex'>
              Traveling throughout the province,
            </p>
            <p className='sm:text-lg md:text-2xl lg:text-3xl flex justify-end mb-5'>
              you never know what you'll find.
            </p>
            <div className='w-auto flex justify-center mb-5'>
              <img src={logoBingo} alt='bingo' />
            </div>
            <div className='flex'>
              <h2 className='text-lg pr-2'>Your province :</h2>
              <h2 className='text-sm pt-2 text-blue-300'>Bangkok</h2>
            </div>
            <ProvinceSet />
          </div>
          <div className='flex-1'>{/* side right */}</div>
        </div>
      </div>
    </>
  );
}

export default App;
