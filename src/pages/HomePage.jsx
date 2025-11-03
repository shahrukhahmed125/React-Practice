import Hero from '../components/Hero.jsx';
import HomeCards from '../components/HomeCards.jsx';
import Job from '../components/Job.jsx';
import ViewAllJobs from '../components/ViewAllJobs.jsx';

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <Job isHome={true} />
        <ViewAllJobs />
    </>
  )
}

export default HomePage