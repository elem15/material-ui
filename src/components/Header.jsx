import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";

export default function Header({handleCart}) {
   
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{ flexGrow: 1 }}
                >
                    MUI SHOP
                </Typography>
                <IconButton
                    color="inherit"
                    onClick={handleCart}
                >
                    <ShoppingBasket/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}