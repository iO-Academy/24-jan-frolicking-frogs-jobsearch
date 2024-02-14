import { useEffect, useState } from "react"
import Skill from "./Skill/Skill"

function SingleJob({logo, JobTitle, company, type, salary, skills}) {

    return (
        <tr class='odd:bg-gray-500 even:bg-gray-700'>
            <td>
                <div class='flex gap-x-2'>
                    <img src={logo} class='object-contain p-1.5 h-30 w-20 w-16 hidden md:flex' alt-text="logo of company" />
                    
                    <div class='flex flex-col pl-5 md:pl-0'>
                        <p>{JobTitle}</p>
                        <p>{company}</p>                       
                    </div>
                </div>
            </td>
            <td class='flex'><button class="rounded bg-sky-600 text-white">{type}</button></td>
            <td class='pb-20'>{salary}</td>
            <td class='flex'>                
                {skills.map(function(skill) {
                    return <Skill skill={skill} />
                })}
            </td>
        </tr>






    )
}

export default SingleJob