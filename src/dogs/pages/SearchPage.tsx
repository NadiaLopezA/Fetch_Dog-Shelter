import { useEffect } from 'react';

import { NavbarDogShelter, Sidebar } from '../components';
import { ResultsPage, StartSearchPage } from '.';

import { useDogShelter } from '../../hooks/useDogShelterStore';
import Swal from 'sweetalert2';


export const SearchPage = () => {
  const { dogSearchResult, dogErrorMessage, setDogErrorMessage, clearDogErrorMessage } = useDogShelter();

  //Checking if we get results
  useEffect(()=>{    

    if(dogSearchResult && dogSearchResult.total < 1){
      setDogErrorMessage('Try again with other filters!')
    }
  }, [dogSearchResult]);

  useEffect(()=>{
    if(dogErrorMessage !== undefined){
      Swal.fire('No Results', dogErrorMessage, 'question');
    }

    setTimeout(() => {
      clearDogErrorMessage();
    }, 1000);
  },[dogErrorMessage])

  return (
    <>
      <div>
        <NavbarDogShelter />
        <div className="flex h-full w-auto mt-2 relative">
          <Sidebar />
          {
            (dogSearchResult && dogSearchResult.total > 0)
              ?
              <ResultsPage />
              :
              <StartSearchPage />
          }
        </div>
      </div>
    </>
  )
}
