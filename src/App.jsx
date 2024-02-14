import './App.css'
import AllJobs from './Components/AllJobs/AllJobs'
import RecentJobs from './Components/RecentJobs'
import SingleJob from './Components/RecentJobs/RecentBox/SingleJob'
import SearchSection from './Components/SearchSection/SearchSection'

function App() {


  return (
    <>
      <SearchSection />
      {/* <AllJobs /> */}
      <RecentJobs />
    </>
  )
}

export default App
