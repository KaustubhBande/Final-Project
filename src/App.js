import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import TurfList from "./pages/TurfList";
import SingleTurf from "./pages/SingleTurf";
import User from "./pages/User";
import UserHome from "./pages/UserHome";
import UserBookings from "./pages/UserBookings";
import Manager from "./pages/Manager";
import ManagerHome from "./pages/ManagerHome";
import ManagerProfile from "./pages/ManagerProfile";
import ManagerBookings from "./pages/ManagerBookings";
import Admin from "./pages/Admin";
import Adminhome from "./pages/Adminhome";
import SearchBookings from "./pages/SearchBookings";
import AdminProfile from "./pages/AdminProfile";
import UserProfiles from "./pages/UserProfiles";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/turflist" element={<TurfList />} />
        <Route exact path="/singleturf" element={<SingleTurf />} />
        {/* <Route exact path="*" element={<Error />}/> */}
      </Routes>

      <Routes>
        <Route exact path="/user" element={<User />} >
          <Route index element={<UserHome />} />
          <Route path="/user/userbookings" element={<UserBookings />} />
          <Route path="/user/userprofile" element={<UserProfiles />} />
        </Route>
      </Routes>

      <Routes>
        <Route exact path="/manager" element={<Manager />} >
          <Route index element={<ManagerHome />} />
          <Route path="/manager/turfbookings" element={<ManagerBookings />} />
          <Route path="/manager/profile" element={<ManagerProfile />} />
        </Route>
      </Routes>

      <Routes>
        <Route exact path="/admin" element={<Admin />} >
          <Route index element={<Adminhome />} />
          <Route path="/admin/searchbookings" element={<SearchBookings />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
