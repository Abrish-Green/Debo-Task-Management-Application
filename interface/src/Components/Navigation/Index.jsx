import * as React from 'react'

const Navigation = ()=>{
    return(
      <div className='h-16 w-full border-b-2 shadow-sm bg-white flex flex-row'>
        <ul className='flex flex-row mr-4'>
            <li className='p-[13px]'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            </li>
            <li className='p-2 text-left text-gray-600 text-[20px] font-mono'>
              
              Debo Software
            </li>
        </ul>
        <ul className='flex flex-row'>
            <li className='m-2 w-30'>
                <button className='group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-blue-600 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-gray-500 p-1 '>Your work
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
               
            </li>
            <li className=' m-2 w-30'>
                <button className='group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-blue-600 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-gray-500 p-1'>Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg></button>
            </li>
            <li className=' m-2 w-30'>
                <button className='group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-blue-600 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-gray-500 p-1'>Filters
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg></button>
            </li>
            <li className=' m-2 w-30'>
                <button className='group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-blue-600 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-gray-500 p-1'>Dashboards
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg></button>
            </li>
            <li className=' m-2 w-30'>
                <button className='group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-blue-600 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-gray-500 p-1'>People
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg></button>
            </li>
            <li className='m-2 mr-0 w-30'>
                <button className='group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-blue-600 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-gray-500 p-1'>Apps
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg></button>
            </li>
            <li className='m-2 w-30'>
              <a href="" className='ml-4 whitespace-nowrap inline-flex items-center justify-center px-3 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>Create</a>
            </li>
        </ul>
        <ul className='flex flex-row ml-6'>
          <li className=''>
              <a href="" className=''>
                Search
              </a>
           </li>
           <li className=''>
              <a href="" className=''>
                Icon
              </a>
           </li>
           <li className=''>
              <a href="" className=''>
                Icon
              </a>
           </li>
           <li className=''>
              <a href="" className=''>
                Icon
              </a>
           </li>
           <li className=''>
              <a href="" className=''>
                Icon
              </a>
           </li>

        </ul>
      </div>
    )
}

export default Navigation;