
import 'tailwindcss/tailwind.css'
import SiteHeader from '../../components/SiteHeader'
import SearchFilters from '../../components/SearchFilters'

export default function Home() {
  return (

    <div id="app" className="min-h-screen bg-gray-200 antialiased">
      <SiteHeader/>
      <SearchFilters/>

      <main className='py-6'>
        <div className='px-4'>
          <h3 className='text-gray-900 text-xl'>Los Angeles</h3>
          <p>Live like the stars in these luxurious Southern California estates.</p>
        </div>
       
        <div className='mt-6 sm:overflow-x-auto'>
          <div className='px-4 sm:flex sm:-ml-2 sm:pb-8'>
          { [...Array(4)].map((_, index) =>       
            <div id={'promotional' + index} className={index>1?'mt-10 sm:mt-0 sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:px-2':'sm:mt-0 sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:px-2'}>
              <div className='relative pb-5/6'>
                <img className='absolute inset-0 h-full rounded-lg shadow-md object-cover' src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
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
          ) }
          </div>
        
        </div>
      </main>
    </div>   

  )
}
