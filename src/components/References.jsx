// @flow

import React from 'react';
import Img from 'gatsby-image';

const Partner = ({ img, name }: { img: Object, name: string }) => (
  <div style={{ width: '200px', height: '80px', verticalAlign: 'middle' }}>
    <Img {...img} alt={name} style={{ overflow: 'visible', margin: 0 }} />
  </div>
);

const References = ({ data, t }: Object) => (
  <section className="section" id="testimonials">
    <header className="section-header mb-40">
      <small>{t('testimonials')}</small>
      <p className="lead">{t('switzerlandsBestCompanies')}</p>
    </header>

    <div className="partner">
      <Partner img={data.testingtime} name="TestingTime" />
      <Partner img={data.quitt} name="quitt.ch" />
      <Partner img={data.cryptofund} name="CryptoFund" />
      <Partner img={data.frontify} name="Frontify" />
      <Partner img={data.sherpany} name="Sherpany" />
      <Partner img={data.apiax} name="Apiax" />
      <Partner img={data.allthings} name="Allthings Technologies" />
    </div>

  </section>
);

export default References;
