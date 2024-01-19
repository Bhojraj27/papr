import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";

const useStyles = makeStyles((theme) => ({
  whyusroot: {
    display: "flex",
    flexDirection: "column",
    gap: "4rem",
    paddingTop: "180px",
  },
  whyushead: {
    fontFamily: "poppins",
    color: "rgb(18,18,19)",
    fontSize: "32px",
    fontWeight: "600",
    "@media(max-width:768px)": {
      fontSize: "24px",
    },
  },
  box3para: {
    fontSize: "16px",
    lineHeight: "26px",
    textAlign: "center",
    "@media(max-width:768px)": {
      fontSize: "14px",
    },
  },
  flexproperty: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "77px",
    backgroundColor: "white",
    "@media(max-width:768px)": {
      flexWrap: "wrap",
    },
  },
  topofwhyus: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "@media(max-width:600px)": {
      textAlign: "center",
    },
  },
  heightwhyus: {
    minHeight: "240px",
    height: "100%",
    cursor: "pointer",
    "@media(max-width:600px)": {
      textAlign: "center",
      justifyContent: "center",
    },
  },
  whybox1: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "black",
  },
  whyUsOnline: {
    backgroundColor: "#ff2c54",
    color: "white",
    flexDirection: "column",
    gap: "17px",
  },
  flexiblebox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: theme.spacing(3),
    backgroundColor: "white",
    color: "black",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    gap: "17px",
    "@media(max-width:600px)": {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  image: {
    width: "10%",
    height: "10%",
  },
  share: {
    padding: theme.spacing(3),
    backgroundColor: "ffc924",
  },
  dedicated: {
    padding: theme.spacing(3),
    backgroundColor: "black",
  },
  whyuspara: {
    color: "#494e51",
    fontSize: "17px",
    fontFamily: "roboto",
    lineHeight: "28px",
    fontWeight: 400,
  },
  headingwhyus: {
    color: "#121213",
    fontFamily: "poppins",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "30px",
  },
  box3: {
    fontFamily: "poppins",
    fontSize: "24px",
    fontWeight: 400,
    "@media(max-width:768px)": {
      fontSize: "18px",
    },
  },
  headseticon: {
    height: "40px",
    width: "100px",
  },
  contentbox1: {
    display: "flex",
    flexDirection: "column",
    gap: "17px",
    padding: "13px",
  },
}));

const WhyUs = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.whyusroot} id="whyus">
        <div className={classes.topofwhyus}>
          <h2 className={classes.whyushead}>Why Choose Us?</h2>
          <p className={classes.whyuspara}>
            We prefer to focus quality over quantity. Check out what else you'll
            gain when you buy from us:
          </p>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <div
                  className={`${classes.flexproperty} ${classes.heightwhyus}`}
                >
                  <Box style={{ display: "flex" }}>
                    <img src="images/approach.png" alt="" style={{'@media(max-width:600px)': { width:"70px",height:"49px"} }} />
                  </Box>
                  <div className={classes.contentbox1}>
                    <h3 className={classes.headingwhyus}>360 Approach</h3>
                    <section className={classes.whyuspara}>
                      We build templates that are rich in content and have good
                      user interface to deliver premium user experience for your
                      customers. We equally focus on front-end and back-end so
                      that it becomes easy for you to customize the template
                      according to your business strategy and target customer
                      base.
                    </section>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={classes.heightwhyus}>
                <div className={classes.container}>
                  <img
                    src="images/share.png"
                    alt=""
                    className={classes.image}
                  />
                  <h3 className={classes.headingwhyus}>SEO & SMM Friendly</h3>
                  <p className={classes.whyuspara}>
                    Our template is SEO and SMM friendly that aligns with your
                    digital marketing strategies to bring more organic traffic
                    to your website.
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={classes.heightwhyus}>
                <div className={classes.container}>
                  <img
                    src="images/organize.png"
                    alt=""
                    className={classes.image}
                  />
                  <h3 className={classes.headingwhyus}>Organized Codes</h3>
                  <p className={classes.whyuspara}>
                    The coding structure of our items is organized so other
                    developers can easily recognize the pattern and make updates
                    as needed.
                  </p>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={12}>
                <div
                  className={`${classes.heightwhyus} ${classes.whyUsOnline} ${classes.flexiblebox} ${classes.share}`}
                >
                  <img src="images/book.png" alt="book" />
                  <h3 className={classes.box3}>Online Documentation</h3>
                  <p className={classes.box3para}>
                    Well organized and up to date
                  </p>
                  <img src="images/arrow.svg" alt="" />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={12} className={classes.heightwhyus}>
                <div
                  className={`${classes.heightwhyus} ${classes.whyUsOnline} ${classes.flexiblebox} ${classes.dedicated}`}
                >
                  <HeadsetMicOutlinedIcon className={classes.headseticon} />
                  <h3 className={classes.box3}>Dedicated Support</h3>
                  <p className={classes.box3para}>
                    Our Support is 24-hour in regular business days
                  </p>
                  <img src="images/arrow.svg" alt="" />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WhyUs;
