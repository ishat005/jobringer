import Navbar from "./components/Navbar/Navbar";
import Employers from "./components/Employers/Employers";
import JobSearch from "./components/JobSearch/JobSearch";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";
import RemoteJobs from "./components/RemoteJobs/RemoteJobs";
import FeaturedEmployers from "./components/FeaturedEmployers/FeaturedEmployers";
import JobLocations from "./components/JobLocations/JobLocations";
import JobsInternational from "./components/JobsInternational/JobsInternational";
import JobData from "./components/JobData/JobData";
import Disclaimer from "./components/Disclaimer/Disclaimer";
import FollowUs from "./components/FollowUs/FollowUs";
import Footer from "./components/Footer/Footer";
import FooterNav from "./components/FooterNav/FooterNav";
import FeaturedJobsDesktop from "./components/FeaturedJobs/FeaturedJobsDesktop";
import RemoteJobsDesktop from "./components/RemoteJobs/RemoteJobsDesktop";
import JobLocationsDesktop from "./components/JobLocationsDesktop/JobLocationsDesktop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Employers />
      <JobSearch />
      <FeaturedJobs />
      <FeaturedJobsDesktop />
      <RemoteJobs />
      <RemoteJobsDesktop />
      <FeaturedEmployers />
      <JobLocations />
      <JobsInternational />
      <JobLocationsDesktop />
      <JobData />
      <Disclaimer />
      <FollowUs />
      <Footer />
      <FooterNav />
    </div>
  );
}

export default App;
