import {Alert, AlertColor, Snackbar} from '@mui/material'
import { useLayoutStore } from '../../../store/store'
import CloseIcon from '@mui/icons-material/Close';

const Snack = () => {
	const { openSnack, hideSnack, typeSnack, textSnack } = useLayoutStore()

	const handleClose = () => {
		hideSnack()
	}

	return (
		// <Snackbar open={openSnack} autoHideDuration={8000} onClose={handleClose}>
		// 	<Alert severity={typeSnack as AlertColor}>
		// 		{textSnack}
		// 	</Alert>
		// 	{/*<Box className={`snack${typeSnack ? ` snack_${typeSnack}` : ''}`}>*/}
		// 	{/*	{typeSnack && icons[typeSnack]}*/}
		// 	{/*	<Typography component="span">{textSnack}</Typography>*/}
		// 	{/*	<IconButton onClick={handleClose}>*/}
		// 	{/*		<Close className="icon_smaller" />*/}
		// 	{/*	</IconButton>*/}
		// 	{/*</Box>*/}
		// </Snackbar>
		<Snackbar open={openSnack} autoHideDuration={6000} onClose={handleClose}>
			<Alert
				onClose={handleClose}
				severity={typeSnack as AlertColor}
				variant="filled"
				sx={{ width: '100%' }}
			>
				{textSnack}
			</Alert>
		</Snackbar>
	)
}

export default Snack
