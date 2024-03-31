import { SiElectronbuilder } from "react-icons/si";
import { IoInformationCircleOutline } from "react-icons/io5";
import { GiMaterialsScience } from "react-icons/gi";


const Features = () => {
  return (
    <>
    <div className="container px-4 py-5 featurette shadow p-0 mt-4 bg-white rounded" id="icon-grid">
    <h2 className="pb-2 border-bottom"><IoInformationCircleOutline /> Discover Innovations Facts:</h2>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div className="col d-flex align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><SiElectronbuilder size='2x' />
</svg>
        <div>
          <h4 className="fw-bold mb-1">Flying drone</h4>
          <p>Flying drone can roll on the ground to save energy over long distances.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><SiElectronbuilder size='2x' /></svg>
        <div>
          <h4 className="fw-bold mb-1">War Usage</h4>
          <p>Ukraine will spoof GPS across the country to stop Russian drones.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><SiElectronbuilder size='2x' /></svg>
        <div>
          <h4 className="fw-bold mb-1">Animal Interaction</h4>
          <p>Flying bird robot can soar so well it uses almost no power.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><SiElectronbuilder size='2x' /></svg>
        <div>
          <h4 className="fw-bold mb-1">Medical Services</h4>
          <p>Drone delivers defibrillators for cardiac arrest faster than ambulance.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><GiMaterialsScience size='2x' /></svg>
        <div>
          <h4 className="fw-bold mb-1">Artificial Intelligence</h4>
          <p>AI beats champion human pilots in head-to-head drone races.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><GiMaterialsScience size='2x' /></svg>
        <div>
          <h4 className="fw-bold mb-1">Aid Services</h4>
          <p>Drone ship could release drone swarm for search and rescue.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><GiMaterialsScience size='2x' /></svg>
        <div>
          <h4 className="fw-bold mb-1">Face Recognition</h4>
          <p>US Air Force is giving drones the ability to recognise faces.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><GiMaterialsScience size='2x' /></svg>
        <div>
          <h4 className="fw-bold mb-1">Inflatability Option</h4>
          <p>Inflatable drone can bounce off walls and perch on nearly anything.</p>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Features