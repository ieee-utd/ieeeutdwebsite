import PropTypes from 'prop-types';

export default function Course(props) {
    return (
        <div className="tw-flex tw-flex-col tw-bg-white tw-rounded-lg p-4 m-4 tw-w-[90vw]">
            <div className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-p-4 tw-bg-ieeeblue tw-text-white tw-font-bold tw-text-2xl">
                <h1>{props.courseName}</h1>
            </div>
            {Object.entries(props.tutors).map(([tutor, times], index) => {
                return (
                    <div key={index} className="tw-flex tw-flex-col tw-p-4 tw-bg-fadedblue tw-rounded-lg tw-my-4">
                        <h2 className="tw-text-lg tw-font-bold">{tutor}</h2>
                        <ul>
                            {times.map((time) => (
                                <li key={time.date}>
                                    <p>{time.date}</p>
                                    <p>{time.time} - {time.end}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            }
            )}
        </div>
    );
}
Course.propTypes = {
    courseName: PropTypes.string.isRequired,
    tutors: PropTypes.object.isRequired,
    courseCode: PropTypes.string.isRequired,
};
