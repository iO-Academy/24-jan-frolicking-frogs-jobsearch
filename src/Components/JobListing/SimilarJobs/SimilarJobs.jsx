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
            console.log(data)
            setSimilarInfo(data)
        })
    }

    return (
        <>
            <h1>Similar Jobs</h1>
            {similarInfo.map(function(info) {
                    return <SimilarInfo key={info.id} title={info.job_title} logo={info.logo} company={info.company} />
                })}


        </>
    )
}

export default SimilarJobs