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
            console.log(data)
            setRecentJobs(data)
        })
    }

    return (
 
        
            <table class='border-separate-collapse table-auto text-white'>
                <thead>
                     <tr class='text-left bg-gray-700'>
                        <th>Job title / Company</th>
                        <th>Type</th>
                        <th>Salary</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    {recentJobs.map(function(job) {
                    return <SingleJob key={job.id} logo={job.logo} JobTitle={job.job_title} company={job.company} type={job.type} salary={job.salary} skills={job.skills} />
                    })}
                </tbody>
                
            </table>

    )
    
}

export default RecentBox