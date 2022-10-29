import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { headerStyles } from './Style/Header';

const Header = () => {

    return (
        <Box component="div" sx={headerStyles.container}>
            <Box sx={headerStyles.box} >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon sx={headerStyles.theme} />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, ...headerStyles.theme }} color='action'>
                        Dashboard
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        //onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle sx={headerStyles.theme} />
                    </IconButton>
                </Toolbar>
            </Box>
        </Box>
    );
}



export default Header;