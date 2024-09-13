import { google } from 'googleapis';

const calendar = google.calendar('v3');

const TUTORING_CALENDAR_ID = process.env.NEXT_PUBLIC_TUTORING_CALENDAR_ID;
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

async function getEvents() {
    return await calendar.events.list({
        calendarId: TUTORING_CALENDAR_ID,
        key: GOOGLE_API_KEY,
    });
}

export default async function handler(req, res) {
    const minDate = new Date("2024-01-01T00:00:00Z");
    const maxDate = new Date("2024-01-06T23:59:59Z");

    getEvents()
        .then((events) => {
            let calendarData = {
                message: events.data.items.map((val) => ({
                    title: val.summary,
                    start: val.start ? (val.start.dateTime ?? val.start.date) : undefined,
                    end: val.end ? (val.end.dateTime ?? val.end.date) : undefined,
                })),
            };
            calendarData = calendarData.message.filter(
                (event) =>
                    new Date(event.start) > minDate && new Date(event.start) < maxDate
            );
            let calendarMap = {};
            calendarData.forEach((event) => {
                // this expects event titles to be in the format "FIRST_NAME LAST_NAME (COURSE)"
                // this might be stupid
                if (!event.title.includes("(")) {
                    return
                }
                const words = event.title.split(" ");

                // ok yea this is stupid
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
                // this could be cleaned up
                calendarMap[course][name].push({
                    date: day,
                    time: time,
                    end: end.toLocaleTimeString("en-US", { timeStyle: "short" }),
                    course: course,
                });
            });

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
