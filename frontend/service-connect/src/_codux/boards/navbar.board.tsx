import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Navbar',
    Board: () => 
            <header className="bg-slate-400 shadow-sm h-auto justify-center">
      <div className="flex justify-between items-center max-w-9xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
          <span className="text-white">service</span>
          <span className="text-yellow-300">Connect</span>
        </h1>
        
        <div className="flex items-center">
          <button
            href="/signin"
            className="rounded-full bg-slate-700 hover:bg-slate-200 text-white hover:text-black font-bold py-2 px-4 "
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
   ,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 33,
        canvasMargin: {
            top: 1,
            left: 20
        },
        canvasHeight: 77
    }
});
