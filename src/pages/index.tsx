import { type NextPage } from "next";
import Head from "next/head";
import ExampleOne from "../modules/exampleOne/exampleOne";
import ExampleThree from "../modules/exampleThree/exampleThree";
import ExampleTwo from "../modules/exampleTwo/exampleTwo";

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Dellamora animations</title>
    </Head>
    <ExampleOne/>
    <ExampleTwo/>
    <ExampleThree/>
    </>
  );
};

export default Home;
