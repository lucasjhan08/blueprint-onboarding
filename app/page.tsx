"use client";

import { FiHeart as HeartIcon } from "react-icons/fi";
import { GoPaperAirplane as ShareIcon } from "react-icons/go";
import { LuCircle as ProfileIcon } from "react-icons/lu";
import { TbMessageCircle } from "react-icons/tb";
import { BlueprintLogo } from "@/assets/logos/BlueprintLogo";
import "@/styles/global.css";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.topBar}>
          <div className={styles.logo}>
            <BlueprintLogo />
          </div>
          <span className={styles.headerText}>
            <span className={styles.blueprint}>blueprint</span> volunteers
          </span>
        </div>

        <div className={styles.contentScroll}>
          <div className={styles.headerContainer}>
            <ProfileIcon size={40} fill="#D9D9D9" stroke="none" />
            <div>
              <p className={styles.headerUsername}>
                <b>neha32</b> at <b>Mission Bit</b>
              </p>
              <p className={styles.headerSub}>San Francisco, CA</p>
            </div>
          </div>

          <img
            src="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
            alt="San Francisco"
            className={styles.postImage}
          />

          <p className={styles.postDesc}>
            This past weekend, I taught at Mission Bit. I was working with a
            group of high school students who were building their first web
            pages. I really enjoyed being able to help guide 10 students on
            learning CS fundamentals through a project! They were all really
            eager to learn, and I&#39;m glad I signed up. Highly recommend to
            any other software engineers interested in volunteering! Sign-up
            here: https://missionbit.org/get-involved/volunteer-with-us/
          </p>

          <div className={styles.footer}>
            <p className={styles.footerText}>3 Likes</p>
            <p className={styles.footerText}>View 2 Comments</p>
          </div>
          <div className={styles.footerIcons}>
            <HeartIcon size={30} strokeWidth={1.5} />
            <TbMessageCircle size={30} strokeWidth={1.5} />
            <ShareIcon size={30} strokeWidth={0.1} className={styles.send} />
          </div>

          <p className={styles.date}>February 1</p>

          <hr className={styles.divider} />

          <div className={styles.headerContainer}>
            <ProfileIcon size={40} fill="#D9D9D9" stroke="none" />
            <div>
              <p className={styles.headerUsername}>
                <b>aiden_ugh</b> at <b>Boys and Girls Club</b>
              </p>
              <p className={styles.headerSub}>Oakland, CA</p>
            </div>
          </div>

          <p className={styles.postDesc}>
            I recently volunteered at my local Boys and Girls Club!
          </p>
        </div>
      </div>
    </main>
  );
}
