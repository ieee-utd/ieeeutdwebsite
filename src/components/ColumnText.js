import styles from '@/styles/About.module.css';
import Link from 'next/link'

 const ColumnText = ({title, paragraph, linkText, link}) => {
    return (
        <div className={styles["column-text-container"]}>
            <h1 className= {styles["column-text-subtitle"]}> {title}</h1>
            <p className = {styles["column-text-paragraph"]}> {paragraph}</p>
            <Link href={`${link}`}>{linkText}</Link>

        </div>
    )
}

export default ColumnText;