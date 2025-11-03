import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import HomeCards from "./components/HomeCards.jsx";
import Job from "./components/Job.jsx";
import ViewAllJobs from "./components/ViewAllJobs.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <Job />
      <ViewAllJobs />
    </>
  );
};

export default App;