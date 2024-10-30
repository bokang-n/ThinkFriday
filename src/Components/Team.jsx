// Team.jsx
import React from "react";
import "../css/Team.css"; // Ensure you have appropriate styling here

const teamMembers = [
  {
    id: 1,
    name: "Tariq Shurmah",
    title: "Co-Founder and Managing Director",
    imgSrc: "images/262.png",
  },
  {
    id: 2,
    name: "Renoo Shurmah",
    title: "Co-Founder and Project Manager",
    imgSrc: "images/261.png",
  },
  {
    id: 3,
    name: "Lilian Mathuntuta",
    title: "Transformation & Skills Development Senior Officer",
    imgSrc: "images/lilan.jpg",
  },
  {
    id: 4,
    name: "Yuvesh Harry",
    title: "Transformation Assistant",
    imgSrc: "images/vesh.jpg",
  },
  {
    id: 5,
    name: "Sbonile Cebekhulu",
    title: "Skills Development Administrator",
    imgSrc: "images/spons.jpg",
  },
];

const Team = () => {
  return (
    <section className="product" id="product">
      <h1 className="heading">Our Team</h1>
      <div className="box-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="box">
            <div className="image">
              <img src={member.imgSrc} alt={member.name} />
            </div>
            <div className="content">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <button className="btn">Turn Card</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
