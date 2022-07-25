
import './App.css';

import { useState, useEffect } from "react";
import axios from "axios";
import Intro from "components/Intro/Intro";
import Navbar from "components/Navbar/Navbar";
import Photo from "components/Photo/Photo";


const App = () => {
  const categories = ["RANDOM", "TECHNOLOGIES", "ARTS", "SPORTS", "GAMES",]
  const [selectedCategory, setSelectedCategory] = useState("");
  const [res, setRes] = useState([]);
  const Access_Key = 'EkrBqfMX1Y-v0sGBJ7yNq1gop9iXLZrqJQgvX1E7XN0';




  const fetchRequest = async () => {
    // const data = await fetch(
    //   `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}`
    // );

    const res = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        page: 1,
        query: selectedCategory,
        client_id: Access_Key
      }
    });
    console.log(res);
    const photoArr = res.data?.results?.map((photo) => photo?.urls?.regular);
    setRes(photoArr);
  };
  useEffect(() => {
    fetchRequest();
  }, [selectedCategory]);




  return (
    <>
       <Intro />
      <Navbar />
      <main className="mb-10">
        <nav>
          <div className="justify-center mt-10 tabs">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`tab tab-bordered 
                            ${selectedCategory === category && "tab-active"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </nav>
        <section className="relative w-10/12 mx-auto mt-4">
          <div className="grid justify-center grid-cols-3 gap-3">
            {res?.length ? (
              res.map((photo) => <Photo key={photo} imgURL={photo} />)
            ) : (
              <p className="absolute mt-10 -ml-20 alert alert-info left-1/2">
                No photo at the moment!
              </p>
            )}
          </div>
        </section>
      </main>


    </>
  );
}



export default App;
