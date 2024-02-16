import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import RecentJobs from "./RecentJobs";
import JobSearchResults from "./SearchSection/SearchForm/JobSearchResults/JobSearchResults";
import SearchSection from "./SearchSection/SearchSection";
import JobListing from "./JobListing/JobListing";
import { useState } from "react";
import CurrentUserContext from "../../CurrentUserContext";
import AllJobs from "./AllJobs/AllJobs";
import FullTime from "./FullTime/FullTime";
import PartTime from "./PartTime/PartTime";
import Contract from "./Contract/Contract";

function SearchMenu() {

    const [searchInfo, setSearchInfo] = useState([])

    return(
        <div>
            <CurrentUserContext.Provider value={ {searchInfo, setSearchInfo} }>

                <BrowserRouter>
                    <nav className="flex flex-row bg-white justify-between place-items-center gap-5 text-black p-2">
                        <NavLink to="/">JobSearch</NavLink>

                        <div className='text-slate-500 flex gap-3'>
                            <NavLink className='nav-link' to="/all-jobs">All Jobs</NavLink>
                            <NavLink className='nav-link' to="/full-time">Full Time</NavLink>
                            <NavLink className='nav-link' to="/part-time">Part Time</NavLink>
                            <NavLink className='nav-link' to="/contract">Contract</NavLink>
                        </div>

                        <button type="button" disabled className='border-2 border-green-600 text-green-600 p-1 px-2 rounded font-bold'>Post a Job</button>
                        
                    </nav>

                    <SearchSection />
    
                    <Link to='/'></Link>
                    <Link to='/results'></Link>
                    <Routes>
                        <Route path="/JobListing/:id" element={<JobListing />}/>
                        <Route path='/results' element={<JobSearchResults />} />
                        <Route path='/' element={<RecentJobs />} /> 
                        <Route path='all-jobs' element={<AllJobs />} /> 
                        <Route path='full-time' element={<FullTime />} /> 
                        <Route path='part-time' element={<PartTime />} /> 
                        <Route path='contract' element={<Contract />} />    
                    </Routes>

                </BrowserRouter>
            </CurrentUserContext.Provider>
        </div>
    )
}

export default SearchMenu