import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';

// FAQ data grouped by category — edit / add as many Q&A as you need
const faqGroups = [
  {
    category: 'General',
    icon: <ApartmentOutlinedIcon />,
    questions: [
      {
        q: 'Since when has KIPIPL been in operation?',
        a: 'KIPIPL has been operating since 1990, with over three decades of experience in the sand and aggregates industry, backed by a 100-acre mining campus in Murugantholuvu, Chennimalai.',
      },
      {
        q: 'What products does KIPIPL supply?',
        a: 'We supply Ready Mix Concrete, Solid (K) Blocks, M Sand, P Sand, and premium Blue Metal aggregates for residential, commercial, industrial, and infrastructure projects.',
      },
      {
        q: 'Which areas does KIPIPL currently serve?',
        a: 'We currently serve Erode, Tiruppur, and Namakkal districts, covering major towns and surrounding areas within each district.',
      },
    ],
  },
  {
    category: 'Products & Quality',
    icon: <Inventory2OutlinedIcon />,
    questions: [
      {
        q: 'Do your products meet IS quality standards?',
        a: 'Yes. Our 150 TPH 4-stage sand manufacturing plant, along with advanced quality controls, ensures all products meet IS standards while minimizing environmental impact.',
      },
      {
        q: "What's the difference between M Sand and P Sand?",
        a: 'M Sand (Manufactured Sand) is crushed and graded for construction use, offering consistent quality and availability. P Sand (Plastering Sand) is finer and specifically processed for plastering applications requiring a smoother finish.',
      },
      {
        q: 'What sizes of blue metal aggregates are available?',
        a: 'We supply blue metal in multiple sizes — 6 mm, 12 mm, 20 mm, 40 mm, and 53 mm — along with rough stone and dust, to suit different construction requirements.',
      },
    ],
  },
  {
    category: 'Delivery & Logistics',
    icon: <LocalShippingOutlinedIcon />,
    questions: [
      {
        q: 'How fast can I get my order delivered?',
        a: 'As the nearest blue metal quarry to Erode, we guarantee swift delivery, typically within two hours, backed by a reliable logistics network across our service districts.',
      },
      {
        q: 'Do you deliver Ready Mix Concrete directly to the site?',
        a: 'Yes. Our Twin Shaft RMC Plant, along with boom pump support and experienced site coordinators, ensures precise on-site delivery and pouring for projects of every scale.',
      },
      {
        q: 'Is there a minimum order quantity?',
        a: 'Minimum order quantities vary by product and site distance. Please contact our team via WhatsApp or the enquiry form for exact quantities and pricing for your project.',
      },
    ],
  },
  {
    category: 'Ordering & Support',
    icon: <VerifiedOutlinedIcon />,
    questions: [
      {
        q: 'How do I place an order or get a quote?',
        a: 'You can request a quote through our Contact Us page, call us directly, or chat with us on WhatsApp for a quick response from our team.',
      },
      {
        q: 'Can I visit the quarry or manufacturing plant?',
        a: 'Yes, site visits can be arranged on request. Please reach out through our contact form or phone to schedule a visit to our Chennimalai facility.',
      },
    ],
  },
];

const FAQs = () => {
  const [expanded, setExpanded] = useState('panel-0-0');

  const handleChange = (panelId) => (event, isExpanded) => {
    setExpanded(isExpanded ? panelId : false);
  };

  return (
    <Box sx={{ backgroundColor: '#F8F9FA', py: { xs: 4, md: 6 } }}>
      <Box sx={{ maxWidth: '1000px', mx: 'auto', px: { xs: 2, md: 4 } }}>
        {/* ================= HEADER ================= */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Typography
            sx={{
              color: '#F5A000',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.5px',
              mb: 1.5,
            }}
          >
            KIPIPL KNOWLEDGE – FAQs
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '30px', md: '40px' },
              lineHeight: 1.2,
              color: '#111111',
              mb: 2,
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Typography
            sx={{
              color: '#5A5A5A',
              fontSize: { xs: '14px', md: '15px' },
              lineHeight: '26px',
              maxWidth: '640px',
              mx: 'auto',
            }}
          >
            Answers to common questions about our products, quality standards,
            delivery, and how to get started with KIPIPL.
          </Typography>
        </Box>

        {/* ================= FAQ GROUPS ================= */}
        {faqGroups.map((group, gi) => (
          <Box key={gi} sx={{ mb: { xs: 4, md: 5 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 2 }}>
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: '10px',
                  backgroundColor: '#FFF4DE',
                  color: '#F5A000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {group.icon}
              </Box>
              <Typography sx={{ fontWeight: 700, fontSize: '17px', color: '#111' }}>
                {group.category}
              </Typography>
            </Box>

            {group.questions.map((item, qi) => {
              const panelId = `panel-${gi}-${qi}`;
              return (
                <Accordion
                  key={panelId}
                  expanded={expanded === panelId}
                  onChange={handleChange(panelId)}
                  disableGutters
                  elevation={0}
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: '12px !important',
                    mb: 1.5,
                    boxShadow: '0px 2px 10px rgba(0,0,0,0.05)',
                    '&:before': { display: 'none' },
                    overflow: 'hidden',
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{ color: expanded === panelId ? '#F5A000' : '#9A9A9A' }}
                      />
                    }
                    sx={{
                      px: 2.5,
                      py: 0.5,
                      '& .MuiAccordionSummary-content': { my: 1.4 },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: '14.5px',
                        color: expanded === panelId ? '#F5A000' : '#1A1A1A',
                      }}
                    >
                      {item.q}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 2.5, pt: 0, pb: 2.5 }}>
                    <Typography sx={{ fontSize: '13.5px', color: '#5A5A5A', lineHeight: 1.6 }}>
                      {item.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        ))}

        {/* ================= STILL HAVE QUESTIONS ================= */}
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            p: { xs: 3, md: 4 },
            textAlign: 'center',
            boxShadow: '0px 3px 14px rgba(0,0,0,0.05)',
            mt: { xs: 4, md: 5 },
          }}
        >
          <Chip
            icon={<HelpOutlineOutlinedIcon sx={{ color: '#F5A000 !important' }} />}
            label="Still have questions?"
            sx={{
              backgroundColor: '#FFF4DE',
              color: '#F5A000',
              fontWeight: 700,
              mb: 1.5,
              px: 1,
            }}
          />
          <Typography sx={{ fontSize: '14px', color: '#5A5A5A' }}>
            Reach out to our team on WhatsApp or through the Contact Us page and
            we'll be happy to help.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQs;