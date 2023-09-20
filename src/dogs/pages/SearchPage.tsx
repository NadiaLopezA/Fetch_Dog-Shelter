import { NavbarDogShelter, Sidebar } from '../components'
import { ResultsPage, NoResultsPage } from './';

import { useDogShelter } from '../../hooks/useDogShelterStore';




export const SearchPage = () => {
  const { dogSearchResult } = useDogShelter();

  return (
    <>
    <div>      
      <NavbarDogShelter />
      <div className="flex h-full w-auto mt-2 relative">
        <Sidebar />
        {
          (dogSearchResult.total > 0)
            ?
            <ResultsPage />
            :
            <NoResultsPage />
        }
      </div>
    </div>
    </>
  )
}
