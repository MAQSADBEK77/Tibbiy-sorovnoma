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
import Users from './pages/Users'
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="addtest" element={<AddTest />} />
        <Route path="users" element={<Users />} />
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
