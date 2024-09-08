import React from 'react';
import Vote from './components/vote'

function App() {
  return (
    <div className='flex h-screen items-center w-full justify-center text-blue-400 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
      <div className='text-white text-2xl'>
       <Vote />
      </div>
    </div>
  );
}

export default App;
