// src/components/TrustedBrands.js
import React from 'react';
import './TrustedBrands.css';

const brands = [
  { name: 'Google', logo: '/logos/google.png' },
  { name: 'Microsoft', logo: '/logos/microsoft.png' },
  { name: 'Adobe', logo: '/logos/adobe.png' },
  { name: 'IBM', logo: '/logos/ibm.png' },
];

const TrustedBrands = () => {
  return (
    <section className="trusted-brands">
      <h2>Trusted by Global Brands</h2>
      <div className="brand-logos">
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand.logo}
            alt={`${brand.name} logo`}
            className="brand-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedBrands;
