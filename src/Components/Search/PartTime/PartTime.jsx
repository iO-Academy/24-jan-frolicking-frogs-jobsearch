import { useEffect, useState } from "react"
import FullTimeSingle from "../FullTime/FullTimeSingle/FullTimeSingle"

function PartTime() {

    const [partTime, setPartTime] = useState([])
    useEffect(getPartTime, [])

    function getPartTime() {
        fetch ('https://job-search-api.dev.io-academy.uk/jobs?type[]=Part%20Time')
        .then(function (response) {
            return response.json() 
        }).then(function (data) {
            setPartTime(data)
        })

    }

    return (

        <div>
        {partTime.map(function(job) {
            return <FullTimeSingle key={job.id} jobTitle={job.job_title} company={job.company} salary={job.salary} type={job.type} logo={job.logo} />
        })}
        </div>

    )
}

export default PartTime