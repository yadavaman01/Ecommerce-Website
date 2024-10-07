// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLess from '@mui/icons-material/ExpandLess';

// export default function ControlledAccordion() {
//   const [expanded, setExpanded] = React.useState(null);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : null);
//   };

//   return (
//     <div style={{backgroundColor:"white"}}>
//       <div>

//       <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{padding:"2rem"}}>
//         <AccordionSummary
//           expandIcon={expanded === 'panel1' ? <ExpandLess /> : <ExpandMoreIcon />}
//           aria-controls="panel1-content"
//           id="panel1-header"
          
//         >
//           <Typography sx={{fontSize:"large", fontWeight:"bold", color:"#cdcdcd" , "&:hover": {color: "black"}}}>How do I join the affiliate program?</Typography>
//         </AccordionSummary>
//         <AccordionDetails >
//           <Typography sx={{opacity:"0.7"}}>
//           Simply sign up through our affiliate program page by filling out the registration form. Once approved,<br />
//           you'll receive a unique affiliate link to start promoting our products.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{padding:"2rem"}}>
//         <AccordionSummary
//           expandIcon={expanded === 'panel2' ? <ExpandLess /> : <ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography sx={{fontSize:"large", fontWeight:"bold",color:"#cdcdcd"}}>What commission rates do you offer?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography sx={{opacity:"0.7"}}>
//             We offer over 400 unique products to support a wide variety of wellness needs. The majority of these products are  <br />available through our website, however there are some that are available exclusively through our retailer partners.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>

//       </div>
        
//     </div>
//   );
// }


// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLess from '@mui/icons-material/ExpandLess';

// export default function ControlledAccordion() {
//   const [expanded, setExpanded] = React.useState(null);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : null);
//   };

//   return (
//     <div style={{ backgroundColor: "white" }}>
//       <div>
//         <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ padding: "2rem" }}>
//           <AccordionSummary
//             expandIcon={<ExpandLess />}
//             aria-controls="panel1-content"
//             id="panel1-header"
//           >
//             <Typography sx={{ fontSize: "large", fontWeight: "bold", color: "#cdcdcd", "&:hover": { color: "black" } }}>
//               How do I join the affiliate program?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography sx={{ opacity: "0.7" }}>
//               Simply sign up through our affiliate program page by filling out the registration form. Once approved,<br />
//               you'll receive a unique affiliate link to start promoting our products.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ padding: "2rem" }}>
//           <AccordionSummary
//             expandIcon={<ExpandLess />}
//             aria-controls="panel2-content"
//             id="panel2-header"
//           >
//             <Typography sx={{ fontSize: "large", fontWeight: "bold", color: "#cdcdcd" }}>
//               What commission rates do you offer?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography sx={{ opacity: "0.7" }}>
//               We offer over 400 unique products to support a wide variety of wellness needs. The majority of these products are  <br />
//               available through our website, however there are some that are available exclusively through our retailer partners.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </div>
//     </div>
//   );
// }

// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLess from '@mui/icons-material/ExpandLess';

// export default function ControlledAccordion() {
//   const [expanded, setExpanded] = React.useState(null);
//   const [hovered, setHovered] = React.useState(null);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : null);
//   };

//   const handleMouseOver = (panel) => {
//     setHovered(panel);
//   };

//   const handleMouseOut = () => {
//     setHovered(null);
//   };

