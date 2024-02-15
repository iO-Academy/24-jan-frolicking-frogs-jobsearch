import { useEffect, useState } from "react"
import SingleJobSearch from "./SingleJobSearch/SIngleJobSearch"
import SearchSection from "../../SearchSection"

function JobSearchResults({}) {

        const [allJobsInfo, setAllJobsInfo] = useState([])
        useEffect(getAllJobsInfo, [])
    
        function getAllJobsInfo() {
            fetch (`https://job-search-api.dev.io-academy.uk/jobs`)
            .then(function (response) {
                return response.json() 
            }).then(function (data) {
                console.log(data)
                setAllJobsInfo(data)
            })
        }

    return (

        <>
            <SearchSection />
            <h1>Search results</h1>
            {allJobsInfo.map(function(job) {
                return <SingleJobSearch key={job.id} logo={job.logo} JobTitle={job.job_title} company={job.company} type={job.type} salary={job.salary} skills={job.skills} />
                })}
        </>

    )

}

export default JobSearchResults