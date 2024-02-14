import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import RecentJobs from './Components/RecentJobs'
import JobListing from './Components/JobListing/JobListing'

function App() {


  return (
    <>
    
      <BrowserRouter>

        <nav className="flex flex-row bg-slate-500 justify-center gap-5 text-white p-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Full Time</NavLink>
          <NavLink to="/">Part Time</NavLink>
          <NavLink to="/">Contract</NavLink>
        </nav>
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
