import styles from "./PlayerCard.module.scss";

const PlayerCard = (props) => {
  let { playerData } = props;

  if(!playerData){
    playerData = {
      first_name: "?",
      last_name: "?",
      position: "?",
      team: {
        full_name: "?",
        city: "?",
        conference: "?",
        division: "?"
      }
    }
  }

  let extraStyles = {};

  if(props.extraStyles){
    extraStyles = props.extraStyles;
  }
  return (
    <div className={styles.playerCard} style={extraStyles}>
      <div className={styles["playerCard__wrapper"]}>
        <div className={styles["playerCard__banner"]}>
          <h1>
            {playerData.first_name} {playerData.last_name}
          </h1>
        </div>
        <table className={styles["playerCard__table"]}>
          <tbody>
          <tr>
            <td>Team</td>
            <td>{playerData.team.full_name}</td>
          </tr>
          <tr>
            <td>City</td> <td>{playerData.team.city}</td>
          </tr>
          <tr>
            <td>Conference</td> <td>{playerData.team.conference}</td>
          </tr>
          <tr>
            <td>Division</td> <td>{playerData.team.division}</td>
          </tr>
          <tr>
            <td>Position</td> <td>{playerData.position || "N/A"}</td>
          </tr>
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default PlayerCard;
