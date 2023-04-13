export const PRICINGS = [
	{
		price: '$0.00',
		title: 'Free Plan',
		text: 'Build and test using our core set of products with up to 100 API requests ',
		features: {
			0: ['Transactions', 'true'],
			1: ['Auth', 'true'],
			2: ['Identity', 'true'],
			3: ['Investments', 'false'],
			4: ['Assets', 'false'],
			5: ['Liabilities', 'false'],
			6: ['Income', 'false']
		}
	},
	{
		price: '$249.00',
		title: 'Basic Plan',
		text: 'Launch your project with unlimited requests and no contractual minimums ',
		features: {
			0: ['Transactions', 'true'],
			1: ['Auth', 'true'],
			2: ['Identity', 'true'],
			3: ['Investments', 'true'],
			4: ['Assets', 'true'],
			5: ['Liabilities', 'false'],
			6: ['Income', 'false']
		}
	},
	{
		price: '$499.00',
		title: 'Premium Plan',
		text: 'Get tailored solutions, volume pricing, and dedicated support for your team ',
		features: {
			0: ['Transactions', 'true'],
			1: ['Auth', 'true'],
			2: ['Identity', 'true'],
			3: ['Investments', 'true'],
			4: ['Assets', 'true'],
			5: ['Liabilities', 'true'],
			6: ['Income', 'true']
		}
	}
];
