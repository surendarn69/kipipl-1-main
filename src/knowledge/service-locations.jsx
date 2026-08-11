import React, { useRef } from 'react';
import { Box, Grid, Typography, Button, Divider, Card } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FactoryIcon from '@mui/icons-material/Factory';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// --- IMAGES -----------------------------------------------------------
// Replace these with your real assets. Reusing existing product photos
// from the project where possible; add the rest to src/Assests/.
import readyMixImg from '../Assests/Readymix2.jpg';
import bluemetalImg from '../Assests/Aggregate.jpg';
import kblocksImg from '../Assests/solid_blocks.jpg';
import msandImg from '../Assests/msand.jpg';
import psandImg from '../Assests/psand.jpg';
import ctaImg from '../Assests/banner.png'; // swap for a dedicated site-truck photo if you have one
// import tnMapImg from '../Assests/tn-map.png'; // <- add a Tamil Nadu map graphic here

// TODO: replace these two with your real M Sand / P Sand photos, e.g:
// import msandImg from '../Assests/msand.png';
// import psandImg from '../Assests/psand.png';
// Using simple placeholder swatches for now so they don't clash visually
// with the other product photos.
const products = [
  { label: 'Ready Mix Concrete', img: readyMixImg },
  { label: 'Solid Blocks', img: kblocksImg },
  { label: 'M Sand', img: msandImg },
  { label: 'P Sand', img: psandImg },
  { label: 'Blue Metal Aggregates', img: bluemetalImg },
];

const stats = [
  { icon: <LocationOnIcon />, value: '16+', label: 'Service Locations' },
  { icon: <ApartmentIcon />, value: '3', label: 'Districts Covered' },
  { icon: <PrecisionManufacturingIcon />, value: '', label: 'Own Quarry & Manufacturing Units' },
  { icon: <LocalShippingIcon />, value: '', label: 'Fast & Reliable Delivery' },
];

const districts = [
  {
    name: 'Erode District',
    icon: <ApartmentIcon />,
    countLabel: '10 Locations',
    locations: [
      'Erode', 'Perundurai', 'Gobichettipalayam', 'Bhavani', 'Anthiyur',
      'Chennimalai', 'Modakurichi', 'Kodumudi', 'Sivagiri', 'Arachalur',
    ],
    products: ['Ready Mix Concrete', 'Solid Blocks', 'M Sand', 'P Sand'],
  },
  {
    name: 'Tiruppur District',
    icon: <FactoryIcon />,
    countLabel: '4 Locations',
    locations: ['Tiruppur', 'Kangeyam', 'Dharapuram', 'Uthukuli'],
    products: ['Ready Mix Concrete', 'Solid Blocks', 'M Sand', 'P Sand'],
  },
  {
    name: 'Namakkal District',
    icon: <ApartmentIcon />,
    countLabel: '3 Locations',
    locations: ['Namakkal', 'Tiruchengode', 'Kumarapalayam'],
    products: ['Ready Mix Concrete', 'Solid Blocks', 'M Sand', 'P Sand'],
  },
];

const whyChoose = [
  {
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 30 }} />,
    title: 'Own Blue Metal Quarry',
    desc: 'Our own quarry ensures a steady supply of premium quality blue metal aggregates.',
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 30 }} />,
    title: 'Reliable Delivery Network',
    desc: 'Strong logistics network ensures on-time delivery across Tamil Nadu.',
  },
  {
    icon: <FactoryIcon sx={{ fontSize: 30 }} />,
    title: 'Integrated Manufacturing',
    desc: 'Advanced manufacturing facilities for Ready Mix Concrete and Solid Blocks.',
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 30 }} />,
    title: 'Premium Quality Materials',
    desc: 'Consistent quality, tested materials, and strict quality control at every stage.',
  },
];

