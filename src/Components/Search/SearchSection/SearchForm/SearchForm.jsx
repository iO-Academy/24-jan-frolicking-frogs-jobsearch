import { useContext, useEffect, useState } from "react"
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom"
import JobSearchResults from "./JobSearchResults/JobSearchResults"
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
            console.log(data)
            setSearchInfo(data)
        })
    }

    function clickHandler(e) {
        e.preventDefault()
        console.log('clicked')
        getSearchInfo()
        handleRoute()
    }

    return (

        <div className="p-5">
            
                <h1 className="text-white text-2xl">Find your perfect job</h1>
                <form onSubmit={clickHandler}>
                <input className="w-[43rem]" type="text" 
                placeholder="Search" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                
                <div className="flex justify-between">
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Full Time</label>
                        <input type="checkbox" />
                        <label htmlFor="">Part Time</label>
                        <input type="checkbox" />
                        <label htmlFor="">Contract</label>
                    </div>

                    <div className="flex">
                        <p>Popular skills:</p>
                        <button>PHP</button>
                        <button>React</button>
                        <button>Laravel</button>
                        <button>See more →</button>
                    </div>
                </div>
                <input className="bg-blue-500 p-2 rounded" type="submit" value="Search"/>

            </form>


        </div>

    )

}

export default SearchForm
   

