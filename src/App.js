import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import TurfList from "./pages/TurfList";
import SingleTurf from "./pages/SingleTurf";
import User from "./pages/User";
import UserProfile from "./pages/UserProfile";
import UserHome from "./pages/UserHome";
import UserBookings from "./pages/UserBookings";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/turflist" element={<TurfList />} />
        <Route exact path="/singleturf" element={<SingleTurf />} />
      </Routes>

      <Routes>
        <Route exact path="/user" element={<User />} >
          <Route index element={<UserHome />} />
          <Route path="/user/userbookings" element={<UserBookings />} />
          <Route path="/user/userprofile" element={<UserProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
