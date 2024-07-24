//display services and prices with images
import CardGrid from "./CardGrid";
import Image from "./Image";
import NavBar from "./NavBar";
function ServicesandPricing() {
  return (
    <div>
      <NavBar />
      <Image source="src/Images/dog_bath_happy.jpeg" caption="Services" />
      <CardGrid
        cardContentOne="Bath"
        cardBodyOne="Basic bath with your choice of scented shampoo and conditoner. Price: $20"
        sourceOne="src/Images/Dog-in-a-Bathtub.jpg"
        cardContentTwo="Nail Trim"
        cardBodyTwo="Nails are cut if needed and rounded with electric trimmer. Price: $10"
        sourceTwo="src/Images/Dog-nail-trimming.jpeg"
        cardContentThree="Deshedding"
        cardBodyThree="Bath with deshedding shampoo and your choice of scented conditoner. Coat dried with high-powered dryer and brushed out with a comb. Price: $35"
        sourceThree="src/Images/deshed_dog.jpeg"
      />
    </div>
  );
}

export default ServicesandPricing;
