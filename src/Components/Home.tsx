//front page, includes link to create an appointment
import Image from "./Image";
import Body from "./Body";
import Button from "./Button";
import CardGrid from "./CardGrid";
import NavBar from "./NavBar";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToAppts = () => {
    navigate("/Appts");
  };
  return (
    <div>
      <NavBar />
      <h1 className="text-center" style={{ padding: "10px" }}>
        Pet Parlor
      </h1>
      <Image
        source="src/Images/dog_bath.jpg"
        caption="Does this look familiar?"
      />
      <Body content="Let us help you. At Pet Parlor, we specialize in grooming pets of all shapes and sizes. No matter how stubborn!" />
      <Button content="Create an Appointment" onClick={goToAppts} />
      <CardGrid
        cardContentOne="Fast"
        cardBodyOne="We know the inconvenience grooming can cause your pet. To minimize this, we get them in and out as fast as possible."
        sourceOne="src/Images/fast_dog.jpeg"
        cardContentTwo="Gentle"
        cardBodyTwo="We know how important your pet is to you. At Pet Parlor, we take good care of your pet."
        sourceTwo="src/Images/friendly_dog.jpeg"
        cardContentThree="Affordable"
        cardBodyThree="Many pet grooming services can break the bank. Here we offer services of the best quality for an afforable price."
        sourceThree="src/Images/affordable_dog.jpg"
      />
    </div>
  );
}
export default Home;
