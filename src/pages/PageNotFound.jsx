import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
    <div className='container text-center'>
    <h1 className='pt-5'>404 sayfa bulunamadı</h1>
    <Link to="/" className="m-5 btn btn-primary"> Anasayfaya Gitmek için tıklayın.</Link>
    </div>
    </>
  )
}

export default PageNotFound