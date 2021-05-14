import React from 'react';
import styles from './profile.module.css';

function ContactSocial(props) {
  return (
    <div className={styles.ContactSocial}>
      <div className={styles.ContactSocialTitle}>Social</div>
      <div className={styles.ContactSocialNetworks}>
        <div className={styles.ContactSocialNetworksInstagram}>
          <span className="material-icons">account_circle</span>
          <div className={styles.ContactSocialNetworksInstagramTitle}>
            {props.contact?.socials.instagram}
          </div>
        </div>
        <div className={styles.ContactSocialNetworksTwitter}>
          <span className="material-icons">storm</span>
          <div className={styles.ContactSocialNetworksTwitterTitle}>
            {props.contact?.socials.facebook}
          </div>
        </div>
        <div className={styles.ContactSocialNetworksFacebook}>
          <span className="material-icons">email</span>
          <div className={styles.ContactSocialNetworksFacebookTitle}>
            {props.contact?.socials.twitter}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSocial;
