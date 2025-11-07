import {Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} 
from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import JobPage from "./pages/JobPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Routes with navbar */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobPage />} />
      </Route>
      {/* Route without navbar */}
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;