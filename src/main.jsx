import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Page from './pages/page';
import Home from './pages/home';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { path: "", element: <Home /> },
        { path: "page/:category", element: <Page /> }
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ],
  {
    basename: import.meta.env.MODE === 'ghpages' ? '/tamilloom' : '/'
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);