//   return (
//     <div style={{ backgroundColor: "white" }}>
//       <div>
//         <Accordion
//           expanded={expanded === 'panel1'}
//           onChange={handleChange('panel1')}
//           sx={{ padding: "2rem" }}
//           onMouseOver={() => handleMouseOver('panel1')}
//           onMouseOut={handleMouseOut}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandLess />}
//             aria-controls="panel1-content"
//             id="panel1-header"
//           >
//             <Typography
//               sx={{
//                 fontSize: "large",
//                 fontWeight: "bold",
//                 color: hovered === 'panel1' ? "black" : "#cdcdcd",
//               }}
//             >
//               How do I join the affiliate program?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography sx={{ opacity: "0.7" }}>
//               Simply sign up through our affiliate program page by filling out the registration form. Once approved,<br />
//               you'll receive a unique affiliate link to start promoting our products.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion
//           expanded={expanded === 'panel2'}
//           onChange={handleChange('panel2')}
//           sx={{ padding: "2rem" }}
//           onMouseOver={() => handleMouseOver('panel2')}
//           onMouseOut={handleMouseOut}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandLess />}
//             aria-controls="panel2-content"
//             id="panel2-header"
//           >
//             <Typography
//               sx={{
//                 fontSize: "large",
//                 fontWeight: "bold",
//                 color: hovered === 'panel2' ? "black" : "#cdcdcd",
//               }}
//             >
//               What commission rates do you offer?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography sx={{ opacity: "0.7" }}>
//               We offer over 400 unique products to support a wide variety of wellness needs. The majority of these products are  <br />
//               available through our website, however there are some that are available exclusively through our retailer partners.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </div>
//     </div>
//   );
// }

// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLess from '@mui/icons-material/ExpandLess';

// export default function ControlledAccordion() {
//   const [expanded, setExpanded] = React.useState(null);
//   const [hovered, setHovered] = React.useState(null);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : null);
//   };

//   const handleMouseOver = (panel) => {
//     setHovered(panel);
//   };

//   const handleMouseOut = () => {
//     setHovered(null);
//   };

//   return (
//     <div style={{ backgroundColor: "white" }}>
//       <div>
//         <Accordion
//           expanded={expanded === 'panel1'}
//           onChange={handleChange('panel1')}
//           sx={{ padding: "2rem" }}
//           onMouseOver={() => handleMouseOver('panel1')}
//           onMouseOut={handleMouseOut}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandLess />}
//             aria-controls="panel1-content"
//             id="panel1-header"
//           >
//             <Typography
//               sx={{
//                 fontSize: "large",
//                 fontWeight: "bold",
//                 color: hovered === 'panel1' ? "black" : "#cdcdcd",
//               }}
//             >
//               How do I join the affiliate program?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography sx={{ opacity: "0.7" }}>
//               Simply sign up through our affiliate program page by filling out the registration form. Once approved,<br />
//               you'll receive a unique affiliate link to start promoting our products.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion
//           expanded={expanded === 'panel2'}
//           onChange={handleChange('panel2')}
//           sx={{ padding: "2rem" }}
//           onMouseOver={() => handleMouseOver('panel2')}
//           onMouseOut={handleMouseOut}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandLess />}
//             aria-controls="panel2-content"
//             id="panel2-header"
//           >
//             <Typography
//               sx={{
//                 fontSize: "large",
//                 fontWeight: "bold",
//                 color: hovered === 'panel2' ? "black" : "#cdcdcd",
//               }}
//             >
//               What commission rates do you offer?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography sx={{ opacity: "0.7" }}>
//               We offer over 400 unique products to support a wide variety of wellness needs. The majority of these products are  <br />
//               available through our website, however there are some that are available exclusively through our retailer partners.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </div>
//     </div>
//   );
// }


// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLess from '@mui/icons-material/ExpandLess';

// export default function ControlledAccordion() {
//   const [expanded, setExpanded] = React.useState(null);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : null);
//   };

