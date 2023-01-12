import React from "react";

const Menu = () => {
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
  return (
    <div className="other-post-container">
      <h1 className="other-post">Other post you may like it</h1>
      {posts.map((post) => (
        <div key = {post.id}>
          <div className="imgdiv">
            <img src={post.image} className="image" alt="image not found" />
          </div>
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
