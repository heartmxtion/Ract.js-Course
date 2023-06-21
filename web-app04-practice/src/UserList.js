import styles from "./UserList.module.css";

function UserList(props) {

  const userData = props.OnUserData;

  return (
    <ul className={styles["user-list"]}>
      {userData.map((item) => (<li key = {item.key} className={styles["list-item"]}>
        {item.name + " (" + item.age + " years old)"}
      </li>))}
    </ul>
  );
}

export default UserList;
