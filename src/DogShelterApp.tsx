import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { DogShelterRouter } from './router';
import { store } from './store/store';
import { AxiosInterceptor } from './api/appApi';



export const DogShelterApp = () => {
  return (
    <>
      <Provider store={store}>
        <AxiosInterceptor>
          <BrowserRouter basename="/index.html">
            <DogShelterRouter />
          </BrowserRouter>
        </AxiosInterceptor >
      </Provider>
    </>
  )
}

