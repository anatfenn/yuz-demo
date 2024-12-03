import React from 'react';
import classes from './route.module.scss';
export default function Clients() {
    return (
        <div>
            <div className={classes.heroImage}>
                <img
                    src="https://static.wixstatic.com/media/11062b_30e14d2591244262980a875ed0017813~mv2.jpg/v1/fit/w_640,h_640/Organic Handmade Soap .jpg"
                    alt=""
                    className={classes.heroImageImg}
                />
                <div className={classes.heroImageContentBox}>
                    <h1 className={classes.heroImageTitle}>Why Our Client&apos;s buy Reclaim</h1>
                    <p className={classes.heroImageDescription}>
                        This is a space to welcome visitors to the site. Grab their attention with
                        copy that clearly states what the site is about, and add an engaging image
                        or video.
                    </p>
                    <button className={classes.heroImageExploreButton}>Shop All</button>
                </div>
            </div>
        </div>
    );
}
