import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import CodeIcon from '@material-ui/icons/Code';
// import Button from '@material-ui/core/Button';

// import Chat from './Chat'
// import CodeEditor from './CodeEditor'

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" color="inherit">
                Code and Collaborate 
                </Typography>
                <CodeIcon fontSize="large"/>
            </Toolbar>
            {/* <section className={classes.rightToolbar}>
            <Button variant="contained" color="primary">
                Primary
            </Button>
        </section> */}
            
        </AppBar>
        </div>
    )
}
export default NavBar;

// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import SaveIcon from "@material-ui/icons/Save";
// import EditIcon from "@material-ui/icons/Edit";

// const useStyles = makeStyles({
//   // This group of buttons will be aligned to the right
//   rightToolbar: {
//     marginLeft: "auto",
//     marginRight: -12
//   },
//   menuButton: {
//     marginRight: 16,
//     marginLeft: -12
//   }
// })

// export default function Demo() {
//   const classes = useStyles()
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton
//           className={classes.menuButton}
//           aria-label="Menu"
//           color="inherit"
//         >
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="title" color="inherit">
//           Title
//         </Typography>

//         <section className={classes.rightToolbar}>
//           <IconButton color="inherit" aria-label="Edit">
//             <EditIcon />
//           </IconButton>
//           <IconButton color="inherit" aria-label="Save">
//             <SaveIcon />
//           </IconButton>
//           <IconButton color="inherit" aria-label="More Options">
//             <MoreVertIcon />
//           </IconButton>
        
//         </section>
//       </Toolbar>
//     </AppBar>
//   );
// }

// Demo.propTypes = {
//   classes: PropTypes.object.isRequired
// };
// import React from 'react';
// import {Navbar, Nav, NavDropdown} from 'react-bootstrap'


// function navbars(){
//     return(
//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="mr-auto">
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//             <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//             </NavDropdown>
//             </Nav>
//             <Nav>
//             <Nav.Link href="#deets">More deets</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//                 Dank memes
//             </Nav.Link>
//             </Nav>
//         </Navbar.Collapse>
//         </Navbar>
//     )
// }

// export default navbars;



// import React from "react";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import Button from "@material-ui/core/Button";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { withRouter } from "react-router-dom";
// import CodeIcon from '@material-ui/icons/Code';
// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     [theme.breakpoints.down("xs")]: {
//       flexGrow: 1
//     }
//   },
//   headerOptions: {
//     display: "flex",
//     flex: 1,
//     justifyContent: "space-evenly"
//   }
// }));

// const Header = props => {
//   const { history } = props;
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const theme = useTheme();

//   const handleButtonClick = pageURL => {
//     history.push(pageURL);
//   };


//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//             Code and Collaborate 
//           </Typography>
//           <CodeIcon/>
//             <div className={classes.headerOptions}>
//               <Button
//                 variant="contained"
//                 onClick={() => handleButtonClick("/Home")}
//               >
//                 HOME
//               </Button>
//               <Button
//                 variant="contained"
//                 onClick={() => handleButtonClick("/")}
//               >
//                 CODE
//               </Button>
              
//             </div>
          
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };

// export default withRouter(Header);
