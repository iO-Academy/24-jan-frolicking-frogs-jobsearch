function SingleJob({logo, JobTitle, company, type, salary}) {

    return (

        <tr>
            <td>
                <div class='flex gap-x-2'>
                    <div class='object-cover h-20 w-20'>
                        <img src={logo} alt-text="logo of company" />
                    </div>
                    
                    <div class='flex flex-col'>
                        <p>{JobTitle}</p>
                        <p>{company}</p>                       
                    </div>
                </div>
            </td>
            <td>{type}</td>
            <td>{salary}</td>
        </tr>

    )
}

export default SingleJob