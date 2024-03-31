const CarouselBar = () => {
  return (
    <>
    <div className='container mb-2 featurette shadow p-0 bg-white rounded'>
    <div id="myCarousel" className="carousel caroousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../src/images/carousel/drone.gif" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-white-100">Flying through the sky in ways that seem impossible</h5>
        <p>We have never lost our passion for flight, and with our drones, those passions have turned imagination into reality
          .</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="../src/images/carousel/hyperlapes.gif" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-white-100">Hyperlapse</h5>
        <p>Speed ​​up time with just a few taps by creating a striking hyperlapse or timelapse video.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="../src/images/carousel/mastershots.gif" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-white-100">MasterShots</h5>
        <p>MasterShots is a real game changer for any beginner aerial photographer.</p>
      </div>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default CarouselBar

