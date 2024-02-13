import { useEffect, useState } from "react"

function Skill({skills}) {


const [skillsButton, setSkillsButton] = useState([])
useEffect(getSkillsButton, [])

function getSkillsButton() {
    fetch(skill)
    .then(function (response) {
        return response.json() 
    }).then(function (data) {
        console.log(data)
        setSkillsButton(dataß)
    })
}

return (

    <button>{skillsButton}</button>

)

}

export default Skill