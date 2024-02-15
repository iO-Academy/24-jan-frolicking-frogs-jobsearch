import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import RecentJobs from './Components/RecentJobs'
import JobListing from './Components/JobListing/JobListing'

function App() {


  return (
    <>
    
      <BrowserRouter>
      
        <nav className="flex flex-row bg-white justify-between place-items-center gap-5 text-black p-2 pl-3">
            
            <NavLink to="/">Job Search</NavLink>

            <div className='text-slate-500 flex gap-3'>
              <NavLink to="/" className="nav-link">All Jobs</NavLink>
              <NavLink to="/" className="nav-link">Full Time</NavLink>
              <NavLink to="/" className="nav-link">Part Time</NavLink>
              <NavLink to="/" className="nav-link">Contract</NavLink>
            </div>

            <button type="button" disabled className='border-2 border-green-600 text-green-600 p-1 px-2 rounded font-bold'>Post a Job</button>
            
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
