import JobSearchResults from "./SearchForm/JobSearchResults/JobSearchResults"
import SearchForm from "./SearchForm/SearchForm"

function SearchSection() {

    return (
        <>
        <div className="bg-slate-500">
            <img src="" alt="" />
            <h1>Find your perfect job</h1>
            <SearchForm />
        </div>

        <JobSearchResults />
        
        </>
    )

}

export default SearchSection