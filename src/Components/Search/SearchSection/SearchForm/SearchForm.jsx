import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import CurrentUserContext from "../../../../CurrentUserContext"

function SearchForm() {

    const route = useNavigate()
    const handleRoute = () => {
        route('/results')
    }

    const {setSearchInfo} = useContext(CurrentUserContext)
    const [search, setSearch] = useState([])

    useEffect(getSearchInfo, [])

    function getSearchInfo() {
        fetch (`https://job-search-api.dev.io-academy.uk/jobs?search=${search}`)
        .then(function (response) {
            return response.json() 
        }).then(function (data) {
            setSearchInfo(data)
        })
    }

    function clickHandler(e) {
        e.preventDefault()
        getSearchInfo()
        handleRoute()
    }

    return (

        <div className="p-5">
            
                <h1 className="text-white text-4xl pb-3">Find your perfect job</h1>
                <form onSubmit={clickHandler}>
                <input className= "w-[30rem] md:w-[43rem] rounded placeholder:pl-2" type="text" 
                placeholder="job title / keyword / skill / company" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
                
                <div className="flex justify-between gap-7 py-2 text-white">
                    <div className="space-x-1">
                        <input type="checkbox" />
                        <label htmlFor="">Full Time</label>
                        <input type="checkbox" />
                        <label htmlFor="">Part Time</label>
                        <input type="checkbox" />
                        <label htmlFor="">Contract</label>
                    </div>

                    <div className="flex space-x-2 text-white">
                        <p>Popular skills:</p>
                        <button className="bg-cyan-500 px-1 rounded font-bold">PHP</button>
                        <button className="bg-cyan-500 px-1 rounded font-bold">React</button>
                        <button className="bg-cyan-500 px-1 rounded font-bold">Laravel</button>
                    </div>
                </div>
                <input className="bg-blue-500 p-2 rounded text-white" type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default SearchForm
   

