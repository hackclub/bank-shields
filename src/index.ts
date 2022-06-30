import dotenv from 'dotenv';
dotenv.config(); // Load envrionment variables from .env file

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import router from './router';
import errorHandlers from './helpers/errorHandlers';

const PORT = process.env.PORT || 3000;
const app = express();

// Secure app with HTTP headers
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));

// Allow CORS
app.use(cors());

// Add paths (router)
app.use(router);

// Handle errors
app.use(errorHandlers);

app.listen(PORT, () => {
	console.log(
		'\n=============================\n' +
			`Server listening on port ${PORT}` +
			'\n=============================\n'
	);
});
