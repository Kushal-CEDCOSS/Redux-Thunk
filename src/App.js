import "./App.css";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./CommonMaps";

function App(props) {
  const handleClick = () => {
    props.fetchingData();
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Fetch Data</button>

      {props.data.length !== 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed ? "true" : "false"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
