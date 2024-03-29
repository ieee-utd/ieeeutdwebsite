const { google } = require('googleapis');
const calendar = google.calendar('v3');

const TUTORING_CALENDAR_ID = process.env.TUTORING_CALENDAR_ID
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

async function getEvents() {
    return await calendar.events.list({
        calendarId: TUTORING_CALENDAR_ID,
        key: GOOGLE_API_KEY
    })
}

export default async function handler(req, res) {
    const minDate = new Date("2024-01-01T00:00:00Z"); // IMPORTANT: THIS NEEDS TO BE CHANGED EVERY YEAR
    const maxDate = new Date("2024-01-06T23:59:59Z"); // IMPORTANT: THIS NEEDS TO BE CHANGED EVERY YEAR
    getEvents()
    .then(events => {
        let calendarData = {
            message: events.data.items.map((val) => ({
                title: val.summary,
                start: val.start.dateTime ?? val.start.date,
                end: val.end.dateTime ?? val.end.date
            }))
        };
        calendarData = calendarData.message.filter(event => new Date(event.start) > minDate && new Date(event.start) < maxDate);
        let calendarMap = {};
        calendarData.forEach(event => {
            if(!event.title.includes('-'))
                return;
            let title = event.title.split('-');
            let course = title[0].trim();
            let name = title[1].trim();
            let start = new Date(event.start);
            let day = start.toLocaleDateString('en-US', {weekday: 'long'});
            let time = start.toLocaleTimeString('en-US', {timeStyle: 'short'});
            let end = new Date(event.end);
            
            if (!calendarMap[course]) {
                calendarMap[course] = {};
            }
            if (!calendarMap[course][name]) {
                calendarMap[course][name] = [];
            }
            // calendarMap[course][name].push({date: day, time: time});
            calendarMap[course][name].push({date: day, time: time, end: end.toLocaleTimeString('en-US', {timeStyle: 'short'})});
        });
        res.status(200).json(calendarMap);
        return calendarMap;
    })
    .catch(error => {
        // Handle error if any
        console.error("Error:", error);
    });

}