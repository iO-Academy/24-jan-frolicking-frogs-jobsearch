import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import RecentJobs from "./RecentJobs";
import JobSearchResults from "./SearchSection/SearchForm/JobSearchResults/JobSearchResults";
import SearchSection from "./SearchSection/SearchSection";

function SearchMenu() {
    return(
        <div>
            <BrowserRouter>
                <SearchSection />
                <Link to='/'></Link>
                <Link to='/results'></Link>
                <Routes>
                    <Route path='/results' element={<JobSearchResults />} />
                    <Route path='/' element={<RecentJobs />} />        
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default SearchMenu