import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Assuming you have images in the src/assets/images directory
import image1 from '../assets/images/ggrpng-230x150.webp';
import image2 from '../assets/images/metalorpng-230x150.webp';
import image3 from '../assets/images/geoforensicpng-230x150.webp';
import image4 from '../assets/images/certified1.webp';
import image5 from '../assets/images/certified2.webp';
import image6 from '../assets/images/certified3.webp';

const accreditationImages = [image4, image5, image6];

function Participation() {
  return (
    <section className="min-h-screen participation p-8 bg-">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-white font-mono font-bold mb-4">Participation</h2>
        <p className='font-mono mb-10'>Details about participation...</p>
      </div>
      <div className="grid grid-cols-1 gap-10 p-5 sm:grid-cols-3">
        <div className="w-full bg-white rounded shadow-md p-4 flex flex-col items-center">
          <img src={image1} alt="Participation 1" className="w-72 h-40 object-cover mb-4 rounded" />
          <p className='font-mono'>Description of the first participation item...</p>
        </div>
        <div className="w-full bg-white rounded shadow-md p-4 flex flex-col items-center">
          <img src={image2} alt="Participation 2" className="w-72 h-40 object-cover mb-4 rounded" />
          <p className='font-mono'>Description of the second participation item...</p>
        </div>
        <div className="w-full bg-white rounded shadow-md p-4 flex flex-col items-center">
          <img src={image3} alt="Participation 3" className="w-72 h-40 object-cover mb-4 rounded" />
          <p className='font-mono'>Description of the third participation item...</p>
        </div>
      </div>
      <div className="container mx-auto text-center mt-20">
        <h2 className="text-3xl text-white font-mono font-bold mb-4">Accreditations</h2>
      </div>
      {/* <div className="grid grid-cols-1 gap-10 p-5 sm:grid-cols-3">
        <div className="w-full bg-white rounded shadow-md p-4 flex flex-col items-center">
          <img src={image4} alt="Accreditation 1" className="w-full h-40 object-cover mb-4 rounded" />
        </div>
        <div className="w-full bg-white rounded shadow-md p-4 flex flex-col items-center">
          <img src={image5} alt="Accreditation 2" className="w-full h-40 object-cover mb-4 rounded" />
        </div>
        <div className="w-full bg-white rounded shadow-md p-4 flex flex-col items-center">
          <img src={image6} alt="Accreditation 3" className="w-full h-40 object-cover mb-4 rounded" />
        </div>
      </div>
      <div className="mt-10">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows={false} className="carousel">
          {accreditationImages.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Accreditation ${index}`} className="rounded-lg shadow-lg" />
            </div>
          ))}
        </Carousel>
      </div> */}
    </section>
  );
}

export default Participation;


// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// // Assuming you have images in the src/assets/images directory
// import image1 from '../assets/images/ggrpng-230x150.webp';
// import image2 from '../assets/images/metalorpng-230x150.webp';
// import image3 from '../assets/images/geoforensicpng-230x150.webp';
// import image4 from '../assets/images/certified1.webp';
// import image5 from  '../assets/images/certified2.webp';
// import image6 from  '../assets/images/certified3.webp';

// const Images = {
//   image4,
//   image5,
//   image6
// }
// function Participation() {
//   return (
//     <section className="min-h-screen participation p-8 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-mono font-bold mb-4">Participation</h2>
//         <p className='font-mono mb-10'>Details about participation...</p>
//       </div>
//       <div className="grid grid-cols-1 gap-10 p-5 sm:grid-cols-3">
//         <div className="w-full hover:bg-opacity-10 bg-white rounded shadow-md p-4 flex flex-col items-center">
//           <img src={image1} alt="Participation 1" className="w-72 h-40 object-cover mb-4 rounded" />
//           <p className='font-mono'>Description of the first participation item...</p>
//         </div>
//         <div className="w-full hover:bg-opacity-10 bg-white rounded shadow-md p-4 flex flex-col items-center">
//           <img src={image2} alt="Participation 2" className="w-72 h-40 object-cover mb-4 rounded" />
//           <p className='font-mono'>Description of the second participation item...</p>
//         </div>
//         <div className="w-full hover:bg-opacity-10 bg-white rounded shadow-md p-4 flex flex-col items-center">
//           <img src={image3} alt="Participation 3" className="w-72 h-40 object-cover mb-4 rounded" />
//           <p className='font-mono'>Description of the third participation item...</p>
//         </div>
//       </div>
//       <div className="container mx-auto text-center mt-20">
//         <h2 className="text-3xl font-mono font-bold mb-4">Accreditations</h2>
//       </div>
//       <div className="grid grid-cols-1 gap-10 p-5 sm:grid-cols-3">
//         <div className="w-full bg-white rounded shadow-md p-4 flex flex-col items-center">
//           <img src={image4} alt="Accreditation 1" className="w-full h-40 object-cover mb-4 rounded" />
//         </div>
//         <div className="w-full bg-white rounded shadow-md p-4 flex flex-col items-center">
//           <img src={image5} alt="Accreditation 2" className="w-full h-40 object-cover mb-4 rounded" />
//         </div>
//         <div className="w-full bg-white rounded shadow-md p-4 flex flex-col items-center">
//           <img src={image6} alt="Accreditation 3" className="w-full h-40 object-cover mb-4 rounded" />
//         </div>
//       </div>
//       <div className="mt-10">
//         <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows={false} className="carousel">
//           {Images.map((image, index) => (
//             <div key={index} className="image-item">
//               <img src={image} alt={`Images ${index}`} className="rounded-lg shadow-lg" />
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </section>
//   );
// }

// export default Participation;
