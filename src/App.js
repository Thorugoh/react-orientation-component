import { Column } from "./Column";
import { Row } from "./Row";
import "./styles.css";

export default function App() {
  return <FirstComponent />;
  // return <SecondComponent />;
  // return <ThirdComponent />;
}

const FirstComponent = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>Child 1</div>
        <div style={{ display: "flex", flexDirection: "row" }}>Child 2</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>Child 3</div>
        <div style={{ display: "flex", flexDirection: "row" }}>Child 4</div>
      </div>
    </div>
  );
};

const SecondComponent = () => {
  return (
    <div className="row">
      <div className="column">
        <div className="row"> Child 1 </div>
        <div className="row"> Child 2 </div>
      </div>
      <div className="column">
        <div className="row"> Child 3 </div>
        <div className="row"> Child 4 </div>
      </div>
    </div>
  );
};

const ThirdComponent = () => {
  return (
    <Row>
      <Column>
        <Row> Child 1</Row>
        <Row> Child 2</Row>
      </Column>
      <Column>
        <Row> Child 3</Row>
        <Row> Child 4</Row>
      </Column>
    </Row>
  );
};
