import { IconButton, ListItem, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const BasketItem = ({removeFromOrder, name, price, id, quantity}) => {
    return (
        <ListItem>
            <Typography
                variant="body1"
            >
            {name} {price}руб x{quantity}
            </Typography>
            <IconButton
                className='btn btn-primary'
                onClick={() => removeFromOrder(id)}
            >
                <Close />
            </IconButton>       
        </ListItem>
    );
};

export default BasketItem;