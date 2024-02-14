import { useEffect, useState } from "react"
import SingleJob from "./SingleJob"

function RecentJobsTable() {
    
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

        <table className='border-separate-collapse table-auto text-white'>
            <thead>
                <tr className='text-left bg-gray-700'>
                    <th className='pl-5'>Job title / Company</th>
                    <th className='px-5'>Type</th>
                    <th className='px-5'>Salary</th>
                    <th className='px-5'>Skills</th>
                </tr>
            </thead>
            <tbody>
                {recentJobs.map(function(job) {
                    return <SingleJob key={job.id} logo={job.logo} jobTitle={job.job_title} company={job.company} type={job.type} salary={job.salary} skills={job.skills} id={job.id} />
                    })}
            </tbody>
        </table>

    )
    
}

export default RecentJobsTable