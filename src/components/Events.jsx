const Calendar = () => {
	const [events, setEvents] = React.useState();
	const calendarRef = React.createRef();
	const { width } = useWindowDimensions();
	React.useEffect(() => {
		width > 768 ? 'listPlugin' : 'dayGridPlugin';
	}, [width]);
	React.useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const response = await fetch('/api/google/redirect');
			if (response.ok) {
				const result = await response.json();
				console.log(result);
				setEvents(result.message.sort((a, b) => a.start.dateTime - b.start.dateTime));
			}
		};

		// call the function
		fetchData()
			// make sure to catch any error
			.catch(console.error);
	}, []);

	return (
		<>
			<FullCalendar
				plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
				ref={calendarRef}
				initialView={width < 768 ? 'listMonth' : 'dayGridMonth'}
				windowResize={function (view) {
					if (window.innerWidth >= 768) {
						calendarRef.current.getApi().changeView('dayGridMonth');
					} else {
						calendarRef.current.getApi().changeView('listMonth');
					}
				}}
				events={events}
			/>
		</>
	);
};

export default Calendar;
