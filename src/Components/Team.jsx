import React from "react";
import "../css/Team.css";
import tariq from "../images/262.png";
import renoo from "../images/261.png";
import lillian from "../images/lilan.jpg";
import yuvesh from "../images/vesh.jpg";
import sibonelo from "../images/spons.jpg";
import sudhir from "../images/Sudhir.jpg";

const Team = () => {
  const TeamMembers = [
    {
      name: "Tariq Shurmah",
      role: "Co-Founder and Managing Director",
      image: tariq,
      socials: [
        {
          icon: "fa-linkedin-in",
          link: "#",
        },
      ],
    },
    {
      name: "Renoo Shurmah",
      role: "Co-Founder and Project Manager",
      image: renoo,
      socials: [
        {
          icon: "fa-linkedin-in",
          link: "#",
        },
      ],
    },
    {
      name: "Lillian Mathunta",
      role: "Transformation & Skills Development Senior Officer",
      image: lillian,
      socials: [
        {
          icon: "fa-linkedin-in",
          link: "#",
        },
      ],
    },
    {
      name: "Yuvesh Harry",
      role: "Transformation Assistant",
      image: yuvesh,
      socials: [
        {
          icon: "fa-linkedin-in",
          link: "#",
        },
      ],
    },
    {
      name: "Sudhir Rugber",
      role: "Skills Development and Project Consultant",
      image: sudhir,
      socials: [
        {
          icon: "fa-linkedin-in",
          link: "#",
        },
      ],
    },
    {
      name: "Sibonelo Cebekhulu",
      role: "Skills Development Administrator",
      image: sibonelo,
      socials: [
        {
          icon: "fa-linkedin-in",
          link: "#",
        },
      ],
    },
  ];
  return (
    <div className="wrapper">
      <div className="title">
        <h4>Our Team</h4>
      </div>
      <div className="card_Container">
        {TeamMembers.map((member, index) => (
          <div className="card" key={index}>
            <div className="imbBx">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="content">
              <div className="contentBx">
                <h3>
                  {member.name} <br />
                  <span>{member.role}</span>
                </h3>
              </div>
              <ul className="sci">
                {member.socials.map((social, i) => (
                  <li key={i} style={{ "--1": i + 1 }}>
                    <a href={social.link}>
                      <i className={"fa-brands ${social.icon}"}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
