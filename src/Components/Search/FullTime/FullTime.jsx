import { useContext, useEffect, useState } from "react"
import SingleJobSearch from "../SearchSection/SearchForm/JobSearchResults/SingleJobSearch/SIngleJobSearch"
import CurrentUserContext from "../../../CurrentUserContext"
import FullTimeSingle from "./FullTimeSingle/FullTimeSingle"

function FullTime() {

    const [fullTime, setFullTime] = useState([])
    useEffect(getFullTime, [])

    function getFullTime() {
        fetch ('https://job-search-api.dev.io-academy.uk/jobs?type[]=Full%20Time')
        .then(function (response) {
            return response.json() 
        }).then(function (data) {
            setFullTime(data)
            console.log(data)
        })

    }


    return (

        <>
        <div>
        {fullTime.map(function(job) {
            return <FullTimeSingle key={job.id} jobTitle={job.job_title} company={job.company} salary={job.salary} type={job.type} logo={job.logo} />
        })}
        </div>

        </>

    )
    }

export default FullTime