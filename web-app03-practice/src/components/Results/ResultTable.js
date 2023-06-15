import styles from "./ResultTable.module.css";

function ResultTable(props) {
  const yearlyData = props.data;
  return (
    <table className={styles["result"]}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((item) => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{'$' + item.savingsEndOfYear}</td>
            <td>{'$' + item.yearlyInterest}</td>
            <td>{'$' + item.totalInterest}</td>
            <td>{'$' + item.totalInvested}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultTable;
