import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function JobListing() {

    const {id} = useParams()

    const [jobCompany, setJobCompany] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [jobType, setJobType] = useState('')
    const [jobLogo, setJobLogo] = useState('')
    const [jobDesc, setJobDesc] = useState('')
    const [jobSalary, setJobSalary] = useState('')
    const [jobDatePosted, setDatePosted] = useState('')
    

    useEffect(getJobInfo, [])

    function getJobInfo() {
        fetch (`https://job-search-api.dev.io-academy.uk/jobs/${id}`)
        .then(function (response) {
            return response.json() 
        }).then(function (data) {
            console.log(data)
            setJobCompany(data.company)
            setJobTitle(data.job_title)
            setJobType(data.type)
            setJobLogo(data.logo)
            setJobDesc(data.job_description)
            setJobSalary(data.salary)
            setDatePosted(data.posted)
        })
    }

    return (
        <div className="flex flex-col">
            <div className="bg-blue-500 text-white flex flex-row gap-1">
                {jobTitle}
                {jobType}
            </div>
            <div>
                <img src={jobLogo} alt="" />
                {jobCompany}
            </div>
            <div>
                <div>
                    £{jobSalary}
                </div>
                <div>
                    {jobType}
                </div>
                <div>
                    {jobDatePosted}
                </div>
            </div>
            <div>
                <h3>Job Description:</h3>
                {jobDesc}
            </div>
            <div>
                <button>Apply Now</button>
                <button>Save for later</button>
            </div>
        </div>
    )
}

export default JobListing