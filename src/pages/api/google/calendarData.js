import { google } from 'googleapis';

const calendar = google.calendar('v3');

const TUTORING_CALENDAR_ID = process.env.NEXT_PUBLIC_TUTORING_CALENDAR_ID;
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

const minDate = new Date("2024-01-01T00:00:00Z");
const maxDate = new Date("2024-01-06T23:59:59Z");
async function getEvents() {
    return await calendar.events.list({
        calendarId: TUTORING_CALENDAR_ID,
        key: GOOGLE_API_KEY,
        timeMin: minDate.toISOString(),
        timeMax: maxDate.toISOString(),
        timeZone: "America/Chicago",
    });
}

export default async function handler(req, res) {

    getEvents()
        .then((events) => {
            let calendarData = events.data.items
                    .filter((val) => {
                        // Ensure the event has both a valid start and end date
                        const hasValidStart = val.start && (val.start.dateTime || val.start.date);
                        const hasValidEnd = val.end && (val.end.dateTime || val.end.date);
                        
                        if (!hasValidStart || !hasValidEnd) return false; // Filter out events without start or end date
                        if (val.organizer && val.organizer.displayName !== "Tutor Hours") return false; // Filter out events not organized by "Tutor Hours"
                        if (val.summary.includes("-")) return false; // Filter out events with a "-" in the title   
                        // Parse the start date for comparison
                        const startDate = new Date(val.start.dateTime ?? val.start.date);
            
                        // Ensure the start date falls within the specified date range
                        return startDate > minDate && startDate < maxDate;
                    })
                    .map((val) => ({
                        title: val.summary,
                        start: val.start ? (val.start.dateTime ?? val.start.date) : undefined,
                        end: val.end ? (val.end.dateTime ?? val.end.date) : undefined,
                    }));
            // 
            let calendarMap = {};
            calendarData.forEach((event) => {
                const words = event.title.split(" ");

                const course = words[words.length - 2].substring(1, words[words.length - 2].length) + " " + words[words.length - 1].replace("(", "").replace(")", "");
                const name = `${words[0]} ${words[1]}`;
                const day = new Date(event.start).toLocaleDateString("en-US", { weekday: "long" });
                const time = new Date(event.start).toLocaleTimeString("en-US", { timeStyle: "short" });
                const end = new Date(event.end);
                if (!calendarMap[course]) {
                    calendarMap[course] = {};
                }
                if (!calendarMap[course][name]) {
                    calendarMap[course][name] = [];
                }
                calendarMap[course][name].push({
                    date: day,
                    time: time,
                    end: end.toLocaleTimeString("en-US", { timeStyle: "short" }),
                    course: course,
                });
            });
            console.log(calendarData);
            // Sort dates within calendarMap based on day of the week
            Object.keys(calendarMap).forEach((course) => {
                Object.keys(calendarMap[course]).forEach((name) => {
                    calendarMap[course][name].sort((a, b) => {
                        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        return daysOfWeek.indexOf(a.date) - daysOfWeek.indexOf(b.date);
                    });
                });
            });

            res.status(200).json(calendarMap);
            return calendarMap;
        })
        .catch((error) => {
            console.error("Error:", error);
            res.status(500).json({ error: "An error occurred while fetching events." });
        });
}
