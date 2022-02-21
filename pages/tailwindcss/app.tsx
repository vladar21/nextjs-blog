
import 'tailwindcss/tailwind.css'
import SiteHeader from '../../components/SiteHeader'
import SearchFilters from '../../components/SearchFilters'
import PropertyCard from '../../components/PropertyCard'

export default function Home() {
  return (

    <div id="app" className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">
      <SiteHeader className='xl:flex-shrink-0' />
      <div className='xl:flex-1 xl:flex xl:overflow-y-hidden'>
        <SearchFilters className='xl:flex-shrink-0'/>
        <main className='py-6 xl:flex-1 xl:overflow-x-hidden'>
          <div className='px-4'>
            <h3 className='text-gray-900 text-xl'>Los Angeles</h3>
            <p>Live like the stars in these luxurious Southern California estates.</p>
          </div>
        
          <div className='mt-6 sm:overflow-x-auto'>
            <div className='px-4 sm:flex sm:-ml-2 sm:pb-8'>
            {[...Array(4)].map((_, index) =>       
            <div id={'promotional' + index} className={index>1?'mt-10 sm:mt-0 sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:px-2':'sm:mt-0 sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:px-2'}>
              <PropertyCard />
            </div>
            )}
            </div>          
          </div>
        </main>
      </div>

    </div>   

  )
}
