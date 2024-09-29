import styles from "@/styles/Home.module.css";
import Link from "next/link";
export default function GridSpecific({ title, content, page1, page2, page3 }) {
  return (
    <div className={styles.grid__item}>
      <div className={styles.grid__circle__topleft}></div>
      <div className={styles.grid__circle__topright}></div>
      <div className={styles.grid__circle__bottomleft}></div>
      <div className={styles.grid__circle__bottomright}></div>
      <div className={styles.grid__content}>
        <div className={styles.grid__title}>{title}</div>
        <div className={styles.grid__textTwo}>
          <span>{content}</span>
        </div>
        <div className="tw-flex tw-h-full tw-py-[5%] tw-justify-evenly tw-flex-col">
        <Link className={styles.link} href={`/${page1}`}>
          <button
            className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-bg-ieeeorange tw-border-ieeeorange tw-rounded-full tw-border-solid tw-border-2 tw-w-full tw-h-full hover:tw-bg-ieeeorangedark hover: hover:tw-border-ieeeorangedark tw-text-lg"
            type="submit"
          >
            Robotics
          </button>
        </Link>
        <Link className={styles.link} href={`/${page2}`}>
          <button
            className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-bg-ieeeorange tw-border-ieeeorange tw-rounded-full tw-border-solid tw-border-2 tw-w-full tw-h-full hover:tw-bg-ieeeorangedark hover: hover:tw-border-ieeeorangedark tw-text-lg"
            type="submit"
          >
            PES
          </button>
        </Link>
        <Link className={styles.link} href={`/${page3}`}>
          <button
            className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-bg-ieeeorange tw-border-ieeeorange tw-rounded-full tw-border-solid tw-border-2 tw-w-full tw-h-full hover:tw-bg-ieeeorangedark hover: hover:tw-border-ieeeorangedark tw-text-lg"
            type="submit"
          >
            RF
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}
