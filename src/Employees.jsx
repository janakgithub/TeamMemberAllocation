import female from './images/female.jpg';
import male from './images/male.jpg';

const Employees = ({employees,selectedTeam,handleTeamSelection,handleCardClick}) => {
  
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
                <div key = {e.id} className={(e.teamName===selectedTeam? "card m-2 addBoxShadow": "card m-2")} style={{cursor:"pointer"}} id={e.id} onClick={handleCardClick}>
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