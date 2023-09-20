import { useState, useEffect } from 'react';

import { SearchDogsRequest, LocationSearchRequest } from '../../interfaces';

import { DogIcon, AgeComponent, TitleComponent, BreedsComponent, StatesComponent, CityComponent, SubmitButton, DistanceComponent } from './';

import { useDogShelter } from '../../hooks';

import { getNewCoordinates } from '../../helpers';
import { State } from '../../interfaces/Location/State';

export const Sidebar = () => {
  //useDogShelter variables
  const {
    getDogBreeds,
    dogBreedsArray,
    searchDogResults,
    updateSearchData,
    searchdogsWithLocationFilters,
  } = useDogShelter();

  //Sidebar variables and functions
  const [openSideBar, setOpenSideBar] = useState(false);

  const handlerSideBar = () => {
    setOpenSideBar(!openSideBar);
  }

  //AgeComponent variables
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(20);

  //CityComponent variables
  const [city, setCity] = useState("");

  //StatesComponent variables and functions
  const [statesArray, setStateArray] = useState<State[]>([]); 

  const addState = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const state: State = JSON.parse(event.target.value)
    if (statesArray.some(s => s.code === state.code)) return;
    setStateArray([...statesArray, state]);
  };

  //DistanceComponent variables and functions
  const [maxDistance, setMaxDistance] = useState(50);
  const [enabledToggle, setEnabledToggle] = useState(false);
  const [coordinates, setCoordinates] = useState<GeolocationCoordinates>();

  const userLocalization = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates(position.coords);
          setEnabledToggle(!enabledToggle);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  //SubmitButton variables and functions
  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const searchData: SearchDogsRequest = {
      breeds: breedsSelectedArray,
      ageMin: minVal,
      ageMax: maxVal,
    };

    updateSearchData(searchData);

    if (statesArray.length > 0 || city || enabledToggle) {
      const locationFilters: LocationSearchRequest = {
        ...(city ? { city } : {}),
        ...(statesArray.length > 0 ? { states: statesArray.map(state => state.code) } : {}),
      };
      if (coordinates && maxDistance < 100 && enabledToggle) {
        const searchCoordinates = getNewCoordinates(
          coordinates.latitude,
          coordinates.longitude,
          maxDistance
        );
        locationFilters.geoBoundingBox = searchCoordinates;
      }
      searchdogsWithLocationFilters(searchData, locationFilters);
    } else {
      searchDogResults(searchData);
    }
  };

  //BreedsComponent variables and funcitons
  const [breedsSelectedArray, setBreedsSelectedArray] = useState<string[]>([]);

  const addBreed = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (breedsSelectedArray.includes(event.target.value)) return;
    setBreedsSelectedArray([...breedsSelectedArray, event.target.value]);
  };

  useEffect(() => {
    getDogBreeds();
  }, []);

  return (
    <>
      <div
        className={`${openSideBar ? "w-[22rem]" : ""} lg:w-[22rem] mr-4 p-4 ml-1 relative shadow-xl shadow-blue-gray-900/5`}
      >
        <div className='lg:hidden mt-1 mb-2 flex flex-col items-end'>
          <button
            onClick={handlerSideBar}
            className="p-2 divide-y"
          >
            <DogIcon />
            {
              openSideBar
                ?
                <p className="uppercase text-xs text-red-600 font-bold">Close</p>
                :
                <p className = "uppercase text-xs text-orange-400 font-bold">Open</p>
            }
        </button>
      </div>

      <div className={`${openSideBar ? "contents" : "hidden"}  lg:contents`}>
        <TitleComponent
          openSideBar={openSideBar}
        />

        <AgeComponent
          minVal={minVal}
          maxVal={maxVal}
          setMinVal={setMinVal}
          setMaxVal={setMaxVal}
        />
        <BreedsComponent
          dogBreedsArray={dogBreedsArray}
          addBreed={addBreed}
          breedsSelectedArray={breedsSelectedArray}
          setBreedsSelectedArray={setBreedsSelectedArray}
        />
        <StatesComponent
          statesArray={statesArray}
          addState={addState}
          setStateArray={setStateArray}
        />
        <CityComponent
          setCity={setCity}
        />
        <DistanceComponent
          maxDistance={maxDistance}
          setMaxDistance={setMaxDistance}
          enabledToggle={enabledToggle}
          userLocalization={userLocalization}
        />
        <SubmitButton
          onSubmit={onSubmit}
        />
      </div>
    </div >
    </>
  )
}
