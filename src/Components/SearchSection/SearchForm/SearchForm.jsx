import { useEffect, useState } from "react"

function SearchForm() {

    return (

        <>
            <div>
                <form action="">
                    <div>
                        <input className="bg-slate-200 w-1/2" type="text" placeholder="job title / keyword / skill / company"/>
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

                    <div>
                        <button>Search</button>
                    </div>

                </form>
            </div>
        </>

    )
    
}

export default SearchForm