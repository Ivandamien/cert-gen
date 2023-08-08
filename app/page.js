'use client'
import React, { useState } from 'react';
import CertificateForm from '@/components/CertificateForm';
import CertificateTemplate from '@/components/CertificateTemplate';
// import CertificateForm from '@components/CertificateForm';
// import CertificateTemplate from '@components/CertificateTemplate';

function App() {
  const [certificateData, setCertificateData] = useState(null);

  return (
    <div className="App">
      {!certificateData ? (
        <CertificateForm onSubmit={(data) => setCertificateData(data)} />
      ) : (
        <CertificateTemplate data={certificateData} />
      )}
    </div>
  );
}

export default App;
