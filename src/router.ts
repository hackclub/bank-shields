import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

// Express body-parser
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Ping Pong (test endpoint)
router.get('/ping', (req: Request, res: Response) => {
	res.send('pong! 🏓');
});

router.get('/', (req: Request, res: Response) => {
	const response = {
		message:
			'Hello World! Welcome to the Express Typescript Simple Boilerplate.',
		boilerplate: {
			repository:
				'https://github.com/garyhtou/express-typescript-simple-boilerplate',
			author: {
				name: 'Gary Tou',
				website: 'https://garytou.com',
			},
		},
	};
	res.json(response);
});

export default router;
