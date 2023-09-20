import { useState } from 'react';

import { useDogShelter } from '../../hooks/useDogShelterStore';

import { DoggieCard, Pagination, ResultPageDataOrder, ResultPageHeader, MatchDoggieCard } from '..';

import { Dog } from '../../interfaces';


export const ResultsPage = () => {
  const { searchDogResults, updateSortData, dogsInformationArray, dogSearchResult, getMatch } = useDogShelter();

  const [selectedDogs, setSelectedDogs] = useState<Dog[]>([]);
  const [sortType, setSortType] = useState("asc");
  const [sortFilter, setSortFilter] = useState("breed");
  const [openModal, setOpenModal] = useState(false);

  const changeSortFilter = (data: string) => {
    setSortFilter(data.toLowerCase())
    updateSortData({ sortFilter, sortType })
    const sort = `${data.toLowerCase()}:${sortType}`
    searchDogResults({ sort });
  }

  const changeSortType = (data: string) => {
    setSortType(data)
    updateSortData({ sortFilter, sortType })
    const sort = `${sortFilter}:${data}`
    searchDogResults({ sort });
  }

  const matchDog = () => {
    if (selectedDogs.length <= 0) return;

    setOpenModal(!openModal);
    getMatch(selectedDogs);
    setSelectedDogs([]);
  }

  const addSelectedDogs = (dog: Dog) => {
    selectedDogs.some(d => d.id === dog.id)
      ? setSelectedDogs(selectedDogs.filter(d => d.id !== dog.id))
      : setSelectedDogs([...selectedDogs, dog])
  }


  return (
    <>
      <div className={`${openModal ? 'opacity-40' : ''} w-full h-full min-h-screen`} >
        <ResultPageHeader
          matchDog={matchDog}
          selectedDogs={selectedDogs.length}
        />
        <ResultPageDataOrder
          sortType={sortType}
          changeSortType={changeSortType}
          changeSortFilter={changeSortFilter}
        />
        <div className="grid gap-x-6 gap-y-6 p-8 grid-cols-1 sm:grid-cols-2 md:grid-col-2 2xl:grid-cols-4">
          {
            dogsInformationArray.map((dog, i: number) => (
              <div
                onClick={() => addSelectedDogs(dog)}
                key={i}>

                <DoggieCard
                  dog={dog}
                  isSelected={selectedDogs.some(d => d.id === dog.id)}
                />
              </div>

            ))
          }
        </div>
        <Pagination
          total={dogSearchResult.total}
        />
        <MatchDoggieCard
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      </div>
    </>
  )
}
