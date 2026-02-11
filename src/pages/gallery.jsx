import first from "../assets/coderecet-1.jpg";
import second from "../assets/coderecet-2.jpg";
import third from "../assets/coderecet-3.jpg";
import img1 from "../assets/coderecet-img1.jpg";
import img2 from "../assets/coderecet-img2.jpg";
import img3 from "../assets/coderecet-img3.jpg";
import img4 from "../assets/coderecet-img4.jpg";
import img5 from "../assets/coderecet-img5.jpg";
import img6 from "../assets/coderecet-img6.jpg";
import img7 from "../assets/coderecet-img7.jpg";
import "../App.css";

const Gallery = () => {
  const images = [
    first,
    second,
    third,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
  ];

  return (
    <div id="gallery">
      <div className="hidden bg-custom-black border-custom-gray p-28 border-b md:flex flex-col items-center h-screen md:h-[150vh] md:pt-24 pt-6">
        <h1 className="text-custom-white font-seasons_r text-5xl md:text-7xl">
          GALLERY<span className="text-custom-yellow">.</span>
        </h1>
        <div className="w-[80vw] rounded-2xl overflow-hidden group mt-10">
          <div className="-ml-[425px] -mt-[230px] grid -rotate-45 justify-center gap-4">
            <div className="flex space-x-4 transition-transform duration-1000 ease-in-out group-hover:translate-x-[20%]">
              <img className="p-2" src={img1} width={600} />
              <img className="p-2" src={img2} width={600} />
              <img className="p-2" src={img3} width={600} />
              <img className="p-2" src={img5} width={600} />
            </div>
            <div className="flex space-x-4 transition-transform duration-1000 ease-in-out group-hover:translate-x-[-20%] ml-[445px]">
              <img className="p-2" src={first} width={600} />
              <img className="p-2" src={second} width={600} />
              <img className="p-2" src={first} width={600} />
              <img className="p-2" src={first} width={600} />
            </div>
            <div className="flex space-x-4 transition-transform duration-1000 ease-in-out group-hover:translate-x-[20%]">
              <img className="p-2" src={img2} width={600} />
              <img className="p-2" src={third} width={600} />
              <img className="p-2" src={img1} width={600} />
              <img className="p-2" src={img2} width={600} />
            </div>
            <div className="flex space-x-4 transition-transform duration-1000 ease-in-out group-hover:translate-x-[-20%] ml-[445px]">
              <img className="p-2" src={first} width={600} />
              <img className="p-2" src={img5} width={600} />
              <img className="p-2" src={first} width={600} />
              <img className="p-2" src={first} width={600} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden bg-custom-black border-custom-gray pt-20 pb-20 border-b flex-col items-center">
        <h1 className="text-custom-white font-seasons_r text-5xl md:text-7xl">
          GALLERY<span className="text-custom-yellow">.</span>
        </h1>
        <div className="card-3d mt-10">
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
