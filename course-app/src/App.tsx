import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import { courseParts } from "./data/courseParts"

const App = () => {
  const courseName = "Half Stack application development";

  return (
    <div>
      <Header title={courseName} />
      <Content courses={courseParts} />
      <Total courses={courseParts} />
    </div>
  );
};

export default App;
