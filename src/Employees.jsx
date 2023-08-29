import { useState } from 'react';
import female from './images/female.jpg';
import male from './images/male.jpg';

const Employees = () => {

const [employees, setEmployess] = useState([{
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

const [selectedTeam, setTeam] = useState("TeamB");

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
    <main className="container">
     <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelection}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
       </div>
      
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col">
          <div className="card-collection">
            {
              employees.map((e)=>(
                <div className={(e.teamName===selectedTeam? "card m-2 addBoxShadow": "card m-2")} style={{cursor:"pointer"}} id={e.id} onClick={handleCardClick}>
                  {(e.gender == "female") ? 
                   <img src ={female} className="card-img-top" /> : <img src ={male} className="card-img-top" />}
                  <div className="card-body">
                    <h5 className="card-title">Name: {e.fullName}</h5>
                    <p className="card-text">Designation: {e.designation}</p>
                  </div>
                </div>
              ))
            }
            </div>
        </div>
      </div>
    </main>
  )

}


export default Employees