import { useLoaderData } from "react-router-dom";
import { SearchLoaderResult } from "./searchLoader.ts";
import PackageListItem from "../../components/PackageListItem.tsx";

export default function SearchPage() {
    const { searchResults} = useLoaderData() as SearchLoaderResult

    const renderResults = searchResults.map((result) => {
        return <PackageListItem pack={result} key={result.name}/>
    })

    return (
        <div>
            <h1 className="text-2xl font-bold my-6">Search Page</h1>
            <div className="space-y-4 mt-4">
                {renderResults}
            </div>
        </div>
    );
}