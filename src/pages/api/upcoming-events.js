const { google } = require('googleapis');

const apis = google.getSupportedAPIs();

// Set up Google Calendar API client
const calendar = google.calendar('v3');

export default async function handler(req, res) {
  console.log('api hit')
  try {
    const response = await calendar.calendarList.get({
        auth: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
        calendarId: 'r68kjt9b8vt1jh3sk9ak197gdk@group.calendar.google.com',
      })
    
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not load data',
                          supportedApis: apis });
  }
}
