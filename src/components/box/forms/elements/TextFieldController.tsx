import {TextField} from "@mui/material";
import {Control, Controller} from "react-hook-form";

interface ITextFieldController {
	control: any
	name: string
	label: string
	error: boolean
}

const TextFieldController = ({ control, name, error, label }: ITextFieldController) => {
  return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<TextField
					{...field}
					label={label}
					error={error}
					size={'small'}
				/>
			)}
		/>
  )
}

export default TextFieldController