import styles from "./Layout.module.css";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <div className={styles.layout}>
            <div className={styles['top-banner']}>
                <div>
                    <b>Get ₹14,501 fee waiver</b>
                    <span>click here to redeem the code</span>
                    <img src="/right-angle.svg" alt="right-angle" />
                </div>
                <div>
                    <span>offer ends in</span>
                    <div className={styles.timer}>
                        <div>1D</div>
                        <div>22hr</div>
                        <div>53min</div>
                        <div>18sec</div>
                    </div>
                </div>
            </div>
            <div className={styles['nav-wrap']}>
                <nav className={styles.navbar}>
                    <img src="/logo.svg" alt="logo" />
                    <ul>
                        <li>About us</li>
                        <li>Courses</li>
                        <li>Knowledge hub</li>
                        <li>Consulting</li>
                        <li>Faculty trainings</li>
                    </ul>
                    <div>
                        <button>Log In</button>
                        <button>Sign Up</button>
                    </div>
                </nav>
            </div>
            {children}
            <div className={styles.footer + ' container'}>
                <h3>Newsletter</h3>
                <p>Be the first one to know about discounts, offers and events</p>
                <div className={styles['footer-input-wrap']}>
                    <input type="text" placeholder="Enter your email"/>
                    <button>Subscribe</button>
                </div>
                <div className={styles['contact-wrap']}>
                    <div className={styles['contact-left']}>
                        <div>
                            <img src="/telephone.svg" alt="telephone" />
                            <div>
                                <div>Tel</div>
                                <div>+91-9219972805</div>
                            </div>
                        </div>
                        <div>
                            <img src="/email.svg" alt="email" />
                            <div>
                                <div>Mail</div>
                                <div>support_ifacet@iitk.ac.in</div>
                            </div>
                        </div>
                        <div>
                            <img src="/location.svg" alt="location" />
                            <div>
                                <div>Address</div>
                                <div>IIT KANPUR Kalyanpur Kanpur -208 016</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['contact-right']}>
                        <div>Stay Connected With Us</div>
                        <div className={styles['social-icon-wrap']}>
                            <img src="/twitter.svg" alt="twitter" />
                            <img src="/facebook.svg" alt="facebook" />
                            <img src="/linkedin.svg" alt="linkedin" />
                            <img src="/instagram.svg" alt="instagram" />
                        </div>
                    </div>
                </div>
                <p>IIT KANPUR has established the Foundation for Advanced Continuing Education and Training (IFACET) as a company to oversee and manage a range of activities related to ongoing education. These activities include providing certification programs, seminars, and conferences, utilizing a variety of delivery methods including online, offline, cyber-physical, and blended modes, in diverse domains such as engineering, sciences, humanities, medical sciences, economics, management, and arts. IFACET also offers training and consulting services to ministries, industries, associations, and institutions.</p>
                <i>Kindly note that all certificates given by IFACET under EICTA-IITK do not entitle the person to claim the status of an alumni of IITK unless specifically stated. Kindly also note that all internships, projects, placements that are promised are the sole responsibility of the concerned delivery partner and IFACET and EICT Academy -IIT Kanpur are neither liable nor responsible for the same</i>
                <hr />
                <div className={styles['bottom-nav']}>
                    <div className={styles['bottom-nav-left']}>
                        <div>About</div>
                        <div>Contact</div>
                        <div>Privacy policy</div>
                        <div>Sitemap</div>
                        <div>Terms of use</div>
                    </div>
                    <div className={styles['bottom-nav-right']}>
                        Copyright © 2023<span>|</span>All rights reserved
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout