//creates a row of 3 cards equally spaced, each card includes a single accoridan feature

import Accordian from "./Accordian";
interface Props {
  cardContentOne: string;
  cardBodyOne: string;
  sourceOne: string;
  cardContentTwo: string;
  cardBodyTwo: string;
  sourceTwo: string;
  cardContentThree: string;
  cardBodyThree: string;
  sourceThree: string;
}

function CardGrid({
  cardContentOne,
  cardBodyOne,
  sourceOne,
  cardContentTwo,
  cardBodyTwo,
  sourceTwo,
  cardContentThree,
  cardBodyThree,
  sourceThree,
}: Props) {
  return (
    <div className="container text-center" style={{ padding: "20px" }}>
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "18rem", margin: "auto" }}>
            <img
              src={sourceOne}
              className="card-img-top"
              alt="Card 1 image"
              width="200"
              height="190"
            />
            <div className="card-body text-center">
              <Accordian header={cardContentOne} body={cardBodyOne} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "18rem", margin: "auto" }}>
            <img
              src={sourceTwo}
              className="card-img-top"
              alt="Card 2 image"
              width="200"
              height="190"
            />
            <div className="card-body text-center">
              <Accordian header={cardContentTwo} body={cardBodyTwo} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "18rem", margin: "auto" }}>
            <img
              src={sourceThree}
              className="card-img-top"
              alt="Card 3 image"
              width="200"
              height="190"
            />
            <div className="card-body text-center">
              <Accordian header={cardContentThree} body={cardBodyThree} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
