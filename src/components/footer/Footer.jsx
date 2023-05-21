import styles from './Footer.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import PublicIcon from '@mui/icons-material/Public';



const Footer =  () => {
    return(
    <div className={styles.footer}>
        <div className={styles.mainfooter}>
            <h2>BIRDHEAVEN COMPANION VIETNAM CO.</h2>
            <div className={styles["footer-content"]}>
                <div className={styles.content}>
                    <LocationOnIcon className={styles["image-icon"]}/>
                    <p className={styles.location}>
                        Address: D1 Street, Long Thạnh Mỹ town, Thủ Đức City
                    </p>
                </div>
                <div className={styles.content}>
                    <LocalPhoneIcon className={styles["image-icon"]}/>
                    <p className={styles.number}>
                        Phone number: 02743752137
                    </p>
                </div>
                <div className={styles.content}>
                    <MailIcon className={styles["image-icon"]}/>
                    <p className={styles.email}>
                        Email: birdheaventhuduc@gmail.com.vn
                    </p>
                </div>
                <div className={styles.content}>
                    <PublicIcon className={styles["image-icon"]}/>
                    <p>
                        Website: 
                        <a className={styles["website-link"]} href='App.js' alt=''>
                            www.birdheaventhuduc.com.vn
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.contact}>
            <h2>CONTACT US</h2>
            <div className={styles.icons}>
                <a href="https://www.facebook.com/profile.php?id=100037630596105" alt=''>
                    <img className={styles["contact-icons"]} src="images/facebook-icon.png" alt=''/>
                </a>
                <a href="https://twitter.com/elonmusk" alt=''>
                    <img className={styles["contact-icons"]} src="images/twitter-icon.png" alt=''/>
                </a>
                <a href="https://zalo.me/0888926071" alt=''>
                    <img className={styles["contact-icons"]} src="images/zalo-icon.png" alt=''/>
                </a>
            </div>
        </div>
    </div>
    )
}
export default Footer;