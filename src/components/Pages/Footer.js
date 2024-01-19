import { Box, Button, makeStyles } from '@material-ui/core'
import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({
  footerbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121213',
    marginTop:"80px",
    minHeight:"137px",
    padding:"20px 0",
    width: '100%',

  },
  footercontent: {
    width: '93%',
    display: 'flex',
    color:"white",
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
  leftfooter: {
    color: 'white',
  },
  footerbutton: {
    backgroundColor: '#ff2c54',
    width:"120px",
    border:"none",
    borderRadius:0,
    '&:hover': {
      backgroundColor: '#ff2c54', 
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      width:"100%"
    },
  },
  footheading:{
    fontFamily:"poppins",
    fontSize:"24px",
  },
  footpara:{
    fontSize:"16px"
  },
  a:{
    color:"white",
    textTransform:"capitalize",
    fontSize:"17px",
    fontWeight:400,
  },
  lastfooter:{
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
    marginTop:"40px",
    marginBottom:"40px",
    fontSize:"16px",
    color :"rgb(73, 78, 81)",
  },
  theme:{
    textDecoration:"underline",
    color:"white",
    '&:hover':{
      color:"#ff2c54"
    }
  },
  fonts:{
    display:"flex",
    gap:"20px",
  },
font:{
  cursor:"pointer",
  '&:hover':{
    color:"#ff2c54"
  },
},
 
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.footerbox}>
          <div className={classes.footercontent}>
            <div>
              <h2 className={classes.footheading}>Impressed? Let's get it started today!</h2>
              <p className={classes.footpara}>Missing something? Just tell us what you need by emailing at &nbsp;
                <a href="mailto:themes@axilweb.com" className={classes.theme}>themes@axilweb.com</a>
              </p>
            </div>
            <Button className={classes.footerbutton}>
                <div className={classes.a}>
                  Buy Now
                </div>
            </Button>
          </div>
      </Box>
      <Box className={classes.lastfooter}>
            <p className={classes.p1}>© 2022 All rights reserved by Axilthemes</p>
            <p>More Templates . Privacy Policy</p>
            <p className={classes.fonts}>
                <FacebookIcon fontSize='large' className={classes.font}/>
                <LanguageIcon fontSize='large' className={classes.font}/>
            </p>
      </Box>
    </>
  )
}

export default Footer
