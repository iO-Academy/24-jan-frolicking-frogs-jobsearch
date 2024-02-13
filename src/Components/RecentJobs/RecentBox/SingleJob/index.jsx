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
        <tr>
            <td>
                <div class='flex gap-x-2'>
                    <div class='object-cover h-20 w-20'>
                        <img src={logo} alt-text="logo of company" />
                    </div>
                    
                    <div class='flex flex-col'>
                        <p>{JobTitle}</p>
                        <p>{company}</p>                       
                    </div>
                </div>
            </td>
            <td>{type}</td>
            <td>{salary}</td>
        </tr>






    )
}

export default SingleJob