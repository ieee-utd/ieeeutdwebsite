// components/Event.js
import styles from '@/styles/Event.module.css'; // Ensure the path to your CSS module is correct

export default function Event({ eventName, date, time, location }) {
	return (
		<div className={styles.eventCard}>
			{' '}
			<div className={styles.eventTitleSection}>
				<h2 className={styles.eventTitle}>{eventName}</h2>
			</div>
			<p className={styles.eventDate}>{date}</p>
			<p className={styles.eventTime}>{time}</p>
			<p className={styles.eventLocation}>{location}</p>
		</div>
	);
}
