import React from 'react';
import { createUseStyles } from 'react-jss';

/**
 * The function takes two numbers and generate four random numbers using `Math.random()`. These random values and their complementary values are then used to generate a string that follows pattern for eight-valued radii for CSS property `border-radius` or JSS property `borderRadius`.
 *
 * The function returns the string of following pattern:
 *
 * `r1% r1Comp% r2% r2Comp% / r3% r4% r4Comp% r3Comp%`
 *
 * where `rxComp` refers to the complementary (w.r.t `100`) value of radius `x` (one of four random radii calculated using `Math.random()`)
 *
 * @param {number} min Minimum value the function should generate. Should be greater than or equal to `0`.
 * @param {number} max Maximum value the function should generate. Should be less than or equal to `100`.
 * @returns {string} `"r1% r1Comp% r2% r2Comp% / r3% r4% r4Comp% r3Comp%"`
 */

const randomRadiiGenerator = (min, max) => {
	let r1 = Math.random() * (max - min) + min;
	let r2 = Math.random() * (max - min) + min;
	let r3 = Math.random() * (max - min) + min;
	let r4 = Math.random() * (max - min) + min;

	let radiiString = `
                      ${r1}% 
                      ${100 - r1}% 
                      ${r2}% 
                      ${100 - r2}%
                      ${' / '}
                      ${r3}% 
                      ${r4}% 
                      ${100 - r4}% 
                      ${100 - r3}%`;
	return radiiString;
};

const useStyles = createUseStyles({
	square: {
		width: '100%',
		// height: 300,
		// paddingTop: '50%',
		// BoxSizing: 'border-box',
		margin: 10,
		left: 0,
		borderRadius: '100%',
		position: 'relative',
		'& span:nth-child(1)': {
			position: 'absolute',
			width: '100%',
			paddingTop: '100%',
			left: 0,
			borderRadius: randomRadiiGenerator(40, 60),
			transition: '1.5s',
			background: '#9c27b054',
			animation: '$blob-rotate-1 4s linear infinite',
		},
		'&:hover span:nth-child(1)': {
			background: '#9c27b054',
			borderRadius: '100%',
		},
		'& span:nth-child(2)': {
			position: 'absolute',
			width: '100%',
			paddingTop: '100%',
			left: 0,
			borderRadius: randomRadiiGenerator(40, 60),
			transition: '1.5s',
			background: '#e91e6354',
			animation: '$blob-rotate-1 6s reverse linear infinite',
		},
		'&:hover span:nth-child(2)': {
			background: '#e91e6354',
			borderRadius: '100%',
		},
		'& span:nth-child(3)': {
			position: 'absolute',
			width: '100%',
			paddingTop: '100%',
			left: 0,
			borderRadius: randomRadiiGenerator(40, 60),
			transition: '1.5s',
			background: '#00968854',
			animation: '$blob-rotate-1 8s linear infinite',
		},
		'&:hover span:nth-child(3)': {
			background: '#00968854',
			borderRadius: '100%',
		},
	},
	'@keyframes blob-rotate-1': {
		'0%': {
			transform: 'rotate(0deg)',
		},
		'100%': {
			transform: 'rotate(360deg)',
		},
	},
	container: {
		marginTop: '5vh',
		position: 'relative',
		width: '100%',
		paddingTop: '100%',
		overflow: 'hidden',
		borderRadius: '100%',
		// background: 'black',
	},
	content: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		textAlign: 'center',
		// color: '#212121',
		borderRadius: '100%',
		zIndex: 1,
	},
	text: {
		paddingTop: '10%',
		width: '60%',
		marginLeft: '20%',
	},
});

const Blob = ({ children }) => {
	const styles = useStyles();

	return (
		<div className={styles.square}>
			<span />
			<span />
			<span />
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.text}>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Blob;
