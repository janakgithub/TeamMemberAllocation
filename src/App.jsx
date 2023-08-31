import './App.css'
import Header from './Header';
import Footer from './Footer';
import Employees from './Employees'
import { useState, useEffect } from 'react';

export default function App() {
  const [employees, setEmployess] = useState(JSON.parse(localStorage.getItem('employeesList')) || [{
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA"
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB"
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC"
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD"
   }]);
  
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) ||"TeamB");

  useEffect(()=>{
    localStorage.setItem('employeesList', JSON.stringify(employees))
  },[employees])

  useEffect(()=>{
   localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam))
  },[selectedTeam])

  const [] = useState();
    
  function handleTeamSelection(event){
    setTeam(event.target.value);
  }
  
  function handleCardClick(event){
    const changedTeam = employees.map((emp)=> emp.id === parseInt(event.currentTarget.id)  
                                              ?(emp.teamName === selectedTeam) ? {...emp,teamName:''}
                                              :{...emp,teamName:selectedTeam} : emp);
    setEmployess(changedTeam);
  }
  
  return (
    <main>
      <Header selectedTeam = {selectedTeam}
              totalMembers ={employees.filter(e=>e.teamName===selectedTeam).length}/>
      <Employees 
        employees = {employees}
        selectedTeam = {selectedTeam}
        handleTeamSelection = {handleTeamSelection}
        handleCardClick = {handleCardClick}/>
      <Footer/>
    </main>
  )
}