//   return (
//     <div style={{ backgroundColor: "white" }}>
//       <div>
//         <Accordion
//           expanded={expanded === 'panel1'}
//           onChange={handleChange('panel1')}
//           sx={{ padding: "2rem" }}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandLess />}
//             aria-controls="panel1-content"
//             id="panel1-header"
//           >
//             <Typography
//               sx={{
//                 fontSize: "large",
//                 fontWeight: "bold",
//                 color: expanded === 'panel1' ? "black" : "#cdcdcd",
//               }}
//             >
//               How do I join the affiliate program?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography sx={{ opacity: "0.7" }}>
//               Simply sign up through our affiliate program page by filling out the registration form. Once approved,<br />
//               you'll receive a unique affiliate link to start promoting our products.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion
//           expanded={expanded === 'panel2'}
//           onChange={handleChange('panel2')}
//           sx={{ padding: "2rem" }}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandLess />}
//             aria-controls="panel2-content"
//             id="panel2-header"
//           >
//             <Typography
//               sx={{
//                 fontSize: "large",
//                 fontWeight: "bold",
//                 color: expanded === 'panel2' ? "black" : "#cdcdcd",
//               }}
//             >
//               What commission rates do you offer?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography sx={{ opacity: "0.7" }}>
//               We offer over 400 unique products to support a wide variety of wellness needs. The majority of these products are  <br />
//               available through our website, however there are some that are available exclusively through our retailer partners.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion
//           expanded={expanded === 'panel3'}
//           onChange={handleChange('panel3')}
//           sx={{ padding: "2rem" }}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandLess />}
//             aria-controls="panel3-content"
//             id="panel3-header"
//           >
//             <Typography
//               sx={{
//                 fontSize: "large",
//                 fontWeight: "bold",
//                 color: expanded === 'panel3' ? "black" : "#cdcdcd",
//               }}
//             >
//               How and when do I get paid?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography sx={{ opacity: "0.7" }}>
//             For over 50 years, we have set a standard for trust, safety, and efficacy, and these values have never been more relevant. <br />During this pandemic, we remain committed to producing the highest quality products possible, from ingredient sourcing <br /> to rigorous testing and approvals, before they make their way to you and your family.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion
//           expanded={expanded === 'panel4'}
//           onChange={handleChange('panel4')}
//           sx={{ padding: "2rem" }}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandLess />}
//             aria-controls="panel4-content"
//             id="panel4-header"
//           >
//             <Typography
//               sx={{
//                 fontSize: "large",
//                 fontWeight: "bold",
//                 color: expanded === 'panel4' ? "black" : "#cdcdcd",
//               }}
//             >
//               What marketing resources are available to affiliates?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography sx={{ opacity: "0.7" }}>
//              Our headquarters is in Green Bay, WI. We also have an office in Minneapolis, and a distribution center in Green Bay, WI.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>


//       </div>
//     </div>
//   );
// }

// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLess from '@mui/icons-material/ExpandLess';

// export default function ControlledAccordion() {
//   const [expanded, setExpanded] = React.useState(null);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : null);
//   };

//   const panels = [
//     {
//       id: 'panel1',
//       title: 'How do I join the affiliate program?',
//       content: 'Simply sign up through our affiliate program page by filling out the registration form. Once approved, you\'ll receive a unique affiliate link to start promoting our products.',
//     },
//     {
//       id: 'panel2',
//       title: 'What commission rates do you offer?',
//       content: 'We offer over 400 unique products to support a wide variety of wellness needs. The majority of these products are available through our website, however there are some that are available exclusively through our retailer partners.',
//     },
//     {
//       id: 'panel3',
//       title: 'How and when do I get paid?',
//       content: 'For over 50 years, we have set a standard for trust, safety, and efficacy, and these values have never been more relevant. During this pandemic, we remain committed to producing the highest quality products possible, from ingredient sourcing to rigorous testing and approvals, before they make their way to you and your family.',
//     },
//     {
//       id: 'panel4',
//       title: 'What marketing resources are available to affiliates?',
//       content: 'Our headquarters is in Green Bay, WI. We also have an office in Minneapolis, and a distribution center in Green Bay, WI.',
//     },
//   ];

//   return (
//     <div style={{ backgroundColor: "white" }}>
//       <div>
//         {panels.map((panel) => (
//           <Accordion
//             key={panel.id}
//             expanded={expanded === panel.id}
//             onChange={handleChange(panel.id)}
//             sx={{ padding: "2rem" }}
//           >
//             <AccordionSummary
//               expandIcon={<ExpandLess />}
//               aria-controls={`${panel.id}-content`}
//               id={`${panel.id}-header`}
//               sx={{
//                 "&:hover": {
//                   "& .MuiTypography-root": {
//                     color: "black",
//                   },
//                 },
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: "large",
//                   fontWeight: "bold",
//                   color: expanded === panel.id ? "black" : "#cdcdcd",
//                 }}
//               >
//                 {panel.title}
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography sx={{ opacity: "0.7" }}>{panel.content}</Typography>
//             </AccordionDetails>
//           </Accordion>
//         ))}
//       </div>
//     </div>
//   );
// }


// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLess from '@mui/icons-material/ExpandLess';

