function SingleJob({logo, JobTitle, company, type, salary}) {

    return (

        <tr>
            <td>
                <div class='flex'>
                    <img src={logo} alt="logo of company" class='h-10 w-10'/>
                    <div class='flex flex-col'>
                        {JobTitle}
                        {company}                         
                    </div>
                </div>
            </td>
            <td>{type}</td>
            <td>{salary}</td>
        </tr>

    )
}

export default SingleJob