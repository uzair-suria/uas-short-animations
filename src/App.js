import React from 'react';
import TitleBar from './components/TitleBar';

import './App.css';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import {
	AnimatedBlob,
	AnimatedCollaboration,
	AnimatedLogo,
	AnimatedWebsite,
} from './components/animated-components';
import { Fade, Slide } from 'react-awesome-reveal';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	gridItem: {
		marginBottom: '50px 0px',
		padding: '5%',
	},
	flexContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	heading: {
		margin: '0px 0px 10px 0px',
	},
}));

function App() {
	const styles = useStyles();
	return (
		<div className="App">
			<TitleBar />
			<div className={styles.root}>
				<Grid container>
					<div className={styles.flexContainer}>
						{/* Animated Logo */}
						<Grid item xs={12} md={6} className={styles.gridItem}>
							<Fade cascade={true}>
								<Typography
									variant="h5"
									color="textPrimary"
									className={styles.heading}
								>
									A Service that Completes your Brand
								</Typography>
								<Typography variant="body1" color="textPrimary">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Necessitatibus dicta veniam voluptatum eius obcaecati neque
									dolor provident voluptas suscipit esse quod nihil doloremque,
									quis quo tempora? Dolorem omnis rem sed.
								</Typography>
								<Typography variant="body1" color="textPrimary">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Necessitatibus dicta veniam voluptatum eius obcaecati neque
									dolor provident voluptas suscipit esse quod nihil doloremque,
									quis quo tempora? Dolorem omnis rem sed.
								</Typography>
							</Fade>
						</Grid>
						<Grid item xs={12} md={6} className={styles.gridItem}>
							<Slide direction="right" cascade={true}>
								<div style={{ paddingLeft: '20%', paddingRight: '10%' }}>
									<AnimatedLogo />
								</div>
							</Slide>
						</Grid>
						{/* Animated Website */}
						<Grid item xs={12} md={6} className={styles.gridItem}>
							<Slide direction="left" cascade={true}>
								<div>
									<AnimatedWebsite />
								</div>
							</Slide>
						</Grid>
						<Grid item xs={12} md={6} className={styles.gridItem}>
							<Fade cascade={true}>
								<Typography
									variant="h5"
									color="textPrimary"
									className={styles.heading}
								>
									All your Web Solutions in One Place
								</Typography>
								<Typography variant="body1" color="textPrimary">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Necessitatibus dicta veniam voluptatum eius obcaecati neque
									dolor provident voluptas suscipit esse quod nihil doloremque,
									quis quo tempora? Dolorem omnis rem sed.
								</Typography>
								<Typography variant="body1" color="textPrimary">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Necessitatibus dicta veniam voluptatum eius obcaecati neque
									dolor provident voluptas suscipit esse quod nihil doloremque,
									quis quo tempora? Dolorem omnis rem sed.
								</Typography>
							</Fade>
						</Grid>
						{/* Animated Collaboration */}
						<Grid item xs={12} md={6} className={styles.gridItem}>
							<Fade cascade={true}>
								<Typography
									variant="h5"
									color="textPrimary"
									className={styles.heading}
								>
									A Collborative Environment
								</Typography>
								<Typography variant="body1" color="textPrimary">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Necessitatibus dicta veniam voluptatum eius obcaecati neque
									dolor provident voluptas suscipit esse quod nihil doloremque,
									quis quo tempora? Dolorem omnis rem sed.
								</Typography>
								<Typography variant="body1" color="textPrimary">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Necessitatibus dicta veniam voluptatum eius obcaecati neque
									dolor provident voluptas suscipit esse quod nihil doloremque,
									quis quo tempora? Dolorem omnis rem sed.
								</Typography>
							</Fade>
						</Grid>
						<Grid item xs={12} md={6} className={styles.gridItem}>
							<Slide direction="right" cascade={true}>
								<div style={{ height: '10%' }}>
									<AnimatedCollaboration />
								</div>
							</Slide>
						</Grid>
						{/* Animated Blob */}
						<Grid
							item
							xs={12}
							md={6}
							className={styles.gridItem}
							style={{ padding: '5%', overflow: 'hidden' }}
						>
							<Slide direction="left" cascade={true}>
								<div>
									<AnimatedBlob>
										<Typography variant="h6" align="center" color="secondary">
											Some Clever Tagline
										</Typography>
									</AnimatedBlob>
								</div>
							</Slide>
						</Grid>
						<Grid item xs={12} md={6} className={styles.gridItem}>
							<Fade cascade={true}>
								<Typography
									variant="h5"
									color="textPrimary"
									className={styles.heading}
								>
									Unique UI/UX Ideas!
								</Typography>
								<Typography variant="body1" color="textPrimary">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Necessitatibus dicta veniam voluptatum eius obcaecati neque
									dolor provident voluptas suscipit esse quod nihil doloremque,
									quis quo tempora? Dolorem omnis rem sed.
								</Typography>
								<Typography variant="body1" color="textPrimary">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Necessitatibus dicta veniam voluptatum eius obcaecati neque
									dolor provident voluptas suscipit esse quod nihil doloremque,
									quis quo tempora? Dolorem omnis rem sed.
								</Typography>
								<Typography variant="body1" color="textPrimary">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Necessitatibus dicta veniam voluptatum eius obcaecati neque
									dolor provident voluptas suscipit esse quod nihil doloremque,
									quis quo tempora? Dolorem omnis rem sed.
								</Typography>
							</Fade>
						</Grid>
					</div>
				</Grid>
			</div>
		</div>
	);
}

export default App;
