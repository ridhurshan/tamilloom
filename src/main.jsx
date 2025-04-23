import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Page from './pages/page';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
  },  
  {
    path: "/page/:category",
    element: <Page />,
    // loader: rootLoader,
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
