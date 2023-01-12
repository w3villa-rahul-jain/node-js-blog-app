import React from "react";
import { Link } from 'react-router-dom'; 

const posts = [
  {
    id: 1,
    title: "new technology",
    desc: "Artificial intelligence will become more prevalent in 2023 with natural language processing and machine learning advancement. Artificial intelligence can better understand us and perform more complex tasks using this technology. It is estimated that 5G will revolutionize the way we live and work in the future",
    image:
      "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png",
  },
  {
    id: 2,
    title: "new technology 2",
       desc: "Artificial intelligence will become more prevalent in 2023 with natural language processing and machine learning advancement. Artificial intelligence can better understand us and perform more complex tasks using this technology. It is estimated that 5G will revolutionize the way we live and work in the future",
    image:
      "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png",
  },
  {
    id: 3,
    title: "new technology 3",
       desc: "Artificial intelligence will become more prevalent in 2023 with natural language processing and machine learning advancement. Artificial intelligence can better understand us and perform more complex tasks using this technology. It is estimated that 5G will revolutionize the way we live and work in the future",
    image:
      "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png",
  },
  {
    id: 4,
    title: "new technology 3",
       desc: "Artificial intelligence will become more prevalent in 2023 with natural language processing and machine learning advancement. Artificial intelligence can better understand us and perform more complex tasks using this technology. It is estimated that 5G will revolutionize the way we live and work in the future",
    image:
      "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png",
  },
  {
    id: 5,
    title: "new technology 3",
       desc: "Artificial intelligence will become more prevalent in 2023 with natural language processing and machine learning advancement. Artificial intelligence can better understand us and perform more complex tasks using this technology. It is estimated that 5G will revolutionize the way we live and work in the future",
    image:
      "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png",
  },
];

const Home = () => {
  return (
    <div className="homepage">
      {posts.map((data) => (
        <div key={data.id}>
          <div className="imgdiv">
            <img src={data.image} className="image" alt="image not found" />
          </div>
          <div className="blog-text">
            <Link className="all-links" to={`post/${data.id}`}>
            <h3>{data.title}</h3>
            </Link>
            <p>{data.desc}</p>
            <button className="read-more-btn">Read More</button>
          </div>        
        </div>
      ))}
    </div>
  );
};

export default Home;