// export default function ControlledAccordion() {
//   const [expanded, setExpanded] = React.useState(null);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : null);
//   };

//   const panels = [
//     {
//       id: 'panel1',
//       title: 'How do I join the affiliate program?',
//       content: 'Simply sign up through our affiliate program page by filling out the registration form. Once approved, you\'ll receive a unique affiliate link to start promoting our products.',
//     },
//     {
//       id: 'panel2',
//       title: 'What commission rates do you offer?',
//       content: 'We offer over 400 unique products to support a wide variety of wellness needs. The majority of these products are available through our website, however there are some that are available exclusively through our retailer partners.',
//     },
//     {
//       id: 'panel3',
//       title: 'How and when do I get paid?',
//       content: 'For over 50 years, we have set a standard for trust, safety, and efficacy, and these values have never been more relevant. During this pandemic, we remain committed to producing the highest quality products possible, from ingredient sourcing to rigorous testing and approvals, before they make their way to you and your family.',
//     },
//     {
//       id: 'panel4',
//       title: 'What marketing resources are available to affiliates?',
//       content: 'Our headquarters is in Green Bay, WI. We also have an office in Minneapolis, and a distribution center in Green Bay, WI.',
//     },
//   ];

//   return (
//     <div style={{ backgroundColor: "white" }}>
//       <div>
//         {panels.map((panel) => (
//           <Accordion
//             key={panel.id}
//             expanded={expanded === panel.id}
//             onChange={handleChange(panel.id)}
//             sx={{ padding: "2rem" }}
//           >
//             <AccordionSummary
//               expandIcon={expanded === panel.id ? <ExpandMoreIcon /> : <ExpandLess />}
//               aria-controls={`${panel.id}-content`}
//               id={`${panel.id}-header`}
//               sx={{
//                 "&:hover": {
//                   "& .MuiTypography-root": {
//                     color: "black",
//                   },
//                 },
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: "large",
//                   fontWeight: "bold",
//                   color: expanded === panel.id ? "black" : "#cdcdcd",
//                 }}
//               >
//                 {panel.title}
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography sx={{ opacity: "0.7" }}>{panel.content}</Typography>
//             </AccordionDetails>
//           </Accordion>
//         ))}
//       </div>
//     </div>
//   );
// }


// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLess from '@mui/icons-material/ExpandLess';

// export default function ControlledAccordion() {
//   const [expanded, setExpanded] = React.useState(null);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : null);
//   };

//   const panels = [
//     {
//       id: 'panel1',
//       title: 'How do I join the affiliate program?',
//       content: 'Simply sign up through our affiliate program page by filling out the registration form. Once approved, you\'ll receive a unique affiliate link to start promoting our products.',
//     },
//     {
//       id: 'panel2',
//       title: 'What commission rates do you offer?',
//       content: 'We offer over 400 unique products to support a wide variety of wellness needs. The majority of these products are available through our website, however there are some that are available exclusively through our retailer partners.',
//     },
//     {
//       id: 'panel3',
//       title: 'How and when do I get paid?',
//       content: 'For over 50 years, we have set a standard for trust, safety, and efficacy, and these values have never been more relevant. During this pandemic, we remain committed to producing the highest quality products possible, from ingredient sourcing to rigorous testing and approvals, before they make their way to you and your family.',
//     },
//     {
//       id: 'panel4',
//       title: 'What marketing resources are available to affiliates?',
//       content: 'Our headquarters is in Green Bay, WI. We also have an office in Minneapolis, and a distribution center in Green Bay, WI.',
//     },
//   ];

//   return (
//     <div style={{ backgroundColor: "white" }}>
//       <div>
//         {panels.map((panel) => (
//           <Accordion
//             key={panel.id}
//             expanded={expanded === panel.id}
//             onChange={handleChange(panel.id)}
//             sx={{ padding: "2rem" }}
//           >
//             <AccordionSummary
//               expandIcon={expanded === panel.id ? <ExpandLess /> : <ExpandMoreIcon />}
//               aria-controls={`${panel.id}-content`}
//               id={`${panel.id}-header`}
//               sx={{
//                 "&:hover": {
//                   "& .MuiTypography-root": {
//                     color: "black",
//                   },
//                 },
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: "large",
//                   fontWeight: "bold",
//                   color: expanded === panel.id ? "black" : "#cdcdcd",
//                 }}
//               >
//                 {panel.title}
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography sx={{ opacity: "0.7" }}>{panel.content}</Typography>
//             </AccordionDetails>
//           </Accordion>
//         ))}
//       </div>
//     </div>
//   );
// }


