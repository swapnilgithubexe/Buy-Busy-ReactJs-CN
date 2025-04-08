import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './login/Login';
import Register from './register/Register';
import Home from './home/Home';
import ErrorBoundary from './config/errorBoundary';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> }
])


const App = () => {
  return (
    <div className='App'>
      <ErrorBoundary><RouterProvider router={router} /></ErrorBoundary>
    </div>
  )
}

export default App