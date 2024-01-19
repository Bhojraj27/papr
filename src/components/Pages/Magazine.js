import { Grid, makeStyles, Box } from "@material-ui/core";
import React, { useEffect, useState ,useMemo} from "react";
import { Cursor } from 'react-simple-typewriter';


const useStyles = makeStyles((theme) => ({
  magazin: {
    width: "100%",
    backgroundColor: "#E2E4F1",
    marginTop:"90px",
    marginLeft:0,
    marginRight:0.
  },
  leftMagazine: {
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    paddingTop:"30px",
    '@media(max-width:960px)':{
      alignItems:"center",
    },
    marginBottom:"10px"
  },
  leftMagazineheader1: {
   lineHeight:"34px",
   fontSize:"42px",
   color:"#121213",
   fontFamily:"poppins",
   fontWeight:600,
   '@media(max-width:670px)':{
      fontSize:"28px"
   },
   '@media(min-width:671px) and (max-width:768px)':{
    fontSize:"36px"
 },
 '@media(max-width:960px)':{
  paddingTop:"70px"
},
  },
  flexbox: {
    display: "flex",
    flexDirection: "column",
    paddingLeft:"0px",
    gap:"22px",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      padding:0,
    },
 
   '@media(min-width:1200px)':{
    paddingLeft:"11% ",
 },
  },
  leftMagazineheader2: {
    fontSize: "18px",
    color: "rgb(73, 78, 81)",
    '@media(max-width:768px)':{
      fontSize: "16px",
   },
  },
  leftMagazineheader3: {
    fontSize: "16px",
    color: "rgb(73, 78, 81)",
    '@media(max-width:768px)':{
      textAlign:"center",
      fontSize: "14px",
   },
  },
  explorebtn: {
    backgroundColor: "#ff2c54 ",
    border:"none",
    width:"fit-content",
    color:"white",
    lineHeight:"16px",
    padding:"14px 30px",
    fontSize:"16px",
  },
  footer: {
    backgroundColor: "black",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContent: {
    width: "88vw",
    display: "flex",
    alignItems: "center",
    padding:"30px 0px",
    gap:"10px",
    '@media(max-width:768px)':{
      justifyContent:"center",
   },
   '@media(min-width:960px) and (max-width:1200px)':{
    width:"98vw",
 },
    "& span": {
     color:"white",
     fontSize:"18px",
     fontFamily:"Roboto",
    },
  },
  typingAnimation: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    borderRight: "0.15em solid",
    animation: "$typing 3s steps(40, end) linear",
  },
  "@keyframes typing": {
    from: { width: 0 },
    to: { width: "100%" },
  },
}));

const Magazine = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  const words = useMemo(() => ['News', 'Magazine'], []);

  useEffect(() => {
    const currentWord = words[index];

    let typingSpeed = 150; 
    if (isDeleting) {
      typingSpeed = 150; 
    }

    const interval = setInterval(() => {
      if (!isDeleting) {
        setDisplayedText((prevText) => {
          const nextCharacter = currentWord.charAt(prevText.length);
          if (!nextCharacter) {
            setIsDeleting(true);
          }
          return prevText + nextCharacter;
        });
      } else {
        setDisplayedText((prevText) => {
          const nextCharacter = prevText.slice(0, -1);
          if (!nextCharacter) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
          return nextCharacter;
        });
      }
    }, typingSpeed);

    return () => clearInterval(interval); 
  }, [index, isDeleting, words]);

  return (
    <>
      <Grid container spacing={3} className={classes.magazin}>
        <Grid item xs={12} sm={12} md={6} className={classes.leftMagazine}>
          <div className={classes.flexbox}>
          <h1 className={classes.leftMagazineheader1}>
        React Js for &nbsp;
        <span>{displayedText}</span>
        <Cursor />
      </h1>
            <span className={classes.leftMagazineheader2}>For Premium News and Magazine Brands</span>
            <div className={classes.leftMagazineheader3}>
              Papr is a premium and trendy News, Magazine and Blog React Next JS
              Template with super flexible and fully responsive design. Explore
              available templates to find your perfect fit for your brand!
            </div>
            <button className={classes.explorebtn} >Explore Templates</button>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} >
          <img src="images/banner-img.png" alt="" width="100%" height="100%"/>
        </Grid>
      </Grid>
      <Box className={classes.footer}>
        <div className={classes.footerContent}>
          <img src="images/wordpress.png" alt="wordpress" />
          <span>WordPress Version Available!</span>
        </div>
        
      </Box>
    </>
  );
};

export default Magazine;