import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

export default function ControlledAccordion() {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <div>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          sx={{ padding: "2rem" }}
        >
          <AccordionSummary
            expandIcon={<div
              style={{
                backgroundColor: expanded === 'panel1' ? '#e0e1ff' : 'white',
                padding: '5px',
                borderRadius: '50%',
                display:"flex",
                '&:hover': {
                  backgroundColor: '#e0e1ff',
                },
              }}
            >
              <ExpandLess />
            </div>
          }
            
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              "&:hover": {
                "& .MuiTypography-root": {
                  color: "black",
                },
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "large",
                fontWeight: "bold",
                color: expanded === 'panel1' ? "black" : "#cdcdcd",
              }}
            >
              How do I join the affiliate program?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ opacity: "0.7" }}>
              Simply sign up through our affiliate program page by filling out the registration form. Once approved,<br />
              you'll receive a unique affiliate link to start promoting our products.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          sx={{ padding: "2rem" }}
        >
          <AccordionSummary
            expandIcon={<div
              style={{
                backgroundColor: expanded === 'panel2' ? '#e0e1ff' : 'white',
                padding: '5px',
                borderRadius: '50%',
                display:"flex",
                '&:hover': {
                  backgroundColor: '#e0e1ff',
                },
              }}
            >
              <ExpandLess />
            </div>}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{
              "&:hover": {
                "& .MuiTypography-root": {
                  color: "black",
                },
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "large",
                fontWeight: "bold",
                color: expanded === 'panel2' ? "black" : "#cdcdcd",
              }}
            >
              What commission rates do you offer?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ opacity: "0.7" }}>
              We offer over 400 unique products to support a wide variety of wellness needs. The majority of these products are  <br />
              available through our website, however there are some that are available exclusively through our retailer partners.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          sx={{ padding: "2rem" }}
        >
          <AccordionSummary
            expandIcon={<div
              style={{
                backgroundColor: expanded === 'panel3' ? '#e0e1ff' : 'white',
                padding: '5px',
                borderRadius: '50%',
                display:"flex",
                '&:hover': {
                  backgroundColor: '#e0e1ff',
                },
              }}
            >
              <ExpandLess />
            </div>}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{
              "&:hover": {
                "& .MuiTypography-root": {
                  color: "black",
                },
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "large",
                fontWeight: "bold",
                color: expanded === 'panel3' ? "black" : "#cdcdcd",
              }}
            >
              How and when do I get paid?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ opacity: "0.7" }}>
            For over 50 years, we have set a standard for trust, safety, and efficacy, and these values have never been more relevant. <br />During this pandemic, we remain committed to producing the highest quality products possible, from ingredient sourcing <br /> to rigorous testing and approvals, before they make their way to you and your family.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
          sx={{ padding: "2rem" }}
        >
          <AccordionSummary
            expandIcon={<div
              style={{
                backgroundColor: expanded === 'panel4' ? '#e0e1ff' : 'white',
                padding: '5px',
                borderRadius: '50%',
                display:"flex",
                '&:hover': {
                  backgroundColor: '#e0e1ff',
                },
              }}
            >
              <ExpandLess />
            </div>}
            aria-controls="panel4-content"
            id="panel4-header"
            sx={{
              "&:hover": {
                "& .MuiTypography-root": {
                  color: "black",
                },
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "large",
                fontWeight: "bold",
                color: expanded === 'panel4' ? "black" : "#cdcdcd",
              }}
            >
              What marketing resources are available to affiliates?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ opacity: "0.7" }}>
            For over 50 years, we have set a standard for trust, safety, and efficacy, and these values have never been more relevant. <br />During this pandemic, we remain committed to producing the highest quality products possible, from ingredient sourcing <br /> to rigorous testing and approvals, before they make their way to you and your family.
            </Typography>
          </AccordionDetails>
        </Accordion>


      </div>
     </div>
  );
}