import styles from "./AddUser.module.css";

function AddUser() {

  

  return (
    <form className={styles["form"]}>
      <div>
        <p>Username</p>
        <input type="text"></input>
        <p>Age (Years)</p>
        <input type="number"></input>
        <input type="submit" value="Add User"></input>
      </div>
    </form>
  );
}

export default AddUser;
