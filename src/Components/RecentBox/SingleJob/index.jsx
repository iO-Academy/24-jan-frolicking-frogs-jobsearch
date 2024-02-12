function SingleJob({logo, JobTitle, company, salary}) {

    return (

        <div>
            <ul>
                <img src={logo} alt="logo of company"/>
                <li>{JobTitle}</li>
                <li>{company}</li>
                <li>{salary}</li>
            </ul>
        </div>

    )
}

export default SingleJob