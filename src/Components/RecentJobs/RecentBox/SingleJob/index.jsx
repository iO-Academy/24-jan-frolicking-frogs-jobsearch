function SingleJob({logo, JobTitle, company, type, salary}) {

    return (

        <div class="flex">
            <div class="flex flex-row">
                <img src={logo} alt="logo of company"/>
                <li>{JobTitle}</li>
                <li>{company}</li>
                <li>{type}</li>
                <li>{salary}</li>
                </div>
        </div>

    )
}

export default SingleJob