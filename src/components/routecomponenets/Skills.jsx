import React from 'react'
import html from "../../assets/images/logo/html.png";
import css from "../../assets/images/logo/css.png";
import javascript from "../../assets/images/logo/javascript.png";
import react from "../../assets/images/logo/react.png";
import tailwind from "../../assets/images/logo/tailwind.png";

import java from "../../assets/images/logo/java.png";
import spring from "../../assets/images/logo/spring.png";
import hibernate from "../../assets/images/logo/hibernate.png";
import rest from "../../assets/images/logo/rest.png";

import mysql from "../../assets/images/logo/mysl.png";
import sql from "../../assets/images/logo/sql.png";
import firebase from "../../assets/images/logo/firebase.png";
import docker from "../../assets/images/logo/dockker.png";
import aws from "../../assets/images/logo/aws.png";

import git from "../../assets/images/logo/git.png";
import github from "../../assets/images/logo/github.png";
import vscode from "../../assets/images/logo/vscode.jpg";
import intellij from "../../assets/images/logo/intellij.png";
import postman from "../../assets/images/logo/postman.png";


const Skills = () => {
  const frontendSkills = [
    { id: 1, name: "HTML5", imgurl: html },
    { id: 2, name: "CSS3", imgurl: css },
    { id: 3, name: "JavaScript ", imgurl: javascript },
    { id: 4, name: "React.js", imgurl: react },
    { id: 5, name: "Tailwind CSS", imgurl: tailwind },
  ];
  const backendSkills = [
    { id: 1, name: "Java", imgurl: java },
    { id: 2, name: "Spring Boot", imgurl: spring },
    { id: 3, name: "Hibernate", imgurl: hibernate },
    { id: 4, name: "REST APIs", imgurl: rest },
  ];
  const databaseCloudSkills = [
    { id: 1, name: "MySQL", imgurl: mysql },
    { id: 2, name: "SQL", imgurl: sql },
    { id: 3, name: "Firebase", imgurl: firebase },
    { id: 4, name: "Docker (Basics)", imgurl: docker },
    { id: 5, name: "AWS (Basics)", imgurl: aws },
  ];
  const toolsAndSpecialized = [
    { id: 1, name: "Git", imgurl: git },
    { id: 2, name: "GitHub", imgurl: github },
    { id: 3, name: "VS Code", imgurl: vscode },
    { id: 4, name: "IntelliJ IDEA", imgurl: intellij },
    { id: 5, name: "Postman", imgurl: postman },
  ];


  return (
    <div className='w-full h-auto mx-auto'>
      <div className='md:mx-14 md:my-10 mx-7 my-6'>
        <h1 data-aos="fade-up"
          data-aos-delay="200"
          className='text-[#D1855C] font-gravitas text-3xl md:py-6'>Skills</h1>
        <div className='md:mx-3 py-5'>
          <h2 data-aos="fade-up"
            data-aos-delay="300"
            className='font-marcellus font-bold text-green-300 md:pb-4 text-lg md:text-xl'>Frontend & UI Development</h2>
          <div data-aos="fade-left"
            data-aos-delay="400"
            className='grid grid-cols-3 md:grid-cols-5 '>
            {
              frontendSkills.map((skill) => (
                <div
                  className='flex flex-col items-center justify-center rounded-4xl my-3  '
                  key={skill.id}
                >
                  <div className=' md:py-4'>
                    <img
                      className='md:w-15 md:h-15 w-10 h-10  md:object-cover rounded-[40px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
                      src={skill.imgurl}
                      alt={skill.name} />
                  </div>
                  <p className='font-inknut text-xs text-[#F6F0D7]  '>{skill.name}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='md:mx-3 py-5'>
          <h2 data-aos="fade-up"
            data-aos-delay="300"
            className='font-marcellus font-bold text-green-300 md:pb-4 text-lg md:text-xl'>Backend Development</h2>
          <div data-aos="fade-right"
            data-aos-delay="400"
            className='grid grid-cols-3 md:grid-cols-5 '>
            {
              backendSkills.map((skill) => (
                <div
                  className='flex flex-col items-center justify-center rounded-4xl my-3  '
                  key={skill.id}
                >
                  <div className=' md:py-4'>
                    <img
                      className='md:w-15 md:h-15 w-10 h-10 md:object-cover rounded-[40px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
                      src={skill.imgurl}
                      alt={skill.name} />
                  </div>
                  <p className='font-inknut text-xs text-[#F6F0D7]  '>{skill.name}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='md:mx-3 py-5'>
          <h2 data-aos="fade-up"
            data-aos-delay="300"
            className='font-marcellus font-bold text-green-300 md:py-4 text-lg md:text-xl'>Database & Cloud</h2>
          <div data-aos="fade-left"
            data-aos-delay="400"
            className='grid grid-cols-3 md:grid-cols-5'>
            {
              databaseCloudSkills.map((skill) => (
                <div
                  className='flex flex-col items-center justify-center rounded-4xl my-3   '
                  key={skill.id}
                >
                  <div className=' md:py-4'>
                    <img
                      className='md:w-15 md:h-15 w-10 h-10 md:object-cover rounded-[40px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
                      src={skill.imgurl}
                      alt={skill.name} />
                  </div>
                  <p className='font-inknut text-xs text-[#F6F0D7]  '>{skill.name}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='md:mx-3 py-5'>
          <h2 data-aos="fade-up"
            data-aos-delay="300" className='font-marcellus font-bold text-green-300 md:py-4 text-lg md:text-xl'>Tools & Technologies</h2>
          <div data-aos="fade-right"
            data-aos-delay="400"
            className='grid grid-cols-3 md:grid-cols-5'>
            {
              toolsAndSpecialized.map((skill) => (
                <div
                  className='flex flex-col  items-center justify-center rounded-4xl my-3  '
                  key={skill.id}
                >
                  <div className=' md:py-4'>
                    <img
                      className='md:w-15 md:h-15 w-10 h-10 md:object-cover rounded-[40px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
                      src={skill.imgurl}
                      alt={skill.name} />
                  </div>
                  <p className='font-inknut text-xs text-[#F6F0D7]  '>{skill.name}</p>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills;
