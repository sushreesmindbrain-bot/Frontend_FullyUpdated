// // src/App.tsx
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/layout/Layout";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Catalog from "./pages/Dashboard/Catalog";
// import Login from "./pages/Login";
// // import UserAgents from "./pages/Dashboard/UserAgents"; // ← make sure the name matches the component
// // import MainApp from "./pages/Dashboard/User/MainApp";
// import MainApp from "./pages/Dashboard/NewUser/MainApp";
 
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public Route */}
//         <Route path="/login" element={<Login />} />

//         {/* Protected Layout */}
//         <Route element={<Layout />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/catalog" element={<Catalog />} />
//           <Route path="/users" element={<MainApp/>} /> {/* ← corrected */}
         
//           {/* <Route path="/profile" element={<Profile />} />
//           <Route path="/settings" element={<Settings />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Catalog from "./pages/Dashboard/Catalog";
import Login from "./pages/Login";
import MainApp from "./pages/Dashboard/UsersAndAgents/MainApp";
import MainContainer from "./pages/Dashboard/ReportsAndAnalytics/MainContainer";
import MainParent from "./pages/Dashboard/Settings/MainParent";
 import ProfilePage from "./pages/Profile/ProfilePage";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/users" element={<MainApp />} />
          <Route path="/reports" element={<MainContainer />} />
          <Route path="/settings"element={<MainParent/>} />
          <Route path="/profile"element={<ProfilePage/>} />


            
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
