import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Applayout from "./layout/Applayout";
import Landingpage from "./pages/landing";
import Onboardingpage from "./pages/Onboardingpage";
import JobListing from "./pages/JobListing";
import Job from "./pages/Job";
import PostJob from "./pages/PostJob";
import SavedJobs from "./pages/SavedJobs";
import MyJobs from "./pages/My-Jobs";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Landingpage />,
      },
      {
        path: "/onboarding",
        element: <Onboardingpage />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/job/:id",
        element: <Job />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/saved-job",
        element: <SavedJobs />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
