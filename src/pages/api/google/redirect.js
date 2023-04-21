const calendar = require('@googleapis/calendar');

export default async function handler(req, res) {
	const auth = new calendar.auth.GoogleAuth({
		credentials: {
			private_key: process.env.GOOGLE_PRIVATE_KEY,
			client_email: 'calendar@ieee-utd.iam.gserviceaccount.com'
		},
		// Scopes can be specified either as an array or as a single, space-delimited string.
		scopes: [
			'https://www.googleapis.com/auth/calendar',
			'https://www.googleapis.com/auth/calendar.readonly'
		]
	});
	const authClient = await auth.getClient();

	const client = calendar.calendar({
		version: 'v3',
		auth: authClient
	});

	const result = await client.events.list({
		calendarId:
			'b93c558d1f488e1e1b2718b4dc114da36b63c29fabdccd4c8623ece313d320dd@group.calendar.google.com'
	});
	console.log(result.data.items);
	return res.status(200).json({
		message: result.data.items.map((val) => ({
			title: val.summary,
			start: val.start.dateTime ?? val.start.date,
			end: val.end.dateTime ?? val.end.date
		}))
	});
}
