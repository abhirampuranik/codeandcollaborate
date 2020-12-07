import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CodeIcon from '@material-ui/icons/Code';


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
        </AppBar>
        </div>
    )
}
export default NavBar;

