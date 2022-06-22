import { useEffect, useState } from "react";
import useBreakpoints from "../../hooks/useBreakpoints";
import useHttp from "../../hooks/useHttp";
import { getAllPlayers } from "../../lib/api";
import PlayerCard from "./PlayerCard";
import styles from "./PlayerList.module.scss";

const PlayerList = () => {
  const { isXs, isSm, isMd, isLg, active, isMobile } = useBreakpoints();

  const [randomPlayer, setRandomPlayer] = useState(null);

  

  let useMobile = isMd || isSm || isXs;

  const {
    sendRequest,
    status,
    data: loadedPlayerData,
    error,
  } = useHttp(getAllPlayers, true);

  const selectRandomPlayer = () => {
    
    if(!loadedPlayerData) {
      return;
    }
    

    setRandomPlayer(() => {
      let randomIndex = Math.floor(loadedPlayerData.data.length * Math.random());

      return loadedPlayerData.data[randomIndex];

    })
  }

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);


  let cardBasis = "33%";

  if (useMobile) {
    cardBasis = "100%";
  }

 

  const randomPlayerSection = (
    <section>
      <h1 className="section-heading">
       Random Player
      </h1>
      <PlayerCard
              playerData={randomPlayer}
              extraStyles={{ "width": cardBasis, "margin":"0 auto" }}
            />
      <div className="centered">
        <button className={styles["randomPlayer__button"]} onClick={selectRandomPlayer}>Random Player</button>

      </div>

    
    </section>
  );

  return (
    <>
      <section className="section">
        <h1 className="section-heading">
          {status === "pending" && "Loading Players..."}
          {error && "Could not fetch player data"}
          {!error && status == "completed" && "Players"}
        </h1>
        <div className={styles.playerList}>
          {status === "completed" &&
            !error &&
            loadedPlayerData.data.map((player, index) => (
              <PlayerCard
                key={index}
                playerData={player}
                extraStyles={{ "flexBasis": cardBasis }}
                
              />
            ))}
        </div>
      </section>
      {status === "completed" && !error && randomPlayerSection}
    </>
  );
};

export default PlayerList;
