
import HomeCarousel from "../components/HomeCarousel";

function Home({ data }) {
  return (
    <>
      <HomeCarousel data={data} />

      <div>
        <h3 className="container bg-light border rounded text-center text-info text-opacity-75 p-3 mt-3">
          ARADIĞINIZ HER ECZANE BURADA!
        </h3>
      </div>
    </>
  );
}

export default Home;
