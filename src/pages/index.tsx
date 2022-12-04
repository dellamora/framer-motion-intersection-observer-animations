import { type NextPage } from "next";
import ExampleOne from "../modules/exampleOne/exampleOne";
import ExampleTwo from "../modules/exampleTwo/exampleTwo";

const Home: NextPage = () => {
  return (
    <>
    <ExampleOne/>
    <ExampleTwo/>
    </>
  );
};

export default Home;
