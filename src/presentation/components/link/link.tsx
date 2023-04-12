interface LinkProps
	extends React.DetailedHTMLProps<
		React.AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	> {
	variant?: 'black' | 'green';
	size?: 'small' | 'medium' | 'large';
	children: React.ReactNode;
}

const Link = ({
	variant = 'green',
	size = 'medium',
	children,
	...props
}: LinkProps): JSX.Element => {
	return (
		<a className={`btn btn-variant-${variant} btn-size-${size}`} {...props}>
			{children}
		</a>
	);
};

export default Link;
