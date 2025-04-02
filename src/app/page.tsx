import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1> 🎬 Movie App</h1>
      <p> Add and manage your favourite movies with ease</p>
      <div>
        <Link href="/add-movies">
          <button>Add Movies</button>
        </Link>
        <Link href="/all-movies">
          <button>View All Movies</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
