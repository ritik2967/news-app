import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import BounceLoader from "react-spinners/BounceLoader"; // Install this loader if you haven't already

const NewsApp = () => {
  const [search, setSearch] = useState("India");
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "b1cca9c6aa6f4dfe9ed3742aae4ecc9c";

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error("Error fetching news data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-around items-center p-3 bg-sky-400">
          <div>
            <img className="size-16" src="./Logo.svg" alt="No Logo" />
          </div>
          <div>
            <h2 className="font-bold text-xl">Daily News Update</h2>
          </div>
          <div className="flex flex-col items-center gap-1 md:flex-row">
            <input
              className="border border-b-2 rounded-lg  shadow-md p-2 outline-none me-2"
              type="text"
              name="search"
              id="search"
              placeholder="Enter Search Item"
              onChange={handleInput}
              value={search}
            />
            <button
              className="h-8 w-[90px] rounded-sm  bg-green-500 text-white md:hover:bg-green-600"
              onClick={getData}
            >
              Search
            </button>
          </div>
        </div>
        <hr />

        {/* Buttons */}

        <div className="mt-4 flex justify-center items-center flex-col md:flex-row lg:flex-row gap-2">
          <button
            onClick={userInput}
            value="sport"
            className="bg-red-600 text-white md:hover:bg-red-700 h-8 rounded-xl p-1 me-2 shadow-sm w-[110px]"
          >
            Sport
          </button>
          <button
            value="politics"
            onClick={userInput}
            className="bg-red-600 text-white md:hover:bg-red-700 h-8 rounded-xl p-1 me-2 shadow-sm w-[110px]"
          >
            Politics
          </button>
          <button
            value="entertainment"
            onClick={userInput}
            className="bg-red-600 text-white md:hover:bg-red-700 h-8 rounded-xl p-1 me-2 shadow-sm w-[110px]"
          >
            Entertainment
          </button>
          <button
            value="health"
            onClick={userInput}
            className="bg-red-600 text-white md:hover:bg-red-700 h-8 rounded-xl p-1 me-2 shadow-sm w-[110px]"
          >
            Health
          </button>
          <button
            value="fitness"
            onClick={userInput}
            className="bg-red-600 text-white md:hover:bg-red-700 h-8 rounded-xl p-1 me-2 shadow-sm w-[110px]"
          >
            Fitness
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <BounceLoader
            className="flex justify-center items-center"
            color="#36d7b7"
            loading={loading}
            size={60}
          />
        </div>
      ) : (
        newsData && <Cards newsData={newsData} />
      )}
    </>
  );
};

export default NewsApp;
