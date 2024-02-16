import { useEffect, useState } from "react"
import FullTimeSingle from "../FullTime/FullTimeSingle/FullTimeSingle"

function AllJobs() {

    const [allJobs, setAllJobs] = useState([])
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
 
        <div className='bg-white flex justify-center mx-10 lg:m-0'>
            <div className='flex flex-col justify-between py-10'>
                <div className='flex flex-col py-5 justify-between items-baseline'>
                
                    <div className="flex items-baseline gap-80">
                        <h3 className='text-4xl font-semibold pb-5'>All Jobs</h3>
                        <a href="/" className='text-sky-600'>View Most Recent jobs →</a>
                    </div>
                    
                    <table className='border-separate-collapse table-auto w-full text-white'>
                        <thead>
                            <tr className='text-left bg-gray-700'>
                                <th className='pl-5'>Job title / Company</th>
                                <th className='px-5'>Type</th>
                                <th className='px-5'>Salary</th>
                                <th className='px-5'>Skills</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allJobs.map(function(job) {
                                return <FullTimeSingle key={job.id} jobTitle={job.job_title} company={job.company} salary={job.salary} type={job.type} logo={job.logo} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>




    )
}

export default AllJobs 