const Footer = () => {

  const today = new Date();
  
  return(
    <footer>
      <div>
        <div className="row justify-content-center mt-3 mb-3">
          <h5> Team Member Allocation App - {today.getFullYear()}</h5>
        </div>  
      </div>
    </footer>
  )
  
}

export default Footer