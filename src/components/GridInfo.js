import styles from "@/styles/Home.module.css";
import Link from "next/link";
export default function GridInfo({ title, content, page }) {
  return (
    <div className={styles.grid__item}>
      <div className={styles.grid__circle__topleft}></div>
      <div className={styles.grid__circle__topright}></div>
      <div className={styles.grid__circle__bottomleft}></div>
      <div className={styles.grid__circle__bottomright}></div>
      <div className={styles.grid__content}>
        <div className={styles.grid__title}>{title}</div>
        <div className={styles.grid__text}>
          <span>{content}</span>
        </div>
        <Link className={styles.link} href={`/${page}`}>
          <button
            className="tw-transition tw-ease-in-out tw-delay-150 tw-text-white tw-bg-ieeeorange tw-border-ieeeorange tw-rounded-full tw-border-solid tw-border-2 tw-w-full tw-h-full hover:tw-bg-ieeeorangedark hover: hover:tw-border-ieeeorangedark tw-text-lg"
            type="submit"
          >
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
}
