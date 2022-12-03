import { type AppType } from "next/dist/shared/lib/utils";
import BasedLayout from "../common/layouts/basedLayout";

import "../common/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
   <BasedLayout>
   <Component {...pageProps} />
   </BasedLayout>
  )
};

export default MyApp;
