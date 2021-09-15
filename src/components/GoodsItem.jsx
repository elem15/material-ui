import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React from 'react';

const GoodsItem = (props) => {
    const { name, price, setOrder, poster } = props;

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}>
            <Card sx={{height: '100%'}}>
                <CardMedia
                        image={poster}
                        component="img"
                        alt={name}  
                        title={name}                                            
                        sx={{height: 140}} 
                       
                    />                
                <CardContent sx={{flex: 1}} >
                    <Typography
                        component='h5'
                        variant='h6'
                    >{name}</Typography>
                    <Typography variant='body1'>Цена: {price} руб.</Typography>
                    </CardContent>
                    <Box m={1} sx={{textAlign:'right', verticalAlign: 'bottom'}}>
                    <Button  
                        variant='text'  
                        spacing={5}                                             
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                    </Box>
            </Card>
        </Grid>
    );
};

export default GoodsItem;