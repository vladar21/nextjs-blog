import Link from 'next/link'
import {useState} from 'react';

const isOpen = false;
export default function Layout() {
  const [isOpen, toggle] = useState(false);
  return (
    <section className='bg-gray-800 xl:w-72'>
        <div className='flex justify-between px-4 py-3 xl:hidden'>
            <div className='relative max-w-xs w-full'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <svg className='h-6 w-6 fill-current text-gray-600' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3199 12.9056L15.4165 14.0023C15.8277 13.9795 16.2465 14.1252 16.5607 14.4393L19.5607 17.4393C20.1464 18.0251 20.1464 18.9749 19.5607 19.5607C18.9749 20.1464 18.0251 20.1464 17.4393 19.5607L14.4393 16.5607C14.1252 16.2465 13.9795 15.8277 14.0023 15.4165L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"/>
                </svg>
                </div>    
                <input className='block w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 py-2 pr-3' placeholder="Search by keywords"/>
            </div> 
            
            <button onClick={() => toggle(!isOpen)} className='inline-flex ml-4 justify-center items-center bg-gray-700 hover:bg-gray-600 focus:text-gray-900 rounded-lg shadow pl-3 pr-3'>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447716 2 0 1.55228 0 1ZM3 7C3 6.44772 3.44772 6 4 6H14C14.5523 6 15 6.44772 15 7C15 7.55228 14.5523 8 14 8H4C3.44772 8 3 7.55228 3 7ZM7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14H11C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12H7Z" fill="#A0AEC0"/>
                </svg>  
                <span className='ml-1 text-white font-medium'>Filters</span>
            </button>   
        </div>
            
        <form className={isOpen?'hidden':'xl:h-full xl:flex xl:flex-col xl:justify-between' }>
            <div className='lg:flex xl:block xl:overflow-y-auto'>
                <div className='px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:border-t-0 xl:w-full'>
                    <div className='flex flex-wrap -mx-2'>                    
                        <label className='block w-1/2 px-2 sm:w-1/4 lg:w-1/2'>
                            <span className='text-sm font-semibold text-gray-500'>Bedrooms</span>
                            <select className='mt-1 block w-full rounded-lg bg-gray-700 border-transparent shadow text-white leading-snug focus:bg-gray-600 focus:shadow-none'>
                                <option>4</option>
                            </select>
                        </label>
                        <label className='block w-1/2 px-2 sm:w-1/4 lg:w-1/2'>
                            <span className='text-sm font-semibold text-gray-500'>Bathrooms</span>
                            <select className='mt-1 block w-full rounded-lg bg-gray-700 border-transparent shadow text-white leading-snug focus:bg-gray-600 focus:shadow-none'>
                                <option>2</option>
                            </select>
                        </label>
                        <label className='mt-4 block w-full px-2 sm:w-1/2 sm:mt-0 lg:mt-4 lg:w-full'>
                            <span className='text-sm font-semibold text-gray-500'>Price range</span>
                            <select className='mt-1 block w-full rounded-lg bg-gray-700 border-transparent shadow text-white leading-snug focus:bg-gray-600 focus:shadow-none'>
                                <option>Up to $2,000/wk</option>
                            </select>
                        </label>                    
                    </div>                
                </div>
                <div className='px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l'>
                    <span className='block text-sm font-semibold text-gray-500'>Property Type</span>
                    <div className='sm:flex sm:-mx-2 lg:block lg:mx-0'>
                        <label className='mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0'>
                            <input className='w-7 h-7 bg-gray-900 border-gray-900 focus:bg-gray-700' type='radio' name='propertyType' value='house' /><span className='ml-2 text-white'>House</span>             
                        </label>
                        <label className='mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0'>
                            <input className='w-7 h-7 bg-gray-900 border-gray-900 focus:bg-gray-700' type='radio' name='propertyType' value='apartment' /><span className='ml-2 text-white'>Apartment</span>
                        </label>
                        <label className='mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0'>
                            <input className='w-7 h-7 bg-gray-900 border-gray-900 focus:bg-gray-700' type='radio' name='propertyType' value='loft' /><span className='ml-2 text-white'>Loft</span>            
                        </label>
                        <label className='mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0'>
                            <input className='w-7 h-7 bg-gray-900 border-gray-900 focus:bg-gray-700' type='radio' name='propertyType' value='townhouse' /><span className='ml-2 text-white'>Townhouse</span>
                        </label>
                    </div>                
                </div>
                <div className='px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full'>
                    <span className='block text-sm font-semibold text-gray-500'>Amenities</span>
                    <div className='sm:flex sm:-mx-2 sm:flex-wrap'>
                        <label className='mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full'>
                            <input className='w-5 h-5 bg-gray-900 border-gray-900 rounded-sm focus:bg-gray-700' type='checkbox' name='balcony' /><span className='ml-2 text-white'>Balcony</span>        
                        </label>
                        <label className='mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full'>
                            <input className='w-5 h-5 bg-gray-900 border-gray-900 rounded-sm focus:bg-gray-700' type='checkbox' name='pool' /><span className='ml-2 text-white'>Pool</span>
                        </label>
                        <label className='mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full'>
                            <input className='w-5 h-5 bg-gray-900 border-gray-900 rounded-sm focus:bg-gray-700' type='checkbox' name='beach' /><span className='ml-2 text-white'>Beach</span>
                        </label>
                        <label className='mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full'>
                            <input className='w-5 h-5 bg-gray-900 border-gray-900 rounded-sm focus:bg-gray-700' type='checkbox' name='petFriendly' /><span className='ml-2 text-white'>Pet friendly</span>
                        </label>
                        <label className='mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full'>
                            <input className='w-5 h-5 bg-gray-900 border-gray-900 rounded-sm focus:bg-gray-700'type='checkbox' name='kidFriendly' /><span className='ml-2 text-white'>Kid friendly</span>
                        </label>
                        <label className='mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full'>
                            <input className='w-5 h-5 bg-gray-900 border-gray-900 rounded-sm focus:bg-gray-700' type='checkbox' name='parking' /><span className='ml-2 text-white'>Parking</span>
                        </label>
                        <label className='mt-3 flex items-center sm:w-1/2 sm:px-2 lg:w-full'>
                            <input className='w-5 h-5 bg-gray-900 border-gray-900 rounded-sm focus:bg-gray-700' type='checkbox' name='airConditioning' /><span className='ml-2 text-white'>Air conditioning</span>
                        </label>
                    </div>                
                </div>
            </div>
            <div className="bg-gray-900 px-4 py-4 sm:text-right">
                <button className='block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg xl:block xl:w-full'>Update results</button>
            </div>                    
        </form>        
    </section>
  )
}