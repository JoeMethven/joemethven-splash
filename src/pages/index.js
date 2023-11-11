import React, { Fragment } from 'react';
import '@styles/styles.scss';
import styles from './styles.module.scss';

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1>
                    <div className={styles.logo}>
                        <img alt="Joe Methven" src="images/joe.jpg" />
                    </div>
                    Joe Methven
                </h1>
                <h3>
                    Developer, COO @ <a href="https://and-element.com">&Element</a> and CTO @{' '}
                    <a href="https://merlincloud.ai">Merlin Cloud</a>
                </h3>
                <p>
                    I've always had a keen eye for design and continuously strive to create
                    appealing, user-friendly interfaces and user experiences, I've been coding for 8
                    years now. I am always studying to keep up with the latest trends and working
                    out better solutions to front-end problems. Aside from the web, I also enjoy
                    many other things such as running, science, photography and technology.
                </p>
                <p>
                    At Element Softworks, we pride ourselves on building bespoke, responsive and
                    innovative solutions for clients in all industries. To learn more, please view{' '}
                    <a href="https://and-element.com/brochure.pdf">our brochure</a>. If you're
                    interested in hiring me or our team contact us at{' '}
                    <a href="mailto:team@and-element.com">team@elementsoftworks.co.uk</a>. We
                    specialise in React.Js, Node.js, No SQL architecture.
                </p>
                <p>If you like my work feel free to follow my socials or shoot me a message. ✌️</p>
                <ul>
                    <li>
                        <a
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/itsjoeme/"
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="instagram"
                                class="svg-inline--fa fa-instagram fa-w-14 "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                ></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            aria-label="Strava"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.strava.com/athletes/6842781"
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="strava"
                                class="svg-inline--fa fa-strava fa-w-12 "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M158.4 0L7 292h89.2l62.2-116.1L220.1 292h88.5zm150.2 292l-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220z"
                                ></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            aria-label="Linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/joe-methven-15b680a5/"
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="linkedin-in"
                                class="svg-inline--fa fa-linkedin-in fa-w-14 "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                ></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
