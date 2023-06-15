import Header from "./Header";
import ConceptsList from "./ConceptsList";
import keyConceptsImage from './assets/images/key-concepts.png';


function App() {
  return (
    <div>
      <Header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </Header>
      <ConceptsList />
    </div>
  );
}

export default App;
