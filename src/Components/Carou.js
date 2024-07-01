import IMG1 from '../Images/Carousel1.jpg';
import IMG2 from '../Images/Carousel2.jpg';
import IMG3 from '../Images/Carousel3.jpg';


function Carou() {
    return(
        <>
        <div id="PPGcarou" className="container-fuid carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={IMG1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={IMG2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={IMG3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#PPGcarou" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden={true}></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#PPGcarou" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden={true}></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>

        </>
    )
}
export default Carou;