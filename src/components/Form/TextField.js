import React from 'react';
import BaseTextField from 'material-ui/TextField';

/**
 * TextField
 *
 * @param {string} name
 * @param {string} value
 * @param {Function} onChange
 * @param {Object} meta
 * @param {string} className
 * @param {string} label
 * @param {string} placeholder
 * @param {string} helperText
 * @return {XML}
 * @constructor
 */
const TextField = ({
	input : { name, value, onChange },
	meta,
	className,
	label,
	placeholder,
helperText
}) => {
	const hasError = !!meta.error;

	return (
		<BaseTextField
			className={className}
			name={name}
			label={label}
			error={hasError}
			value={value}
			helperText={meta.error || helperText || ' '}
			InputProps={{ placeholder }}
			fullWidth={true}
			onChange={({ target }) => {
				onChange(target.value)
			}}
		/>
	);
};

export default TextField;
