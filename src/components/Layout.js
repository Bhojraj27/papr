import React from 'react'
import Templates from './Pages/Templates'
import WhyUs from './Pages/WhyUs'
import Features from './Pages/Features'
import Footer from './Pages/Footer'
import Header from './Pages/Header'
import Magazine from './Pages/Magazine'
import { Button, ThemeProvider, createTheme } from '@material-ui/core'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LoginForm from './Form/LoginForm'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Magazine />
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <div style={{
            width: "87%", '@media(max-width:1200px)': {
              width: "100%"
            }
          }}>
            <Templates />
            <Features />
            <WhyUs />
            <LoginForm />
            <Footer />
          </div>
        </div>
        <Button style={{
          position: "fixed", bottom: "30px", right: "20px",
          borderRadius: "0px",
          backgroundColor: "#ff2c54",
          width: "fit-content",
          display: "inline-block",
          fontSize: "17px",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "8px 24px",
          color: "white",
          fontWeight: 400,
          textTransform: "capitalize",
          transition: "background-position 0.3s ease",
          "&:hover": {
            backgroundColor: "#ff2c54",
            color: "white",
          },

        }}>
          <ShoppingCartIcon />
          Buy Now
        </Button>
      </>
    </ThemeProvider>
  )
}

export default Layout
