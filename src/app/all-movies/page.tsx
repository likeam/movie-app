import ShowMovie from "@/components/custom-components/ShowMovie";
import { db } from "@/utils/prisma";

const AllMovies = async () => {
  const movies = await db.movie.findMany();

  return (
    <div className=" w-10/12 mx-auto p-10">
      <h1 className=" text-4xl font-bold mb-4">All Movies</h1>
      <div className=" grid grid-cols-3 gap-4">
        {movies.length > 0 ? (
          movies.map((m) => <ShowMovie key={m.id} data={m} />)
        ) : (
          <p className=""> No Movie Added Yet</p>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
