import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@material-ui/core"
import { ShoppingBasket } from "@material-ui/icons"
import BasketItem from "./BasketItem"

const Basket = (props) => {
    const { order = [], removeFromOrder, cartOpen, closeCart = Function.prototype } = props

    return (
        <Drawer
            anchor='right'
            open={cartOpen}
            onClose={closeCart}
        >
            <List sx={{ maxWidth: '300px' }}>
                <ListItem>
                    <ListItemButton>
                        <ShoppingBasket />
                    </ListItemButton>
                    <ListItemText primary="Корзина">

                    </ListItemText>
                </ListItem>
            </List>
            <Divider />
            {!order.length ? (
                <ListItem>
                    Корзина пуста
                </ListItem>
            ) : (
                <>
                {order.map((item) => (
                    <BasketItem
                        key={item.name}
                        {...item}
                        removeFromOrder={removeFromOrder}
                    />
                    ))}
                    <Divider />
                    <ListItem>
                        <Typography sx={{fontWeight: 700}}>
                            Общая стоимость:{' '}
                            {order.reduce((acc, item) => {
                                return acc + item.price * item.quantity;
                            }, 0)}{' '}
                            рублей.
                        </Typography>
                    </ListItem>
                </>
            )}
        </Drawer>
    )
}

export default Basket