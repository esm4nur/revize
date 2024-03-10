import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Cards({ eczane }) {
  return (

      <Col className="my-2">
        <Card className="h-100 border-0 shadow">
          {/* <Card.Img
            src={plaj.image}
            alt="..."
            position="top"
            className=""
            style={{ height: 250 }}
          /> */}
          <Card.Body>
            <Card.Title>{eczane.adi}</Card.Title>
            <p className="text-body-tertiary">{eczane.alt_katego}</p>
            {/* <Card.Text>
              <p>Uzunluk: <h6>{plaj.PLAJ_UZUNL}</h6></p>
              <p>Genişlik: <h6>{plaj.ORTALAMA_G}</h6></p>
              <p>Soyunma Kabini: <h6>{plaj.SOYUNMA_KA} adet</h6></p>
              <p>Duş: <h6>{plaj.DUS_ADET} adet</h6></p>
              <p>Tuvalet: <h6>{plaj.TUVALET_AD} adet</h6></p>
              <p>Otopark: <h6>{plaj.OTOPARK_DU} adet</h6></p>                 

                  
            </Card.Text> */}
            {/* <div className="w-100">
              <iframe
                  frameBorder="0" style={{border:0, borderRadius:10}}
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCATKrqYuD0JSQA5_BvSIyh3hEXRM1oV9Y&q=${plaj.ADI}`}
                  allowFullscreen>
            </iframe> </div> */}
          </Card.Body>
        </Card>
      </Col>

  );
}

export default Cards;
