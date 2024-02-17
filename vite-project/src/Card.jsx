import React from 'react';

const Card = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src="https://placekitten.com/200/300" alt="A cute kitten" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card title</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Understanding the beauty of Tailwind CSS</a>
          <p className="mt-2 text-gray-500">Tailwind CSS is a utility-first CSS framework that can be composed to build any design, directly in your markup.</p>
          <button className="mt-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
