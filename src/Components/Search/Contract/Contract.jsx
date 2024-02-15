import { useEffect, useState } from "react"
import FullTimeSingle from "../FullTime/FullTimeSingle/FullTimeSingle"

function Contract() {

    const [contract, setContract] = useState([])
    useEffect(getContract, [])

    function getContract() {
        fetch ('https://job-search-api.dev.io-academy.uk/jobs?type[]=Contract')
        .then(function (response) {
            return response.json() 
        }).then(function (data) {
            setContract(data)
            console.log(data)
        })

    }


    return (

        <>
        <div>
        {contract.map(function(job) {
            return <FullTimeSingle key={job.id} jobTitle={job.job_title} company={job.company} salary={job.salary} type={job.type} logo={job.logo} />
        })}
        </div>

        </>

    )
    }

export default Contract