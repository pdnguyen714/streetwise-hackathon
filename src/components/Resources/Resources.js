import React from 'react';
import './Resources.css'
import { Nav } from '../Nav/Nav';

export const Resources = (props) => {

    return (
        <>
            <Nav />
            <div className="resources">
                <div className="resource-row padding-top">
                    <div className="resource-content">
                        <h1 className="resource-header">Protest Information</h1>
                        <p className="resource-p">Make sure you're prepared by brushing up on your rights before heading out into the streets.</p>
                        <div className="resource-links">
                            <div className="resource-link1">
                                <a href="https://www.figma.com/file/0paDALoKy0GhyvKtJtc8TI/Project-Streetwise-v2?node-id=0%3A1">Know your Rights</a><br />
                            </div>
                            <div className="resource-link2">
                                <a href="https://www.figma.com/file/0paDALoKy0GhyvKtJtc8TI/Project-Streetwise-v2?node-id=0%3A1">How to organize a protest</a>
                            </div>
                            <div className="resource-link3">
                                <a href="https://www.figma.com/file/0paDALoKy0GhyvKtJtc8TI/Project-Streetwise-v2?node-id=0%3A1">Find a protest near you</a>
                            </div>
                        </div>
                    </div>
                    <div className="resource-img">
                        <img src="/PROTESTS.png" alt="protest" height="500" width="500" />
                    </div>
                </div>
                <div className="resource-row-reverse">
                    <div className="resource-content">
                        <h1 className="resource-header">Police Activity</h1>
                        <p className="resource-p">Listen live to police feeds and be in the know.</p>
                        <div className="resource-links">
                            <div className="resource-link1">
                                    <a href="https://www.figma.com/file/0paDALoKy0GhyvKtJtc8TI/Project-Streetwise-v2?node-id=0%3A1">Police scanners</a><br />
                            </div>
                            <div className="resource-link2">
                                <a href="https://www.figma.com/file/0paDALoKy0GhyvKtJtc8TI/Project-Streetwise-v2?node-id=0%3A1">How to spot an undercover cop</a>
                            </div>
                            <div className="resource-link3">
                                <a href="https://www.figma.com/file/0paDALoKy0GhyvKtJtc8TI/Project-Streetwise-v2?node-id=0%3A1">Encrypted messaging</a>
                            </div>
                        </div>
                    </div>
                    <div className="resource-img">
                        <img src="/police.png" alt="protest" height="500" width="500" />
                    </div>
                </div>
                <div className="resource-row">
                    <div className="resource-content">
                        <h1 className="resource-header">Getting to a Protest</h1>
                        <p className="resource-p">Arrive to a protest safely using these transportation options.</p>
                        <div className="resource-links">
                            <div className="resource-link1">
                                <a href="https://www.figma.com/file/0paDALoKy0GhyvKtJtc8TI/Project-Streetwise-v2?node-id=0%3A1">Rideshare</a><br />
                            </div>
                            <div className="resource-link2">
                                <a href="https://www.figma.com/file/0paDALoKy0GhyvKtJtc8TI/Project-Streetwise-v2?node-id=0%3A1">Public Transportation</a>
                            </div>
                        </div>
                    </div>
                    <div className="resource-img">
                        <img src="/transportation.png" alt="protest" height="500" width="500" />
                    </div>
                </div>
                <div className="resource-row-reverse">
                    <div className="resource-content">
                        <h1 className="resource-header">Voice Your Opinion</h1>
                        <p className="resource-p">Be a part of the change and let your voice be heard.</p>
                        <div className="resource-links">
                            <div className="resource-link1">
                                <a href="https://www.figma.com/file/0paDALoKy0GhyvKtJtc8TI/Project-Streetwise-v2?node-id=0%3A1">Sign Petitions</a><br />
                            </div>
                            <div className="resource-link2">
                                <a href="https://www.figma.com/file/0paDALoKy0GhyvKtJtc8TI/Project-Streetwise-v2?node-id=0%3A1">Vote</a>
                            </div>
                        </div>
                    </div>
                    <div className="resource-img">
                        <img src="/group.png" alt="protest" height="500" width="500" />
                    </div>
                </div>
                <div className="resource-row padding-bottom">
                    <div className="resource-content">
                        <h1 className="resource-header">Donate</h1>
                        <p className="resource-p">Can't make it to a protest? Donate and be a part of the movement!</p>
                        <div className="resource-links">
                            <div className="resource-link1">
                                <a href="https://www.figma.com/file/0paDALoKy0GhyvKtJtc8TI/Project-Streetwise-v2?node-id=0%3A1">Mutual Aid Funds</a><br />
                            </div>
                            <div className="resource-link2">
                                <a href="https://www.figma.com/file/0paDALoKy0GhyvKtJtc8TI/Project-Streetwise-v2?node-id=0%3A1">To the Victims</a>
                            </div>
                            <div className="resource-link3">
                                <a href="https://www.figma.com/file/0paDALoKy0GhyvKtJtc8TI/Project-Streetwise-v2?node-id=0%3A1">Black Owned Businesses</a>
                            </div>
                        </div>
                    </div>
                    <div className="resource-img">
                        <img src="/DONATE.png" alt="protest" height="500" width="500" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resources