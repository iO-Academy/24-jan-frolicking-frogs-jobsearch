import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SimilarJobs from "./SimilarJobs/SimilarJobs"
import JobSkills from "./SimilarJobs/JobSkills/JobSkills"

function JobListing() {

    const {id} = useParams()

    const [jobCompany, setJobCompany] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [jobType, setJobType] = useState('')
    const [jobLogo, setJobLogo] = useState('')
    const [jobDesc, setJobDesc] = useState('')
    const [jobSalary, setJobSalary] = useState('')
    const [jobDatePosted, setDatePosted] = useState('')
    const [jobSkills, setJobSkills] = useState([])

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
            setJobSkills(data.skills)
        })
    }

    return (
        <div className="bg-slate-100">
            <div className="flex flex-col">
                <div className="bg-blue-500 text-white flex flex-row h-32 m-0 place-items-center pl-10 text-2xl">
                    {jobTitle}
                    <span className="bg-green-600 m-4 px-2 rounded-xl">{jobType}</span>
                </div>

                <div className="bg-white m-7">
                    
                    <div className="flex flex-row place-items-center font-bold text-xl ">
                        <img src={jobLogo} alt="" className="w-40 m-10"/>
                    {jobCompany}
                    </div>

                    <div className="ml-10 font-semibold">Key Facts:</div>

                    <div className="flex flex-row gap-10 ml-10 mb-10">
                    
                    <div>
                        <h3 className="font-semibold">Salary:</h3>
                        £{jobSalary}
                    </div>

                    <div>
                        <h3 className="font-semibold">Type:</h3>
                        {jobType}
                    </div>
                    
                    <div>
                        <h3 className="font-semibold">Date Posted:</h3>
                        {jobDatePosted}
                    </div>
                
                     <div>
                        <h3 className="font-semibold">Skills:</h3>
                            {jobSkills.map(function(skill) {
                                return <JobSkills key={skill.id} skill={skill}/>
                            })}
                    </div>
                </div>

                    <div className="m-10">
                        <h3 className="pb-4 text-2xl whitespace-break-spaces">Job Description:</h3>
                            {jobDesc}
                    </div>

                    <div className="m-10 flex justify-between">
                        <button className="bg-green-600 p-2 rounded text-white">Apply Now</button>
                        <button className="bg-slate-100 text-slate-600 p-2 rounded border-2 border-slate-300">Save for later</button>
                    </div>

                </div>
            </div>

                <div>
                    <div>
                    <SimilarJobs />
                </div>

            </div>

            <footer>Copyright</footer>

        </div>
    )
}

export default JobListing