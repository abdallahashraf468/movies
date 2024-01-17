import { useState } from 'react'
import Home from './Pages/Home/Home';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Pages/About/about';
import Contact from './Pages/Contact/contact';
import NotFound from './Pages/notFound/notFound';
import PageDetails from './Pages/Details/PageDetails';
import AppLayout from './components/AppLayout/AppLayout';
import { Provider } from 'react-redux';
import store from './store/slices/store';
import Favorites from './Pages/Movies/Favorites';
import List from './Pages/Movies/List';
import { LanguageProvider } from './contexts/language';


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      // { path: '/form', element: <Forms /> },
      { path: '*', element: <NotFound /> },
      { path: '/list', element: <List /> },
    
        
      
      { path: '/details/:id', element: <PageDetails /> },
      { path: 'favorites', element: <Favorites /> }
    ]
  }

])

function App() {
  const [language, setlanguage] = useState('en')
  return (
    <>
      <LanguageProvider value={{language,setlanguage}}>
        <Provider store={store}> <RouterProvider router={router} /></Provider>
      </LanguageProvider>
    
    </>
  )
}

export default App
