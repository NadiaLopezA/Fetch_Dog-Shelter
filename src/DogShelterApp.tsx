import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { DogShelterRouter } from './router';
import { store } from './store/store';
import { AxiosInterceptor } from './api/appApi';



const DogShelterApp = () => {
  return (
    <>
      <Provider store={store}>
        <AxiosInterceptor>
          <BrowserRouter>
            <DogShelterRouter />
          </BrowserRouter>
        </AxiosInterceptor >
      </Provider>
    </>
  )
}

export default DogShelterApp;
