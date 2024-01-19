import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Cached,} from '@material-ui/icons';
import CreateIcon from '@material-ui/icons/Create';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import FlagIcon from '@material-ui/icons/Flag';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const useStyles = makeStyles((theme) => ({
  featuresroot: {
    backgroundColor:"white !important",
    display:"flex",
    flexDirection:"column",
    gap:"20px",
    marginTop:"80px",
  },
  topoffeatures: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap:"10px",
    '@media(max-width:600px)':{
        textAlign:"center"
    }
  },
  featuresContainer: {
    width: '100%',
    height: '100%',
    display:"flex",
    flexDirection:"column",
    gap:"17px",
    padding:"30px",
    backgroundColor:"#f9f9f9",
    '@media(max-width:600px)':{
        textAlign:"center"
    }
  },
  featuresheading1: {
    color: '#121213',
  },
  pinkIcon: {
    color: "#ff2c54",
    height:"50px",
    "& .MuiSvgIcon-root":{
        width: "17%",
        height: "100%",
    },
  },
  featuresh1:{
    color:"rgb(18, 18, 19)",
    fontSize:"20px",
    fontWeight:"600",
    fontFamily:"poppins",
    lineHeight:"30px",
  },
  featurespara:{
    color:"#494e51",
    fontSize:"17px",
    fontFamily:"roboto",
    lineHeight:"28px",
    fontWeight:400,
    '@media(max-width:768px)':{
      fontSize:"14px",
  }
  },
  featurespapr: {
    color:"rgb(18, 18, 19)",
    fontFamily:"Poppins",
    lineHeight:"42px",
    fontWeight:"600",
    fontSize:"32px",
    '@media(max-width:768px)':{
      fontSize:"24px",
  }
  }
}));

const featureList = [
  {
    id: 1,
    logo:<img src='images/react.png' alt='' style={{width: "14%",
    backgroundColor: "#ff2c54",
    height: "90%",}}/>,
    heading: 'Powered by React',
    para: 'Our Template is Perfect for all devices. It is made by React Structure. React JS was designed to provide high performance in mind.',
  },
  {
    id: 2,
    logo: <img src='images/reusable.png' alt='' style={{width: "14%",
    backgroundColor: "#ff2c54",
    height: "90%",}}/>,
    heading: 'Reusable Components',
    para: 'All the Components of this template are reusable. We made abstrak using functional components. You can reuse any components',
  },
  {
    id: 3,
    logo: <Cached />,
    heading: 'Fast Loading Speed',
    para: 'The website speed is very important. Hence we’ve created Abstrak in a way that your website will load fast, and you will get better performance.',
  },
  {
    id: 4,
    logo: <PhoneAndroidIcon />,
    heading: 'Fully Responsive Layout',
    para: 'All the pages of this template are responsive. We used Bootstrap 4.x framework to build the website. It’s the best in class. ',
  },
  {
    id: 5,
    logo: <InsertDriveFileIcon />,
    heading: '25+ Resourceful Pages',
    para: 'All the pages are created based on real contents that you will need to run your business. Change image and text and you’re good to go! ',
  },
  {
    id: 6,
    logo: <FlagIcon />,
    heading: 'Font Awesome 5 Pro Icons',
    para: 'This template comes with licensed premium quality icons from FontAwesome. All the icons are font based and ready to match the quality of any HQ screen.',
  },
  {
    id: 7,
    logo: <img src='images/google.png' alt='' style={{width: "14%",
    backgroundColor: "#ff2c54",
    height: "90%",}}/>,
    heading: 'Google Font',
    para: 'A vast collection of Google fonts are integrated with the template. You can use any of them that goes with your branding. ',
  },
  {
    id: 8,
    logo:<img src='images/gmaps.png' alt='' style={{width: "14%",
    backgroundColor: "#ff2c54",
    height: "90%",}}/>,
    heading: 'Google Maps',
    para: 'If you have multiple locations for your business, it’s very easy to integrate them to our template. Adding/removing map location is just matter of few clicks. ',
  },
  {
    id: 9,
    logo: <CreateIcon />,
    heading: 'Lifetime Update',
    para: 'Purchase our template only once and get lifetime updates. We keep updating our products to stay up to date with latest trends and technology. ',
  },
];

const Features = () => {
  const classes = useStyles();

  return (
    <Box className={classes.featuresroot} id='features'>
      <div className={classes.topoffeatures}>
        <h1 className={classes.featurespapr}>Papr's React JS Features</h1>
        <p className={classes.featurespara}>We built Papr with your business in mind so that we can match all your expectations.</p>
      </div>

      <Grid container spacing={4}>
        {featureList.map((txt) => (
          <Grid item xs={12} sm={6} md={4} key={txt.id} >
            <div className={classes.featuresContainer}  >
              <div className={classes.pinkIcon}>{txt.logo}</div>
              <h3 className={classes.featuresh1}>{txt.heading}</h3>
              <p className={classes.featurespara}>{txt.para}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
