function SimilarInfo({title, logo, company}) {

    return (
        <div className="flex flex-col bg-slate-500 mt-5 mr-5 mb-5 p-2 md:flex md:flex-row text-white">
            <img className="w-20 object-contain hidden md:flex" src={logo} alt="logo of job advertised" />
            <div className="p-2">
                <h2>{title}</h2>
                <h3>{company}</h3>
            </div>
        </div>
    )
}

export default SimilarInfo