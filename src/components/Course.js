

export default function Course(props) {
    return (
        <div className="tw-flex tw-flex-col tw-bg-white tw-rounded-lg p-4 tw-w-[80vw]">
            <div className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-p-4 tw-bg-ieeeblue tw-text-white tw-font-bold tw-text-2xl">
                <h1>{props.courseName}</h1>
                <h1>{props.date}</h1>
            </div>
        </div>
    );
}