import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SimilarInfo from "./SimilarInfo/SimilarInfo"

function SimilarJobs() {

    const {id} = useParams()
    const [similarInfo, setSimilarInfo] = useState([])

    useEffect(getSimilarInfo, [])

    function getSimilarInfo() {
        fetch (`https://job-search-api.dev.io-academy.uk/jobs/${id}/similar`)
        .then(function (response) {
            return response.json() 
        }).then(function (data) {
            setSimilarInfo(data)
        })
    }

    return (
        <div className="bg-white ml-7 mr-7 pl-10 pt-5">
            <h1 className="text-3xl">Similar Jobs</h1>
        
            <div className="flex flex-row flex-wrap">
                {similarInfo.map(function(info) {
                    return <SimilarInfo key={info.id} title={info.job_title} logo={info.logo} company={info.company} />
                    })}
            </div>
        </div>
    )
}

export default SimilarJobs