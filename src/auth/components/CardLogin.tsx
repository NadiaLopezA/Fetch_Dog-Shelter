import { useEffect } from 'react';

import { useAuthStore, useForm, useValidationFields } from '../../hooks';
import Swal from 'sweetalert2';


const loginFormFields = {
  loginEmail: "",
  loginUsername: "",
};

export const CardLogin = () => {
  const { startLogin, setErrorMessage, clearErrorMessage, errorMessage } = useAuthStore();

  const { loginEmail, loginUsername, onInputChange } = useForm(loginFormFields);

  const { validateEmail, validateUsername } = useValidationFields();

  const loginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateEmail(loginEmail)) {
      setErrorMessage('Email not valid, please introduce a valid email');
      return
    }

    if (!validateUsername(loginUsername)) {
      setErrorMessage('Invalid username. The username can only contain characters, and a length greater than 3 and less than 10.')
      return
    }

    startLogin({ email: loginEmail, name: loginUsername });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('Authentication failed', errorMessage, 'error');
    }

    setTimeout(() => {
      clearErrorMessage()
    }, 10000);

  }, [errorMessage])


  return (
    <>
      <div className="flex min-h-full sm:w-4/5 md:w-4/5 lg:w-full flex-1 flex-col justify-center pb-8 rounded-xl bg-slate-100">
        <div className="bg-cyan-900 rounded-xl text-white">
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center leading-9 tracking-tight text-lg pt-2 text-orange-400">
            Let's spread love, adopt a doggie now!
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={(event) => loginSubmit(event)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="loginEmail"
                  type="email"
                  placeholder=" Introduce your email"
                  required
                  value={loginEmail}
                  onChange={(event) => onInputChange(event)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  User name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="username"
                  name="loginUsername"
                  type="string"
                  placeholder=" Introduce your username"
                  required
                  value={loginUsername}
                  onChange={onInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
