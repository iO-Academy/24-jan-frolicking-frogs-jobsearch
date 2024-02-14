import RecentBox from "./RecentBox"

function RecentJobs() {
    

    return (
        <div className='bg-white flex flex-col px-10 md:px-20'>
            <div className='flex flex-row justify-between py-10'>
                <h3 className='text-4xl'>Most recent jobs</h3>
                <a href="#" className='text-sky-600 self-center'>View all jobs →</a> 
            </div>
            <RecentBox />
        </div>

    )
}

export default RecentJobs