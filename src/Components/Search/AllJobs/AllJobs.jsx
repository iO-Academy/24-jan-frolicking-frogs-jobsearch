import { useEffect, useState } from "react"
import JobSearchResults from "../SearchSection/SearchForm/JobSearchResults/JobSearchResults"

function AllJobs() {

    const [allJobs, setAllJobs] = useState('')
    useEffect(getAllJobs, [])

    function getAllJobs() {
        fetch ('https://job-search-api.dev.io-academy.uk/jobs')
        .then(function (response) {
            return response.json() 
        }).then(function (data) {
            setAllJobs(data)
        })
    }

    return (
 
        <JobSearchResults />
    )
}

export default AllJobs 