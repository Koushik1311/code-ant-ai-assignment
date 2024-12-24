import RepositoryItem from "@/components/dashboard/RepositoryItem";
import SearchBox from "@/components/dashboard/SearchBox";
import { repositoryData } from "@/data/repository-data";
import { Plus, RefreshCw } from "lucide-react";

export default async function page({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  // Get the total number of repositories in the repositoryData array
  const totalRepositories = repositoryData.length;

  const { search } = await searchParams;

  const searchTerm = search?.toLowerCase() ?? "";

  // Filter the repositories based on the search term
  const filteredRepositories = repositoryData.filter(
    (repository) =>
      !searchTerm ||
      repository.repositoryName.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="h-screen lg:overflow-hidden">
      <div className="lg:mx-6 mt-16 lg:my-6 lg:border md:rounded-lg lg:h-[calc(100vh-3rem)] lg:overflow-auto">
        <div className="px-4 md:px-6 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-[#181D27]">
                Repositories
              </h1>
              <p className="text-sm font-normal text-[#414651]">
                {totalRepositories} total repositories
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* button: refresh all */}
              <button className="border flex items-center justify-center gap-1 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-[#414651]">
                <RefreshCw size={17} />
                <span className="text-sm font-normal">Refresh All</span>
              </button>

              {/* button: add repository */}
              <button className="border border-[#1570EF] text-white flex items-center justify-center gap-1 px-4 py-3 rounded-lg bg-[#1570EF] hover:bg-[#0758ca] transition-colors duration-300">
                <Plus size={17} />
                <span className="text-sm font-normal">Add Repository</span>
              </button>
            </div>
          </div>

          {/* search box */}
          <SearchBox />
        </div>

        {/* repositories list */}
        <div>
          {filteredRepositories.length > 0 ? (
            filteredRepositories.map((repository, index) => (
              <RepositoryItem
                key={index}
                repositoryName={repository.repositoryName}
                repositoryVisibility={repository.repositoryVisibility}
                programmingLanguage={repository.programmingLanguage}
                repositorySize={repository.repositorySize}
                lastUpdated={repository.lastUpdated}
              />
            ))
          ) : (
            <p className="py-4 px-4 md:px-6 text-[#181D27]">
              No repositories found!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
