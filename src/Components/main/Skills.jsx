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
        {name:"Java",
        logo: java
        },
        {name:"Sql",
        logo: sql
        },
        {name:"Hibernate",
        logo: hibernate
        },
        {name:"Spring",
        logo: spring
        }

    ]
  return (
    <>
        <h1 id='heading'>Skills</h1>
    <div className='skills-div'>
          {
            skills.map((skill)=>{ 
            return( 
                <div className='skills'>
                   <div className='skill'>
                    <img src={skill.logo} alt="" />
                    <h2>{skill.name}</h2>
                   </div> 
                </div>
                
            )
            })
          }  
    </div>
    </>
  )
}

export default Skills
