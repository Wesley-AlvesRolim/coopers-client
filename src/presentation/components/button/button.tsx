import { type ButtonHTMLAttributes } from 'react';
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<any> {
	variant?: 'black' | 'green';
	size?: 'small' | 'medium' | 'large';
	children: React.ReactNode;
}

const Button = ({
	variant = 'green',
	size = 'medium',
	children,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={`btn btn-variant-${variant} btn-size-${size}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
