import { useEffect, useState } from "react"
import SingleJob from "./SingleJob"

function RecentBox() {
    
    const [recentJobs, setRecentJobs] = useState([])
    useEffect(getRecentJobs, [])

    function getRecentJobs() {
        fetch ('https://job-search-api.dev.io-academy.uk/jobs/recent')
        .then(function (response) {
            return response.json() 
        }).then(function (data) {
            setRecentJobs(data)
        })
    }

    return (
 
        
            <div>
                {recentJobs.map(function(job) {
                    return <SingleJob key={job.id} logo={job.logo} JobTitle={job.job_title} company={job.company} type={job.type} salary={job.salary} skills={job.skills} />
                })}
            </div>

    )
    
}

export default RecentBox