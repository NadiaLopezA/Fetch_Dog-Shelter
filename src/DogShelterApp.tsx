import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { DogShelterRouter } from './router';
import { store } from './store/store';
import { AxiosInterceptor } from './api/appApi';



export const DogShelterApp = () => {
  return (
    <>
      <Provider store={store}>
        <AxiosInterceptor>
          <HashRouter>
            <DogShelterRouter />
          </HashRouter>
        </AxiosInterceptor >
      </Provider>
    </>
  )
}

