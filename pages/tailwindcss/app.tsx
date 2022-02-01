
import 'tailwindcss/tailwind.css'
import SiteHeader from '../../components/SiteHeader'

export default function Home() {
  return (

    <div id="app" className="min-h-screen bg-gray-200 antialiased">
      <SiteHeader/>
      <section className='flex justify-between bg-gray-800 px-4 py-3'>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <svg className='h-6 w-6 fill-current text-gray-600' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3199 12.9056L15.4165 14.0023C15.8277 13.9795 16.2465 14.1252 16.5607 14.4393L19.5607 17.4393C20.1464 18.0251 20.1464 18.9749 19.5607 19.5607C18.9749 20.1464 18.0251 20.1464 17.4393 19.5607L14.4393 16.5607C14.1252 16.2465 13.9795 15.8277 14.0023 15.4165L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"/>
            </svg>
          </div>    
          <input className='w-5/6 bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 py-2 pr-3' placeholder="Search by keywords"/>
        </div> 
      
          <button className='flex justify-center items-center bg-gray-700 hover:bg-gray-600 focus:text-gray-900 rounded-lg shadow pl-3 pr-3'>
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447716 2 0 1.55228 0 1ZM3 7C3 6.44772 3.44772 6 4 6H14C14.5523 6 15 6.44772 15 7C15 7.55228 14.5523 8 14 8H4C3.44772 8 3 7.55228 3 7ZM7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14H11C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12H7Z" fill="#A0AEC0"/>
</svg>  
            <span className='ml-1 text-white font-medium'>Filters</span>
        </button>    
        
      </section>

      <main className='px-4 py-6'>
        <h3 className='text-gray-900 text-xl'>Los Angeles</h3>
        <p>Live like the stars in these luxurious Southern California estates.</p>
        <div className='mt-6'>
          <div>
            <div>
              <img className='rounded-lg shadow-md h-64' src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
            </div>
            <div className='relative px-4 -mt-16'>
              <div className='bg-white rounded-lg px-4 py-4 shadow-lg'>
                <div className='flex'>
                  <span className='inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-xs'>Plus</span>
                  <div className='ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide'>
                    3 bads &#x2022; 2 baths
                  </div>
                </div>
                <h4 className='ml-1 text-gray-900 font-semibold text-lg'>Modern home in city center</h4>
                <div className='ml-1'>
                  <span className='text-gray-900'>$1,400</span>
                  <span className='ml-1 text-sm text-gray-600'>/wk</span>
                </div>
                <div className='mt-2 flex text-sm text-gray-600'>
                <svg className='h-4 w-4 fill-current text-teal-500' width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
<path d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" fill="#38B2AC"/>
</svg>
<svg className='h-4 w-4 fill-current text-teal-500' width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
<path d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" fill="#38B2AC"/>
</svg>
<svg className='h-4 w-4 fill-current text-teal-500' width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
<path d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" fill="#38B2AC"/>
</svg>
<svg className='h-4 w-4 fill-current text-teal-500' width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
<path d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" fill="#38B2AC"/>
</svg>
<svg className='h-4 w-4 fill-current text-teal-500' width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
<path d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" fill="#38B2AC"/>
</svg>
                  <span className='ml-2'>34 reviews</span>              
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>   

  )
}
