import React from "react";
import Menu from './Menu'

const Single = () => {
  const singleData = {
    id: 1,
    title: "new technology",
    desc: "Artificial intelligence will become more prevalent in 2023 with natural language processing and machine learning advancement. Artificial intelligence can better understand us and perform more complex tasks using this technology. It is estimated that 5G will revolutionize the way we live and work in the future",
    image:
      "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png",
  };

  return (
    <div className="single-page">
      <div className="post-part">
        <div className="imagediv">
          <img src={singleData.image} className="image" alt="" />
        </div>
        <div className="user">
          <div className="user-image-div">
            <img src={singleData.image} className="user-image" alt="" />
          </div>
          <div className="user-description">
            <span>john</span>
            <p>posted 2 days ago</p>
          </div>
          <div>
            <button className="edit-btn">Edit</button>
            <button className="del-btn">delete</button>
          </div>
        </div>
        <h3>{singleData.title}</h3>
        <p>{singleData.desc}</p>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default Single;
