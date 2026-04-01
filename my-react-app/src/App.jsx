 
 import React from 'react'
import amazonlogo from "./assets/amazon.png"
import googlelogo from "./assets/google.png"
import flipkartlogo from "./assets/flipkart.jpeg"
import applelogo from "./assets/apple.jpeg"
import metalogo from "./assets/meta.jpeg"
import ibmlogo from "./assets/ibm.jpeg"

import "./index.css"
import Card from './components/card';
const App = () => {
   
  const jobs =[{
    id: 1,
    company: "Amazon",
    position: "Senior UI/UX Designer",
    type: "part time",
    level: "Senior level",
    salary: "120$/hour",
    location: "mumbai,India",
    posted: "5 days ago",
    img: amazonlogo
  },
{
  id: 2,
  company: "Google",
  position: "Frontend Developer",
  type: "full time",
  level: "Mid level",
  salary: "150$/hour",
  location: "bangalore,India",
  posted: "2 days ago",
  img: googlelogo
},
{
  id: 3,
  company: "Flipkart",
  position: "Backend Developer",
  type: "contract",
  level: "Entry level",
  salary: "100$/hour",
  location: "hyderabad,India",
  posted: "1 day ago",
  img: flipkartlogo
},
{
  id: 4,
  company: "Apple",
  position: "Product Manager",
  type: "full time",
  level: "Senior level",
  salary: "200$/hour",
  location: "pune,India",
  posted: "3 days ago",
  img: applelogo
},
{  id: 5,
  company: "Meta",
  position: "Data Scientist",
  type: "full time",
  level: "Senior level",
  salary: "180$/hour",
  location: "san francisco,USA",
  posted: "4 days ago",
  img: metalogo
},
{
  id: 6,
  company: "IBM",
  position: "DevOps Engineer",
  type: "contract",
  level: "Mid level",
  salary: "130$/hour",
  location: "seattle,USA",
  posted: "6 days ago",
  img: ibmlogo
}
]

 
  
  
  
  
  
  return (
  
    <div className="parent">

       {jobs.map((job)=>
         (<Card 
            company={job.company}
            position={job.position}
            type={job.type}
            level={job.level}
            salary={job.salary}
            location={job.location}
            posted={job.posted}
            img={job.img}
            />
          ))}

    </div>
  )
}

export default App;