import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import banner from '../Assests/banner.png';
import About from './About';
import ContactUs from './ContactUs';
import KBlocks from './Kblocks';
import BlueMetals from './BlueMetals';
import ReadyMix from './ReadyMix';

const Home = () => {
  // Handle hash-based navigation on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1); // remove the '#'
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <Grid container>
      {/* Banner */}
      <Grid item xs={12}>
        <img
          src={banner}
          alt="KIPIPL M Sand, P Sand, Blue Metal and Ready Mix Concrete supplier in Chennimalai"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </Grid>
       <Grid item xs={12}>
  <section
    style={{
      padding: "40px 8%",
      textAlign: "center",
      backgroundColor: "#fff",
    }}
  >
    <h1
      style={{
        fontSize: "32px",
        fontWeight: 700,
        color: "#111",
        marginBottom: "15px",
      }}
    >
      M Sand, P Sand, Blue Metal & Ready Mix Concrete in Chennimalai
    </h1>

    <p
      style={{
        fontSize: "16px",
        lineHeight: 1.8,
        color: "#555",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      Kannan Infra Projects India Private Limited (KIPIPL) supplies quality
      M Sand, P Sand, Blue Metal aggregates, K Blocks and Ready Mix Concrete
      for construction projects in Chennimalai and surrounding areas.
      Our products are suitable for residential, commercial, industrial and
      infrastructure projects, with reliable supply and delivery across
      Erode, Tiruppur and Namakkal districts.
    </p>
  </section>
</Grid>
      {/* About Section */}
      <Grid item xs={12} id="about">
        <About />
      </Grid>

      {/* ReadyMix Section */}
      <Grid item xs={12} id="readymix" sx={{ mt: 5, padding: 2 }}>
        <ReadyMix />
      </Grid>

      {/* K Blocks Section */}
      <Grid item xs={12} id="kblocks" sx={{ mt: 5, padding: 2 }}>
        <KBlocks />
      </Grid>

      {/* Blue Metals Section */}
      <Grid item xs={12} id="bluemetals" sx={{ mt: 5, padding: 2 }}>
        <BlueMetals />
      </Grid>

      {/* Contact Us Section */}
      <Grid item xs={12} id="contact" sx={{ mt: 5, padding: 2 }}>
        <ContactUs />
      </Grid>
    </Grid>
  );
};

export default Home;
