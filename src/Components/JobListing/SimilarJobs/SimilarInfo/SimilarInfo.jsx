function SimilarInfo({title, logo, company}) {

    return (
        <div className="flex bg-slate-500 mt-5 mr-5 mb-5 p-2 text-white ">
            <img className="w-20" src={logo} alt="" />
            <div className="p-2">
                <h2 >{title}</h2>
                <h3>{company}</h3>
            </div>
        </div>
    )
}

export default SimilarInfo