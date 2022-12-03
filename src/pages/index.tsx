import { type NextPage } from "next";
import ExampleOne from "../modules/exampleOne/exampleOne";
import ExampleThree from "../modules/exampleThree";
import ExampleTwo from "../modules/exampleTwo/exampleTwo";

const Home: NextPage = () => {
  return (
    <>
    <ExampleOne/>
    <ExampleTwo/>
    <ExampleThree/>
    </>
  );
};

export default Home;
