const Header = ({ selectedTeam, totalMembers }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Members Allocation</h1>
          <h2>{selectedTeam} has {totalMembers} members</h2>
        </div>
      </div>
    </header>
  )
}


export default Header