import React from 'react';
import classes from './route.module.scss';
export default function Clients() {
    return (
        <div>
            <div className={classes.heroImage}>
                <img
                    src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_800/Frame%206.png"
                    alt=""
                    className={classes.heroImageImg}
                />
                <div className={classes.heroImageContentBox}>
                    <h1 className={classes.heroImageTitle}>Write a Title Here</h1>
                    <p className={classes.heroImageDescription}>
                        This is a space to welcome visitors to the site. Grab their attention with
                        copy that clearly states what the site is about, and add an engaging image
                        or video.
                    </p>
                    <button className={classes.heroImageExploreButton}>Explore</button>
                </div>
            </div>
        </div>
    );
}
