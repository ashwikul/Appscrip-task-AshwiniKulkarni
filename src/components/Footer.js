import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

function Footer() {
  const [ismuseLinksOpen, setIsmuseLinksOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isFollowLinksOpen, setIsFollowLinksOpen] = useState(false);

  const toggleMuseLinksMenu = () => {
    setIsmuseLinksOpen(!ismuseLinksOpen);
  };
  const toggleQuickLinksMenu = () => {
    setIsQuickLinksOpen(!isQuickLinksOpen);
  };
  const toggleFollowLinksMenu = () => {
    setIsFollowLinksOpen(!isFollowLinksOpen);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.contactDetails}>
        <div className={styles.signup}>
          <div>
            <h1>BE THE FIRST TO KNOW</h1>
            <p className={styles.desktopHidden}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. this is simply dummy text.
            </p>
            <p className={styles.mobileHidden}>
              Sign up for updates from mettā muse.
            </p>
          </div>
          <div className={styles.subscribe}>
            <input type="text" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contact_currency}>
          <div className={`${styles.hr} ${styles.desktopHidden}`}></div>

          <div className={styles.contactusContainer}>
            <h1 className={styles.mobileHidden}>CONTACT US</h1>
            <h1 className={styles.desktopHidden}>CALL US</h1>
            <div className={styles.contactus}>
              <p>+44 221 133 5360</p>
              <div
                className={styles.desktopHidden}
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              ></div>
              <p>customercare@mettamuse.com</p>
            </div>
          </div>
          <div className={`${styles.hr} ${styles.desktopHidden}`}></div>

          <div className={styles.currencyContainer}>
            <h1>CURRENCY</h1>
            <div className={styles.currency}>
              <div
                style={{ display: "flex", gap: "4px", alignItems: "center" }}
              >
                <Image src="/usd.svg" alt="currency" width={24} height={24} />
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                ></div>
                <p>USD</p>
              </div>
              <p className={styles.mobileHidden}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
          <div className={`${styles.hr} ${styles.desktopHidden}`}></div>
        </div>
      </div>
      <div className={`${styles.hr} ${styles.mobileHidden}`}></div>
      <div className={styles.linksContainer}>
        {/* muse links */}
        <div className={styles.linksBox}>
          <div className={styles.linkheader}>
            <h1>mettā muse</h1>
            <Image
              src="/arrow.svg"
              alt="Appscrip logo"
              width={20}
              height={20}
              className={styles.desktopHidden}
              onClick={toggleMuseLinksMenu}
            />
          </div>
          <ul className={`${styles.linksList} ${styles.mobileHidden}`}>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
          {ismuseLinksOpen && (
            <div className={styles.desktopHidden}>
              <ul className={styles.linksList}>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>
          )}

          <div className={`${styles.hr} ${styles.desktopHidden}`}></div>
        </div>

        {/* quick links */}
        <div className={styles.linksBox}>
          <div className={styles.linkheader}>
            <h1>Quick Links</h1>
            <Image
              src="/arrow.svg"
              alt="Appscrip logo"
              width={20}
              height={20}
              className={styles.desktopHidden}
              onClick={toggleQuickLinksMenu}
            />
          </div>
          <ul className={`${styles.linksList} ${styles.mobileHidden}`}>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
          {isQuickLinksOpen && (
            <div className={styles.desktopHidden}>
              <ul className={styles.linksList}>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          )}

          <div className={`${styles.hr} ${styles.desktopHidden}`}></div>
        </div>

        {/* follow us */}
        <div className={styles.linksBox}>
          <div className={styles.iconContainer}>
            <div className={styles.linkheader}>
              <h1>Follow Us</h1>
              <Image
                src="/arrow.svg"
                alt="Appscrip logo"
                width={20}
                height={20}
                className={styles.desktopHidden}
                onClick={toggleFollowLinksMenu}
              />
            </div>
            <div className={`${styles.iconBox} ${styles.mobileHidden}`}>
              <Image
                src="/insta.svg"
                alt="Appscrip logo"
                width={32}
                height={32}
              />
              <Image src="/a.svg" alt="Appscrip logo" width={32} height={32} />
            </div>
            {isFollowLinksOpen && (
              <div className={styles.desktopHidden}>
                <div className={styles.iconBox}>
                  <Image
                    src="/insta.svg"
                    alt="Appscrip logo"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/a.svg"
                    alt="Appscrip logo"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            )}
          </div>
          <div className={`${styles.hr} ${styles.desktopHidden}`}></div>

          <div className={styles.iconContainer}>
            <div className={styles.linkheader}>
              <h1>mettā muse Accepts</h1>
            </div>
            <div className={styles.iconBox}>
              <Image
                src="/gpay.svg"
                alt="Appscrip logo"
                width={56}
                height={35}
              />
              <Image
                src="/mastercard.svg"
                alt="Appscrip logo"
                width={56}
                height={35}
              />
              <Image
                src="/phonepay.svg"
                alt="Appscrip logo"
                width={56}
                height={35}
              />
              <Image
                src="/amex.svg"
                alt="Appscrip logo"
                width={56}
                height={35}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
