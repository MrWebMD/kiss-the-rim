import styles from "./Header.module.scss";
import useBreakpoints from "../../hooks/useBreakpoints";

const Header = () => {

  const { isXs, isSm, isMd, isLg, active, isMobile } = useBreakpoints();



  let useMobile = isMd || isSm || isXs;
  
  return (
    <header className={styles.header}>
      <div className={useMobile ? styles["header__wrapper--mobile"] : styles["header__wrapper"]}>
        <div>
          <h1 className={`heading ${styles["header__title"]}`}>KISS THE RIM</h1>
          <h2>An implementation of the balldontlie API</h2>
          <p>By Dom</p>
        </div>
        <div  data-aos="fade-left" className={`${useMobile ? styles["header__basketball-player--mobile"] : styles["header__basketball-player"]}`}>
          {/* <img
            src="/images/basketball-player.png"
            className={styles["header__image"]}
          /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
