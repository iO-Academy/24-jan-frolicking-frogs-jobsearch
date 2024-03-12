function JobSkill ({skill}) {
    return (
        <button type='button' className="bg-cyan-500 mr-4 rounded text-white px-2" disabled>{skill.skill}</button>
    )

}

export default JobSkill;