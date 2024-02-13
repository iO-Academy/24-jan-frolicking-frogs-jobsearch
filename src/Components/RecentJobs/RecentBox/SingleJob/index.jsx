import { useEffect, useState } from "react"

function SingleJob({logo, JobTitle, company, type, salary, skills}) {

    const [skillsButton, setSkillsButton] = useState([])
    useEffect(getSkillsButton, [])

    function getSkillsButton() {
        fetch (skills)
        .then(function (response) {
            return response.json() 
        }).then(function (data) {
            console.log(data.skills)
            setSkillsButton(data.skills)
        })
    }

    return (

        <div className="flex">
            <div className="flex flex-row">
                <img src={logo} alt="logo of company"/>
                <li>{JobTitle}</li>
                <li>{company}</li>
                <button className="bg-green-200">{type}</button>
                <li>{salary}</li>
                </div>
        </div>






    )
}

export default SingleJob