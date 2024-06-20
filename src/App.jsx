import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layout
import MainLayout from "./layout/MainLayout";

// pages
import Home from "./pages/Home";
import AddTest from "./pages/AddTest";
import Users from "./pages/Users";
import AllTest from "./pages/AllTest";
import AddUser from "./pages/AddUser";
import Login from "./pages/Login";
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="addtest" element={<AddTest />} />{" "}
        <Route path="alltest" element={<AllTest />} />{" "}
        <Route path="addtest" element={<AddTest />} />
        <Route path="users" element={<Users />} />
        <Route path="adduser" element={<AddUser />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
