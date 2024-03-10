

function Footer() {
  return (
    <>
    <footer className='bg-light border-top mt-3 position-sticky bottom-0'>
<div className="container">
  <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-2">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
      <img src="" style={{height:75}} alt="" />
      </a>
          </div>

<div className="mb-md-0 text-body-secondary text-wrap fw-medium">Esmanur Özdemir</div>
<div className='d-flex col justify-content-end '>    
    <ul className="nav col justify-content-end align-items-center list-unstyled d-flex fs-5">
    <li className="ms-3 fs-6"> </li> 
      <li className="ms-3"><a className="text-body-secondary" href="#"><i className="fa-brands fa-twitter"></i></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><i className="fa-brands fa-instagram"></i></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><i className="fa-brands fa-facebook"></i></a></li>
    </ul>
    </div>

  </div>
</div>
</footer>
    </>
  )
}

export default Footer