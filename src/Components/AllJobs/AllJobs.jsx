import { useEffect, useState } from "react"

function AllJobs() {

    const [allJobsInfo, setAllJobsInfo] = useState('')
    useEffect(getAllJobsInfo, [])

    function getAllJobsInfo() {
        fetch ('https://job-search-api.dev.io-academy.uk/jobs')
        .then(function (response) {
            return response.json() 
        }).then(function (data) {
            setAllJobsInfo(data)
        })
    }

    return (
 
        <div></div>

    )
}

export default AllJobs