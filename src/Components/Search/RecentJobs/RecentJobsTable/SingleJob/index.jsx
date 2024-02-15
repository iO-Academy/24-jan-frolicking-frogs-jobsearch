import { Link } from "react-router-dom"
import Skill from "./Skill/Skill"

function SingleJob({logo, jobTitle, company, type, salary, skills, id}) {

    return (
        <tr className='odd:bg-gray-500 even:bg-gray-700'>
            <td>
                <Link to={"/JobListing/" + id} >
                <div className='flex gap-x-2'>
                    <img src={logo} className='object-contain p-1.5 h-30 w-20 w-16 hidden md:flex' alt-text="logo of company" />
                    
                    <div className='flex flex-col pl-5 md:pl-0'>
                        <p>{jobTitle}</p>
                        <p>{company}</p>                       
                    </div>
                </div>
                </Link>
            </td>
            <td className='flex'><button className="rounded bg-sky-600 text-white">{type}</button></td>
            <td className='pb-20'>{salary}</td>
            <td className='flex'>                
                {skills.map(function(skill) {
                    return <Skill skill={skill} />
                })}
            </td>
        </tr>

    )
}

export default SingleJob