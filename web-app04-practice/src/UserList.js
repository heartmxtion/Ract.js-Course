import styles from "./UserList.module.css";

function UserList(props) {
  return (
    <form className={styles["form"]}>
      <ul className={styles["user-list"]}>
        <li className={styles["list-item"]}>{props.userText}</li>
      </ul>
    </form>
  );
}

export default UserList;
