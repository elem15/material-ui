import { Alert, Snackbar } from "@material-ui/core";

function Snack({ isOpen, handleClose }) {
    return (
        <Snackbar
            open={isOpen}
            onClose={handleClose}
            autoHideDuration={2000}
        >
            <Alert
                severity='success'                
            >
                Товар добавлен в корзину!
            </Alert>
        </Snackbar>
    )
}
export default Snack