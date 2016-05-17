



// NISAB figures
// the URL of scraped Nisab figures
var nisabSourceURL = 'https://s3-eu-west-1.amazonaws.com/zakat-dev-justgiving-com/nisab-daily.json'

// used for debugging
// var nisabSourceURL = 'data/nisab.json'

// currencies defined here will augmented by nisab figures,
// if they exist... and then fed into the zakat contoller scope
var desiredCurrencies = [
	{
		"code": "GBP",
		"name": "GBP (Great British Pounds)",
		"symbol": "&pound;"
	},
	{
		"code": "USD",
		"name": "USD  (US Dollars)",
		"symbol": "$"
	},
	{
		"code": "EUR (Euros)",
		"name": "EUR",
		"symbol": "&euro;"
	},
	{
		"code": "HKD",
		"name": "HKD (Hong Kong Dollars)",
		"symbol": "HK$"
	},
	{
		"code": "SGD",
		"name": "SGD (Singapore Dollars)",
		"symbol": "SG$"
	},
	{
		"code": "CAD",
		"name": "CAD (Canadian Dollars)",
		"symbol": "$"
	},
	{
		"code": "AED",
		"name": "AED (United Arab Emirates Dirhams)",
		"symbol": "د.إ"
	},
	{
		"code": "AUD",
		"name": "AUD (Australian Dollars)",
		"symbol": "$"
	},
	{
		"code": "ZAR",
		"name": "ZAR (South African Rand)",
		"symbol": "R"
	}
]