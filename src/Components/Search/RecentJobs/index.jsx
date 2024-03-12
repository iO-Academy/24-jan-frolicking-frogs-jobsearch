import RecentJobsTable from "./RecentJobsTable"

function RecentJobs() {

    return (
        <div>
            <div className='bg-white flex justify-center px-10 md:px-30 sm:px-30'>
                <div className='flex flex-col justify-between py-10'>
                    <div className='flex flex-row py-5 justify-between items-baseline'>
                        <h3 className='text-4xl'>Most recent jobs</h3>
                        <a href="/all-jobs" className='text-sky-600'>View all jobs →</a> 
                    </div>
                    <RecentJobsTable />
                </div>
            </div>
        </div>
    )
}

export default RecentJobs