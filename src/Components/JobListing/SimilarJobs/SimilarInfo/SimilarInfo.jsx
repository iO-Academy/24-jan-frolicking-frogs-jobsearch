function SimilarInfo({title, logo, company}) {

    return (
        <>
            <img src={logo} alt="" />
            <h2>{title}</h2>
            <h3>{company}</h3>
        </>
    )
}

export default SimilarInfo