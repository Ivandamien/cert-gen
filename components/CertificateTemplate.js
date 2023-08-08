'use client'
// import React from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const CertificateTemplate = ({ data }) => {
//     const handleExportToPDF = () => {
//       const certificateTemplate = document.getElementById('certificateTemplate');
//       const scale = 2; // Adjust the scale factor as needed (e.g., 2, 3, 4, etc.)
//       html2canvas(certificateTemplate, { scale }).then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF('l', 'mm', 'a4');
//         pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
//         pdf.save('certificate.pdf');
//       });
//     };

//   return (
//     <div className=" mx-auto p-4">
//       <div className="bg-gray-100 p-4 rounded-lg">
//         <h2 className="text-xl font-bold mb-4">Certificate</h2>
//         <div
//           id="certificateTemplate"
//           className="bg-white p-8 rounded-lg shadow-md"
//         >
//           <h3 className="text-2xl font-bold mb-4">{data.courseName}</h3>
//           <p className="mb-2">This certificate is awarded to:</p>
//           <p className="text-xl font-bold mb-4">{data.studentName}</p>
//           <p>Completion Date: {data.completionDate}</p>
//         </div>
//         <div className="mt-4">
//           <button
//             onClick={handleExportToPDF}
//             className="bg-green-500 text-white rounded-lg px-4 py-2"
//           >
//             Export to PDF
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertificateTemplate;
import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Inter, Roboto_Mono, Pinyon_Script, Open_Sans, Sacramento, Rochester, Clicker_Script, Shrikhand } from 'next/font/google';

 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '700'],
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
const pinyon = Pinyon_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pinyon',
  weight: ['400'],
})
const open = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open',
  weight: ['400', '700'],
})
const shrik = Shrikhand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-shrik',
  weight: ['400'],
})

const CertificateTemplate = ({data}) => {
    const handleExportToPDF = () => {
      const certificateTemplate = document.getElementById('certificateTemplate');
      const scale = 2; // Adjust the scale factor as needed (e.g., 2, 3, 4, etc.)
      html2canvas(certificateTemplate, { scale }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('l', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
        pdf.save('certificate.pdf');
      });
            
    };

  return (
    <div className="mx-auto max-w-[900px] p-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4 ">Certificate</h2>
        <div
           id="certificateTemplate"
           className="bg-white p-8 rounded-lg shadow-md"
         >
          <div className={`container mx-auto font-open ${open.variable} pm-certificate-container`}>
          <div className="outer-border"></div>
          <div className="inner-border"></div>

          <div className="pm-certificate-border flex-col items-center justify-center ">
            <div className="row pm-certificate-header">
              <div className={`pm-certificate-title ${pinyon.variable} font-pinyon  text-center`}>
                <h2 className={`${open.variable}`}>AYTP Learning Certificate of Completion</h2>
              </div>
            </div>

            <div className="row pm-certificate-body">
              <div className="pm-certificate-block">
                <div className="col-xs-12">
                  <div className="row">
                    <div className="col-xs-2"></div>
                    <div className="pm-certificate-name underline_text margin-0 col-xs-8 text-center">
                      <span className="pm-name-text bold  text-[20px]">{data.studentName}</span>
                    </div>
                    <div className="col-xs-2"></div>
                  </div>
                </div>

                <div className="col-xs-12">
                  <div className="row">
                    <div className="col-xs-2"></div>
                    <div className="pm-earned col-xs-8 text-center">
                      <span className={`pm-earned-text padding-0 block ${pinyon.variable} font-pinyon`}>has earned</span>
                      <span className="pm-credits-text block bold sans">PD175: 1.0 Credit Hours</span>
                    </div>
                    <div className="col-xs-2"></div>
                    <div className="col-xs-12"></div>
                  </div>
                </div>

                <div className="col-xs-12">
                  <div className="row">
                    <div className="col-xs-2"></div>
                    <div className="pm-course-title col-xs-8 text-center">
                      <span className={`pm-earned-text block  ${pinyon.variable} font-pinyon`}>while completing the training course entitled</span>
                    </div>
                    <div className="col-xs-2"></div>
                  </div>
                </div>

                <div className="col-xs-12">
                  <div className="row">
                    <div className="col-xs-2"></div>
                    <div className="pm-course-title underline_text col-xs-8 text-center">
                      <span className="pm-credits-text block bold ">{data.courseName}</span>
                    </div>
                    <div className="col-xs-2"></div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12">
                <div className="flex items-center justify-center">
                  <div className="pm-certificate-footer flex  justify-between">
                    <div className="col-xs-4 pm-certified col-xs-4 text-center">
                      <span className={`pm-credits-text block ${open.variable} font-open`}>AYPT Online Learning</span>
                      <span className={`pm-empty-space block underline_text ${open.variable} font-open`}></span>
                      <span className={`bold block ${open.variable} font-open`}>Crystal Benton Instructional Specialist II, </span>
                      <span className={`bold block ${open.variable} font-open`}>Staff Development</span>
                    </div>
                    <div className="col-xs-4">
                      {/* LEAVE EMPTY */}
                    </div>
                    <div className="col-xs-4 pm-certified col-xs-4 text-center">
                      <span className={`pm-credits-text block ${open.variable} font-open`}>Date Completed</span>
                      <span className={`pm-empty-space block underline_text ${open.variable} font-open`}>{data.completionDate}</span>
                      <span className={`bold block ${open.variable} font-open`}>DOB: </span>
                      <span className={`bold block ${open.variable} font-open`}>Cerificate ID # (last 4 digits)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
                  
          </div>
        </div>
        <div className="mt-4">
           <button
             onClick={handleExportToPDF}
             className="bg-green-500 text-white rounded-lg px-4 py-2"
           >
             Export to PDF
           </button>
         </div>
      </div>
    </div>
  );
};

export default CertificateTemplate;
