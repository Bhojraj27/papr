import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  templatesroot:{
    display:"flex",
    flexDirection:"column-reverse",
    gap:"14px",
    marginTop:"80px",
    '@media(max-width:768px)':{
    gap:"2px",
    marginTop:"40px",
  }
  },
  imageContainer: {
    width: '100%',
    maxHeight: "400px",
    overflow: 'hidden',
    boxShadow:"0px 2px 4px rgba(0,0,0,0.3)",
    cursor:"pointer",
  },
  image: {
    transition: 'transform 4s ease-in-out',
  },
  scrollUp: {
    transform: 'translateY(-60%)',
  },
  flexboxtemplate:{
    display:"flex",
    alignItems:"center",
    paddingTop:"10px",
    justifyContent:"center",
    transition:"all 1s",
    fontSize:"20px",
    fontWeight:600,
    color:"black",
    cursor:"pointer",
    '&:hover':{
      color:"#ff2c54",
      textDecoration:"underline"
    },
  },
  topoftemplates:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '@media(max-width:600px)':{
        textAlign:"center"
    }
  },
  templateshead: {
    color:"rgb(18, 18, 19)",
    fontFamily:"Poppins",
    lineHeight:"42px",
    fontWeight:"600",
    fontSize:"32px",
    '@media(max-width:768px)':{
      fontSize:"24px",
  }
  },
  templatespara:{
    color:"#494e51",
    fontSize:"17px",
    fontFamily:"roboto",
    lineHeight:"28px",
    fontWeight:400,
    '@media(max-width:768px)':{
      fontSize:"14px",
  }
  },


}));

const imageList = [
  {
    id: 1,
    src:'images/demo1.jpg',
    alt: 'Image 1',
    title: 'Default',
  },
  {
    id: 2,
    src:'images/demo2.jpg',   
    alt: 'Image 2',
    title: 'Magazine',
  },
  {
    id: 3,
    src: 'images/demo3.jpg',
    alt: 'Image 3',
    title: 'Illustrations',
  },
  {
    id: 4,
    src: 'images/demo4.png',
    alt: 'Image 4',
    title: 'Fashion',
  },
  {
    id: 5,
    src: 'images/demo5.jpg',
    alt: 'Image 5',
    title: 'Blog',
  },
  {
    id: 6,
    src: 'images/comingsoon.jpg',
    alt: 'Image 6',
    title: 'Comming Soon',
  },
];

const Templates = () => {
  const classes = useStyles();
  const imageRefs = useRef([]);

  const handleHover = (index) => {
    if (index < 4) {
      imageRefs.current[index].classList.add(classes.scrollUp);
    }
  };

  const handleHoverEnd = (index) => {
    if (index < 4) {
      imageRefs.current[index].classList.remove(classes.scrollUp);
    }
  };

  return (
    <>
      <Box className={classes.templatesroot} id='templates'>
        <Grid container spacing={4}>
          {imageList.map((image, index) => (
            <Grid item xs={12} sm={12} md={6} key={image.id}>
              <div className={classes.imageContainer}>
                <img
                  ref={(el) => (imageRefs.current[index] = el)}
                  className={classes.image}
                  width="100%"
                  src={image.src}
                  alt={image.alt}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleHoverEnd(index)}
                />
              </div>
              <h3 className={classes.flexboxtemplate}>{image.title}</h3>
            </Grid>
          ))}
        </Grid>
        <div className={classes.topoftemplates}>
        <p className={classes.templatespara}>
            Get a quick overview of our templates that will match your brand style.
          </p>
        </div>
        
          <div className={classes.topoftemplates}>
          <h1 className={classes.templateshead}>Our Templates At A Glace</h1>
          
        </div>
      </Box>
    </>
  );
};

export default Templates;