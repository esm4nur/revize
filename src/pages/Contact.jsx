import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function Contact() {
  return (
    <>
    <div className='container bg-light mt-3 rounded'>
      <h1 className='text-center py-3 text-info text-opacity-75'>İletişim</h1>
    </div>
    <div className='container my-3 bg-light rounded'>
    <img className='img-fluid p-3 w-100' src="https://www.gotobursa.com.tr/uploads/2020/07/blog-682x325-37.png" alt="" />
    <ul>
        <li>Telefon: 153 - 444 16 00</li>
        <li>Adres: Zafer Mh. Ankara Yolu Cd. C Blok No:1  PK:16080 Osmangazi / BURSA </li>
        <li>E-Posta: beyazmasa@bursa.bel.tr</li>
        <li><iframe
                  frameBorder="0" style={{border:0, borderRadius:10, width:500, height:300}}
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCATKrqYuD0JSQA5_BvSIyh3hEXRM1oV9Y&q=Bursa+Buyuksehir+Belediyesi"
                  allowFullscreen>
            </iframe></li>
    </ul>
    

    <h3 className='my-5 text-center'>İstek, Şikayet, Öneri Formu</h3>
    <div>
    <Form className='my-3 p-3'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Row>
        <Col>
        <Form.Label className='fw-medium'>İsim</Form.Label>
          <Form.Control placeholder="İsminizi Giriniz" />
        </Col>
        <Col>
        <Form.Label className='fw-medium'>Soyisim</Form.Label>
          <Form.Control placeholder="Soyisminizi Giriniz" />
        </Col>
      </Row>
        <Form.Label className='fw-medium mt-3'>Email adresi</Form.Label>
        <Form.Control type="email" placeholder="E-mail adresinizi giriniz" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='fw-medium'>Başvuru Formu</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <Button type="submit">Gönder</Button>
    </Form>
    </div>
    </div>
    </>
  )
}

export default Contact