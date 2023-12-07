import React from "react";
import styles from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <div>
      <div className={styles.contact_container}>
        <h2>CONTACT US</h2>
      </div>
      <div className={styles.ContactDetails_form_container}>
        <form action="">
          <div className={styles.formGroup}>
            <label htmlFor="email">
              Email<span className={styles.email_required}>(required)</span>
            </label>
            <input type="email" id="email" className={styles.whiteText} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">
              Contact Request Message
              <span className={styles.email_required}>(required)</span>
            </label>
            <textarea
              id="message"
              rows={4}
              className={styles.whiteText}
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
