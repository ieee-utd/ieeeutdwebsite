import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import styles from "../styles/Navigation.module.css";

export default function HamburgerMenu(props) {
  return (
    <div className={styles.hamburger__container}>
      {props.burgerOpen ? (
        <button
          onClick={() => {
            props.setBurgerOpen(props.burgerOpen ? false : true);
          }}
        >
          <MdClose size={64} className={styles.hamburger__menu} />
        </button>
      ) : (
        <button
          onClick={() => {
            props.setBurgerOpen(props.burgerOpen ? false : true);
          }}
        >
          <GiHamburgerMenu size={64} className={styles.hamburger__menu} />
        </button>
      )}
    </div>
  );
}
