import RecentBox from "./RecentBox"

function RecentJobs() {

    return (
        <div class='bg-white flex flex-col px-20'>
            <div class='flex flex-row justify-between py-10'>
                <h3 class='text-4xl'>Most recent jobs</h3>
                <a href="#" class='text-sky-600'>View all jobs →</a> 
            </div>
            <RecentBox />

            
        
        </div>

    )

}

export default RecentJobs