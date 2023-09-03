import { useState } from 'react';

const GroupedTeamMembers = ({ employees, selectedteam, setTeam }) => {

  const [groupedEmployes, setGroupedEmployes] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = [];
    var teamMembers = employees.filter(e => e.teamName === 'TeamA');
    var teamA = { team: 'TeamA', members: teamMembers, collapsed: selectedteam === 'TeamA' ? false : true }
    teams.push(teamA);

    var teamMembers = employees.filter(e => e.teamName === 'TeamB');
    var teamB = { team: 'TeamB', members: teamMembers, collapsed: selectedteam === 'TeamB' ? false : true }
    teams.push(teamB);

    var teamMembers = employees.filter(e => e.teamName === 'TeamC');
    var teamC = { team: 'TeamC', members: teamMembers, collapsed: selectedteam === 'TeamC' ? false : true }
    teams.push(teamC);

    var teamMembers = employees.filter(e => e.teamName === 'TeamD');
    var teamD = { team: 'TeamD', members: teamMembers, collapsed: selectedteam === 'TeamD' ? false : true }
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(event) {
    var transformedGroupData = groupedEmployes.map(item => { return item.team === event.currentTarget.id ? { ...item, collapsed: !item.collapsed } : item})
    setGroupedEmployes(transformedGroupData);
    setTeam(event.currentTarget.id);
  }


  return (
    <main className="container">
      {
        groupedEmployes.map((item) => {
          return (
            <div id={item.team} key={item.team} className="card mt-2" style={{ cursor: "pointer" }} onClick={handleTeamClick}>
              <h4 className="card-header text-secondary bg-white">
                Team Name: {item.team}
              </h4>
              <div className={item.collapsed === true ? "collapse" : ""}>
                <hr />
                {
                  (item.members).map(member => {
                    return (
                      <div key={member.fullName} className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className="text-dark">
                            Full Name: {member.fullName}
                          </span>
                        </h5>
                        <p>Designation: {member.designation}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  )
}

export default GroupedTeamMembers