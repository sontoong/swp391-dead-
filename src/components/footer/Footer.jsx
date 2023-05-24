import styles from './Footer.module.css'
import FooterData from './FooterData';



const Footer =  ({contentOfFooter}) => {
    return(
    <div className={styles.footer}>
        <div className={styles.mainfooter}>
            <h2>BIRDHEAVEN COMPANION VIETNAM CO.</h2>
            <div className={styles["footer-content"]}>
                {FooterData.map((contentOfFooter) => (
                <div className={styles.contents}>
                    <div className={styles["imageIcon"]}>{contentOfFooter.imageIcon}</div>
                    <p className={styles.location}>
                        {contentOfFooter.contactInfo} 
                        <a target={"blank"} className={styles["website-link"]} href={contentOfFooter.contactLink} alt=''>
                            {contentOfFooter.content}
                        </a>
                    </p>
                </div>
                ))}
            </div>
        </div>
        <div className={styles.contact}>
            <h2>CONTACT US</h2>
            <div className={styles.icons}>
                <a target={"blank"} href="https://www.facebook.com/profile.php?id=100037630596105" alt=''>
                    <img className={styles["contact-icons"]} src="images/facebook-icon.png" alt=''/>
                </a>
                <a target={"blank"} href="https://twitter.com/elonmusk" alt=''>
                    <img className={styles["contact-icons"]} src="images/twitter-icon.png" alt=''/>
                </a>
                <a target={"blank"} href="https://zalo.me/0888926071" alt=''>
                    <img className={styles["contact-icons"]} src="images/zalo-icon.png" alt=''/>
                </a>
            </div>
        </div>
    </div>
    );
}
export default Footer;