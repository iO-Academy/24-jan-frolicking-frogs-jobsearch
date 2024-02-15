import { useContext, useEffect, useState } from "react"
import SingleJobSearch from "./SingleJobSearch/SIngleJobSearch"
import SearchSection from "../../SearchSection"
import { useNavigate } from "react-router-dom"
import CurrentUserContext from "../../../../../CurrentUserContext"
import SearchForm from "../SearchForm"

function JobSearchResults() {


    const {searchInfo} = useContext(CurrentUserContext)


    return (

        <>
            
            <div>
                {searchInfo.map(function(job) {
                    return <SingleJobSearch key={job.id} jobTitle={job.job_title} company={job.company} salary={job.salary} type={job.type} logo={job.logo} />
                })}
            </div>
        </>
     )
}
 

export default JobSearchResults

 
