function SingleJob({logo, JobTitle, company, type, salary}) {

    return (

        <tr>
                <td>
                    <div class='flex'>
                        <img src={logo} alt="logo of company"/>
                        {JobTitle}                    
                    </div>
                </td>
                <td>{company}</td>
                <td>{type}</td>
                <td>{salary}</td>
        </tr>

    )
}

export default SingleJob