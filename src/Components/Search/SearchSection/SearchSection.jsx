import JobSearchResults from "./SearchForm/JobSearchResults/JobSearchResults"
import SearchForm from "./SearchForm/SearchForm"

function SearchSection() {

    return (
        <>
        <div className="bg-[url(https://www.shutterstock.com/image-photo/full-concentration-work-group-young-260nw-1043501293.jpg)] bg-cover flex flex-col items-center flex-wrap w-screen">
            <div className="w-screen flex justify-center backdrop-brightness-50">
            <SearchForm />
            </div>

        </div>

        

        {/* bg-[url(https://media.gettyimages.com/id/1331350008/photo/business-team-working-on-a-laptop-computer.jpg?s=612x612&w=gi&k=20&c=22z8fu1LwJILbdUqJNgb8UN9ZIOYmh61zRu48MZKlF0=)] brightness-50 */}
        
        </>
    )

}

export default SearchSection