import React from 'react';
import {
	AppBar,
	Button,
	IconButton,
	makeStyles,
	Toolbar,
	Typography,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginBottom: 20,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const TitleBar = () => {
	const classes = useStyles();

	const handleClick = () => {
		alert(
			'This is a sample product "Landing Page". The buttons and Links serve only decorative purpose'
		);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={handleClick}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Animated Website
					</Typography>
					<Button color="inherit" onClick={handleClick}>
						Contact
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default TitleBar;
