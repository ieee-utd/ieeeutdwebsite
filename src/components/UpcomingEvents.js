// components/UpcomingEvents.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import Event from '@/components/Event'; // Import the new Event component
import styles from '@/styles/Events.module.css';

export default function UpcomingEvents({ events }) {
	return <div className={styles.upcomingCont}></div>;
}
