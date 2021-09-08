import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";

export default function Header() {
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
                >
                    <ShoppingBasket/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}