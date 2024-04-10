
import { Suspense, lazy, useEffect} from 'react';
import Layout from './components/Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { refreshUser } from './redux/auth/operations.js';
import { selectIsRefreshing } from './redux/auth/selectors.js';
import Loader from './components/Loader/Loader.jsx';
import RestrictedRoute from './components/RestrictedRoute.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';



const HomePage = lazy(() => import("./pages/Home/Home.jsx"));
const RegisterPage = lazy(() => import("./pages/Register/Register.jsx"));
const LoginPage = lazy(() => import("./pages/Login/Login.jsx"));
const ContactsPage =  lazy(() => import("./pages/ContactsPage/ContactsPage.jsx"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);
   const isRefreshing = useSelector(selectIsRefreshing)
  return (
    <>
       <Layout></Layout>
   {isRefreshing ? (
     <Loader/>
    ) : (
      
 <Suspense fallback={null}>
       <Routes>
        <Route path="/" element={<HomePage />} />
       <Route path="/register" element={<RestrictedRoute component ={RegisterPage}  redirectTo="/contacts"/>} />
      <Route path="/login" element={<RestrictedRoute component ={LoginPage} redirectTo="/contacts"/>} />
     <Route path="/contacts" element={<PrivateRoute component={ContactsPage} redirectTo="/login"/>} />
      </Routes>
   </Suspense>   
       )
 } 
    </>  
 
  )
}

export default App


 
