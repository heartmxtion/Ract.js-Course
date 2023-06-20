import styles from "./UserList.module.css";

function UserList(props) {
  return (
    <ul className={styles["user-list"]}>
      <li className={styles["list-item"]}>
        {props.OnUserName + " (" + props.OnUserAge + " years old)"}
      </li>
    </ul>
  );
}

export default UserList;
