import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import AllJobs from './Components/AllJobs/AllJobs'
import RecentJobs from './Components/RecentJobs'
import JobListing from './Components/JobListing/JobListing'

function App() {


  return (
    <>
    
      <BrowserRouter>

      
        {/* <Link to='/joblisting'>Jobs</Link> */}

        <Routes>
          {/* <AllJobs /> */}
          {/* <RecentJobs /> */}
          <Route path="/JobListing/:id" element={<JobListing />} />
          <Route path='/' element={<RecentJobs />} />
          {/* <Route path="/joblisting" element={<JobListing />} /> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
