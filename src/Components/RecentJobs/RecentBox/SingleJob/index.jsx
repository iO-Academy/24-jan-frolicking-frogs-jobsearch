import { useEffect, useState } from "react"
import Skill from "./Skill/Skill"

function SingleJob({logo, JobTitle, company, type, salary, skills}) {

    return (

        <div className="flex">
            <div className="flex flex-row">
                <img src={logo} alt="logo of company"/>
                <li>{JobTitle}</li>
                <li>{company}</li>
                <button className="bg-green-200">{type}</button>
                <li>{salary}</li>

                {skills.map(function(skill) {
                    return <Skill skill={skill} />
                })}

                </div>
        </div>






    )
}

export default SingleJob