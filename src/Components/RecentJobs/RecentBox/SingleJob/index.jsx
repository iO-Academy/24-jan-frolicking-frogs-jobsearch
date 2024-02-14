import { useEffect, useState } from "react"
import Skill from "./Skill/Skill"
import { NavLink } from "react-router-dom"

function SingleJob({logo, JobTitle, company, type, salary, skills, id}) {

    return (
            
            <tr>
                <td>
                <NavLink to={"/JobListing/" + id}>
                    <div class='flex gap-x-2'>
                        <div class='object-cover h-20 w-20'>
                            <img src={logo} alt-text="logo of company" />
                        </div>
                        
                        <div class='flex flex-col'>
                            <p>{JobTitle}</p>
                            <p>{company}</p>                       
                        </div>
                    </div>
                </NavLink>
                </td>
                <td><button className="bg-green-200">{type}</button></td>
                <td>{salary}</td>
                <td>                
                    {skills.map(function(skill) {
                        return <Skill skill={skill} />
                    })}
                </td>
            </tr>
        






    )
}

export default SingleJob