
import styles from '@/styles/join.module.css';
import Image from 'next/image';

export default function Join() {
    const handleClick = () => {
        alert('Coming Soon!')
    }
    return (
<>
            <div className={styles.main_container}>
                <div className={styles.top_section}>
                    <h1 className={styles.top_header}>Membership</h1>
                    <div className={styles.paragraph_container}>
                    <p className={styles.bottom_header}>Join a community of more than 450,000 technology and engineering professionals united by a common desire to continuously learn, interact, collaborate, and innovate.</p>
                    </div>
                </div>
                <div className={styles.bottom_section}>
                    <div className={styles.list_section}>
                        <div className={styles.member_access}>
                            <div style={styles.box_image}>
                            <Image
                            src={require('@/assets/ieee_utd_cover.jpg')}
                            width={350}
                            height={350}
                            />
                            </div>
                            <div className='tw-border-5 tw-flex-1 tw-pl-5 tw-flex-col'>
                                <h1 className={styles.smallTitle}>IEEE UTD Member Access</h1>
                              <div className="tw-bg-red"> 
                                    <ul className={styles.contents}>
                                    <li className={styles.all_contents}>Tutoring Sessions </li>
                                    <li className={styles.all_contents}>IEEE Discord</li>
                                    <li className={styles.all_contents}>Professional Workshops</li>
                                    <li className={styles.all_contents}>3D Printing</li>
                                    <li className={styles.all_contents}>Corporate Events</li>
                                    <li className={styles.all_contents}>IEEE UTD Youtube</li>
                                    <li className={styles.all_contents}>IEEE Societies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.general_membership}>
                            <div style={styles.box_image}>
                            <Image
                            src={require('@/assets/ieee.jpeg')}
                            width={350}
                            height={350}
                             />
                            </div>
                          
                            <div className='tw-border-5 tw-flex-1 tw-pl-5 tw-flex-col'>
                                <h1 className={styles.smallTitle}>IEEE General Membership</h1>
                                <div className="tw-bg-red">
                                    <h1 className={styles.generalMessage}>Interested in becoming a member? Fill out the form and Join the Discord!</h1>
                                    <button className={styles.button}   onClick={handleClick}>IEEE UTD Member Form</button>
                                    <a className={styles.button} href='https://discord.gg/Kpzd4xZxpN' style={{ textDecoration: 'none', color: 'white' }}>IEEE Discord</a>
                                    <h1 className={styles.generalMessage}>If you want to become a General IEEE Member, fill out this form!</h1>
                                    <a className={styles.button} href='https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join' style={{ textDecoration: 'none', color: 'white' }}>IEEE General Member Form</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.officer_applications}>
                            <div style={styles.box_image}>
                        <Image
                            src={require('@/assets/ieee_officer_pic.jpg')}
                            width={350}
                            height={350}
                             />
                             </div>
                            <div className='tw-border-5 tw-flex-1 tw-pl-5 tw-flex-col'>
                                <h1 className={styles.smallTitle}>Officer Applications</h1>
                                <div className="tw-bg-red">
                                    <h1 className={styles.officerMessage}>There are no officer applications available at this time.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}