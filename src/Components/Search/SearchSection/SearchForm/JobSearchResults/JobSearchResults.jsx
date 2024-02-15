import { useContext, useEffect, useState } from "react"
import SingleJobSearch from "./SingleJobSearch/SIngleJobSearch"
import SearchSection from "../../SearchSection"
import { useNavigate } from "react-router-dom"
import CurrentUserContext from "../../../../../CurrentUserContext"
import SearchForm from "../SearchForm"

function JobSearchResults() {


    const {searchInfo} = useContext(CurrentUserContext)


    return (

            <div className='bg-white flex justify-center md:px-30 sm:px-30'>
                    <div className='flex flex-col justify-between py-10'>
                        <div className='flex flex-col py-5 justify-between items-baseline'>
                           
                            <div className="flex items-baseline gap-80">
                                <h3 className='text-4xl font-semibold pb-5'>Search Results</h3>
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
                {searchInfo.map(function(job) {
                    return <SingleJobSearch key={job.id} jobTitle={job.job_title} company={job.company} salary={job.salary} type={job.type} logo={job.logo} id={job.id}/>
               })}
               </tbody>
               </table>
                        </div>
                    </div>
                </div>
     )
}
 

export default JobSearchResults

 
