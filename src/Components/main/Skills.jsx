import React from 'react'
import "./skills.css";
import html from "../../Assets/html.png"
import css from "../../Assets/css1.png"
import javascript from "../../Assets/javascript.png"
import reactjs from "../../Assets/React.png"
import java from "../../Assets/java.png"
import sql from "../../Assets/sql.png"
import hibernate from "../../Assets/hibernate.png"
import spring from "../../Assets/spring.png"
import bootstrap from "../../Assets/bootstrap.png"
import tailwind from "../../Assets/taiwind.png"
import mongodb from "../../Assets/MongoDB.png"
import springboot from "../../Assets/springboot.png"

function Skills() {
    const skills = [
        {name:"HTML5",
        logo: html   
        },
        {name:"CSS3",
        logo: css  
        },
        {name:"Java Script",
        logo: javascript   
        },
        {name:"React Js",
        logo: reactjs 
        },
        {name:"Bootstrap",
        logo: bootstrap
        },
        {name:"Tailwind",
        logo: tailwind
        },
        {name:"Spring",
        logo: spring
        },
        {name:"SpringBoot",
        logo: springboot
        },
        {name:"Java",
        logo: java
        },
        {name:"Sql",
        logo: sql
        },
        {name:"Hibernate",
        logo: hibernate
        },
        {name:"Mongodb",
        logo: mongodb
        }
        

    ]
  return (
    <div data-aos="zoom-in" id='Skills' >
      <h1 data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"  
          id='heading'>Skills</h1>
    <div className='skills-div'>
          {
            skills.map((skill)=>{ 
              return( 
                <div data-aos="zoom-out" className='skills'>
                   <div className='skill'>
                    <img data-aos="zoom-in" src={skill.logo} alt="" />
                   </div>
                   <div className='heading' >
                    <h3 data-aos="zoom-out">{skill.name}</h3>
                    </div> 
                </div>
                
            )
            })
          }  
    </div>
    </div>
  )
}

export default Skills
