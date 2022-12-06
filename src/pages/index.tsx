import { type NextPage } from "next";
import Head from "next/head";
import ExampleOne from "../modules/exampleOne";
import ExampleThree from "../modules/exampleThree";
import ExampleTwo from "../modules/exampleTwo";

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
