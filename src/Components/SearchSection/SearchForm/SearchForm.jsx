import { useEffect, useState } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import JobSearchResults from "./JobSearchResults/JobSearchResults"

function SearchForm() {
    const [input, setInput] = useState('')

    return (

        <>
            <div>
                <form action="">
                    <div>
                        <input className="bg-slate-200 w-1/2" 
                               type="text" 
                               placeholder="job title / keyword / skill / company"
                               value={input}
                               onChange={(e) => setInput(e.target.value)}/>
                    </div>

                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Full Time</label>
                        <input type="checkbox" />
                        <label htmlFor="">Part Time</label>
                        <input type="checkbox" />
                        <label htmlFor="">Contract</label>

                        <p>Popular skills:</p>
                        <button>PHP</button>
                        <button>React</button>
                        <button>Laravel</button>
                        <button>See more →</button>
                    </div>

                </form>
                <div>
                    <BrowserRouter>
                        <Link to='/results'><button>Search</button></Link>
                        <Routes>
                            <Route path='/results' element={<JobSearchResults />} />
                        </Routes>
                    </BrowserRouter> 
                </div>
            </div>
        </>

    )
    
}

export default SearchForm