import React from "react";

const Cards = ({ newsData }) => {
  return (
    <>
      <h2 className="text-xl items-center flex justify-center mt-4">
        The Trendy News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {newsData.map((article, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow"
          >
            <img
              src={article.urlToImage || "https://via.placeholder.com/150"}
              alt={article.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="font-bold text-lg mt-2">{article.title}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {article.description || "No description available."}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm mt-2 inline-block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