const ServiceLocations = () => {
  const coverageRef = useRef(null);

  const scrollToCoverage = () => {
    coverageRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ backgroundColor: '#F8F9FA', py: { xs: 4, md: 6 } }}>
      <Box sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 2, md: 4 } }}>
        {/* ================= HERO SECTION ================= */}
        <Grid container spacing={5} alignItems="center" sx={{ mb: { xs: 6, md: 8 } }}>
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                color: '#F5A000',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.5px',
                mb: 1.5,
              }}
            >
              KIPIPL KNOWLEDGE – SERVICE LOCATIONS
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '30px', md: '42px' },
                lineHeight: 1.2,
                color: '#111111',
                mb: 2.5,
              }}
            >
              Delivering Quality Construction Materials Across Tamil Nadu
            </Typography>

            <Typography
              sx={{
                color: '#5A5A5A',
                fontSize: { xs: '14px', md: '15px' },
                lineHeight: '26px',
                mb: 3.5,
                maxWidth: '540px',
              }}
            >
              KIPIPL proudly supplies Ready Mix Concrete, Solid Blocks, M Sand,
              P Sand, and Premium Blue Metal aggregates across
              major districts of Tamil Nadu. With our own quarry, advanced
              manufacturing facilities, and reliable logistics network, we
              ensure timely delivery and consistent quality for residential,
              commercial, industrial, and infrastructure projects.
            </Typography>

            {/* Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
              <Button
                variant="contained"
                startIcon={<LocationOnIcon />}
                onClick={scrollToCoverage}
                sx={{
                  backgroundColor: '#F5A000',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '13px',
                  textTransform: 'none',
                  borderRadius: '10px',
                  px: 3,
                  py: 1.2,
                  boxShadow: 'none',
                  '&:hover': { backgroundColor: '#d98d00', boxShadow: 'none' },
                }}
              >
                View Service Areas
              </Button>

              <Button
                variant="outlined"
                startIcon={<DescriptionOutlinedIcon />}
                sx={{
                  borderColor: '#F5A000',
                  color: '#111111',
                  fontWeight: 700,
                  fontSize: '13px',
                  textTransform: 'none',
                  borderRadius: '10px',
                  px: 3,
                  py: 1.2,
                  '&:hover': { borderColor: '#d98d00', backgroundColor: '#FFF8EC' },
                }}
              >
                Request a Quote
              </Button>
            </Box>

            {/* Stats row */}
            <Grid container spacing={2}>
              {stats.map((s, i) => (
                <Grid item xs={6} sm={3} key={i}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <Box sx={{ color: '#F5A000', mt: 0.3 }}>{s.icon}</Box>
                    <Box>
                      {s.value && (
                        <Typography sx={{ fontWeight: 700, fontSize: '16px', color: '#111' }}>
                          {s.value}
                        </Typography>
                      )}
                      <Typography sx={{ fontSize: '12px', color: '#6B6B6B', lineHeight: 1.3 }}>
                        {s.label}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* RIGHT: MAP + PRODUCT GRID */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: '18px',
                p: { xs: 2, md: 3 },
                backgroundColor: '#EEF1F4',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
              }}
            >
              {/* Map placeholder - swap Box below for <img src={tnMapImg} /> */}
              <Box
  sx={{
    flex: 1.1,
    minHeight: 280,
    borderRadius: '14px',
    overflow: 'hidden',
  }}
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.0822231443058!2d77.63352077497575!3d11.181547888992942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba973f15612601b%3A0xb9b7f23dca1abd60!2sKannan%20Blue%20Metals!5e0!3m2!1sen!2sin!4v1786426461274!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0, minHeight: '280px' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    title="Kannan Blue Metals Location"
  />
</Box>

              {/* Product grid */}
              <Box
                sx={{
                  flex: 1,
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 1.5,
                }}
              >
                {products.map((p, i) => (
                  <Box
                    key={i}
                    sx={{
                      backgroundColor: '#fff',
                      borderRadius: '12px',
                      p: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
                    }}
                  >
                    <Box
                      component="img"
                      src={p.img}
                      alt={p.label}
                      sx={{
                        width: '100%',
                        height: 55,
                        objectFit: 'cover',
                        borderRadius: '8px',
                        mb: 0.7,
                      }}
                    />
                    <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#1A1A1A' }}>
                      {p.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* ================= SERVICE COVERAGE ================= */}
        <Box ref={coverageRef} sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: { xs: '24px', md: '28px' }, color: '#111', mb: 3 }}
          >
            Our Service Coverage
          </Typography>

          <Grid container spacing={3}>
            {districts.map((d, i) => (
              <Grid item xs={12} sm={6} lg={4} key={i}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '14px',
                    p: 2.5,
                    boxShadow: '0px 3px 14px rgba(0,0,0,0.05)',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '10px',
                        backgroundColor: '#FFF4DE',
                        color: '#F5A000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {d.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '15px', color: '#111' }}>
                        {d.name}
                      </Typography>
                      <Typography sx={{ fontSize: '12px', color: '#F5A000', fontWeight: 600 }}>
                        {d.countLabel}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      columnGap: 1,
                      mb: 1.5,
                    }}
                  >
                    {d.locations.map((loc, j) => (
                      <Box key={j} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.6 }}>
                        <LocationOnIcon sx={{ fontSize: 13, color: '#F5A000' }} />
                        <Typography sx={{ fontSize: '12px', color: '#333' }}>{loc}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Divider sx={{ mb: 1.5 }} />

                  <Typography sx={{ fontSize: '11px', fontWeight: 700, color: '#888', mb: 1 }}>
                    Products Available
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {d.products.map((p, k) => (
                      <Box key={k} sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
                        <CheckCircleIcon sx={{ fontSize: 12, color: '#F5A000' }} />
                        <Typography sx={{ fontSize: '10px', color: '#555' }}>{p}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ================= WHY CHOOSE KIPIPL ================= */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: { xs: '22px', md: '26px' }, color: '#111', mb: 3 }}
          >
            Why Choose KIPIPL
          </Typography>

          <Grid container spacing={3}>
            {whyChoose.map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '14px',
                    p: 3,
                    boxShadow: '0px 3px 14px rgba(0,0,0,0.05)',
                  }}
                >
                  <Box sx={{ color: '#F5A000', mb: 1.5 }}>{item.icon}</Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '15px', color: '#111', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: '12.5px', color: '#666', lineHeight: 1.5 }}>
                    {item.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ================= CTA BANNER ================= */}
        <Card
          sx={{
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            minHeight: 140,
          }}
        >
          <Box
            component="img"
            src={ctaImg}
            alt="Construction site"
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.55)',
            }}
          />
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              gap: 2,
              p: { xs: 3, md: 4 },
            }}
          >
            <Box>
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: { xs: '18px', md: '22px' } }}>
                Need Construction Materials Delivered to Your Site?
              </Typography>
              <Typography sx={{ color: '#E5E5E5', fontSize: '13px', mt: 1, maxWidth: '520px' }}>
                Our logistics team ensures timely delivery of Ready Mix Concrete,
                Solid Blocks, M Sand, P Sand, and Blue Metal
                Aggregates across our service regions.
              </Typography>
            </Box>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: '#F5A000',
                color: '#fff',
                fontWeight: 700,
                fontSize: '13px',
                textTransform: 'none',
                borderRadius: '10px',
                px: 3,
                py: 1.2,
                whiteSpace: 'nowrap',
                boxShadow: 'none',
                '&:hover': { backgroundColor: '#d98d00', boxShadow: 'none' },
              }}
            >
              Get Free Quote
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default ServiceLocations;