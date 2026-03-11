import Esther from "../Images/Esther.jpeg";
import agnes from "../Images/agnes.jpeg";
import beaty from "../Images/beaty.jpeg";
import chairman from "../Images/chairman.jpeg";
import claudia from "../Images/claudia.jpeg";
import julius from "../Images/julius.jpeg";

function Gallery() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-yellow-600 mb-10">
        Our Gallery
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        <img src={Esther} className="rounded-xl shadow-md hover:scale-105 transition"/>
        <img src={agnes} className="rounded-xl shadow-md hover:scale-105 transition"/>
        <img src={beaty} className="rounded-xl shadow-md hover:scale-105 transition"/>
        <img src={chairman} className="rounded-xl shadow-md hover:scale-105 transition"/>
        <img src={claudia} className="rounded-xl shadow-md hover:scale-105 transition"/>
        <img src={julius} className="rounded-xl shadow-md hover:scale-105 transition"/>

      </div>
    </section>
  );
}
export default Gallery;