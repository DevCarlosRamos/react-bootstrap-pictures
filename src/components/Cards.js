import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
  {
    id: 1,
    title: "Titulo1",
    image: image1,
    url: "https://github.com/DevCarlosRamos",
  },
  {
    id: 2,
    title: "Titulo2",
    image: image2,
    url: "https://github.com/DevCarlosRamos",
  },
  {
    id: 3,
    title: "Titulo3",
    image: image3,
    url: "https://github.com/DevCarlosRamos",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
