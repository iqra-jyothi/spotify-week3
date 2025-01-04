
// import './App.css';
// import { Outlet, useLocation } from 'react-router-dom';
// import Navbar from '../component/Navbar';
// import Loading from '../component/Loading';
// import { useSelector } from 'react-redux';
// import FetchItem from '../component/FetchItem';

// function App() {
//   const fetchstates = useSelector((store) => store.fetchstates);
//   const location = useLocation();

//   // Conditionally render Navbar for non-login/signup pages
//   const hideNavbarRoutes = ['/login', '/signup'];
//   const showNavbar = !hideNavbarRoutes.includes(location.pathname);

//   return (
//     <div className="app">

//       {fetchstates.currentlyfetching ? (
//         <Loading />
//       ) : (
//         <>
//           {showNavbar && <Navbar />}
//           <FetchItem></FetchItem>
//           <Outlet />
//           {/* <FetchItem></FetchItem> */}
//         </>
//       )}
//     </div>
//   );
// }

// export default App;



import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar';
import { useSelector } from 'react-redux';
import FetchItem from '../component/FetchItem';

function App() {
  const location = useLocation();

  // Conditionally render Navbar for non-login/signup pages
  const hideNavbarRoutes = ['/login', '/signup'];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  // Check if the current route is Home
  const isHomeRoute = location.pathname === '/home';

  return (
    <div className="app">
      {/* Render Navbar only for routes other than login/signup */}
      {showNavbar && <Navbar />}
      
      {/* Render FetchItem only on /home */}
      {isHomeRoute && <FetchItem />}
      
      {/* Render the rest of the app */}
      <Outlet />
    </div>
  );
}

export default App;
