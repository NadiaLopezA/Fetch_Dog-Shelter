import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { DogShelterRouter } from './router';
import { store } from './store/store';



export const DogShelterApp = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <DogShelterRouter />
        </BrowserRouter>
      </Provider>
    </>
  )
}

