import Row from 'react-bootstrap/esm/Row';
import Cards from '../components/Cards'

function Eczaneler({data}) {


  return (
    <>
        <div className='container bg-light mt-3 border rounded'>
      <h1 className='text-center m-0 py-3 text-info text-opacity-75'>Eczaneler</h1>
    </div>
    <Row className='container border bg-light rounded mx-auto my-3 row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
   {data.map((eczane) => <Cards key={eczane.gml_id} eczane={eczane}/>)}


      
      
         
         </Row>
    </>
  );
}

export default Eczaneler