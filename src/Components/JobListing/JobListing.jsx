import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function JobListing() {

    // const {id} = useParams()

    const [jobInfo, setJobInfo] = useState([])

    useEffect(getJobInfo, [])

    function getJobInfo() {
        fetch ('https://job-search-api.dev.io-academy.uk/jobs')
        .then(function (response) {
            return response.json() 
        }).then(function (data) {
            console.log(data)
            setJobInfo(data)
        })
    }

    return (
        <>
            {jobInfo.map(function(job) {
                return (
                    <div key={job.id}>
						Click on the id to see the details :
						<NavLink to={"/JobListing/" + job.id}> {job.id}</NavLink>
					</div>
                    
                )
            })}
        </>
    )
}

export default JobListing