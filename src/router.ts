import express, { Router, Request, Response } from 'express';
import bank, { SVG_LOGO as BANK_ICON } from './utils/bank';

const router: Router = express.Router();

// Express body-parser
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Ping Pong (test endpoint)
router.get('/ping', (req: Request, res: Response) => {
	res.send('pong! 🏓');
});

router.get(
	'/organizations/:orgId/balance',
	shieldFor('Organization Balance', async (req: Request, res: Response) => {
		const orgId = req.params.orgId;
		const org = await bank.organization(orgId);
		const amount_cents = org.balances.balance_cents;

		return {
			label: org.name,
			message: formatMoney(amount_cents),
			color: amount_cents >= 0 ? 'green' : 'red',
			config: {
				// NOTE: The logo is not rendering correctly in the badge
				// logo: true,
			},
		};
	})
);

function formatMoney(amount_cents: number) {
	var formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',

		// These options are needed to round to whole numbers if that's what you want.
		//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
	});
	return formatter.format(amount_cents);
}

function bankLogo() {
	return {
		logoSvg: BANK_ICON,
	};
}

function shieldFor(name: string, handle: Function) {
	return async (req: Request, res: Response) => {
		try {
			const shieldData = await handle(req, res);
			const config = shieldData.config;
			delete shieldData.config;

			res.json(shieldBase(shieldData, config));
		} catch (e) {
			const bankErrMsg = e?.response?.data?.message || e?.message;
			console.log('Bank API Error:', bankErrMsg);
			const code = 200; // dispite the API error, we'll still return a 200 so that the badge shows a friendly error message such as "Organization not found".
			const errorResponse = {
				label: name,
				message: bankErrMsg || 'An error has occured',
				color: 'red',
				isError: true,
			};
			res.status(code).json(shieldBase(errorResponse));
		}
	};

	function shieldBase(
		shieldConfig: object,
		presets: {
			logo?: boolean;
		} = {
			logo: true,
		}
	) {
		let shield = {
			// Default values
			schemaVersion: 1,
			...shieldConfig,
		};

		if (presets.logo) {
			shield = {
				...shield,
				...bankLogo(),
			};
		}

		return shield;
	}
}

export default router;
