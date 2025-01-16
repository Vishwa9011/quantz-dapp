import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "@rainbow-me/rainbowkit/styles.css";
import { Web3Provider } from "./context/web3-provider";
import { Toaster } from "sonner";
import { ManageFormProvider } from "./context/ManageForm";

createRoot(document.getElementById("root")!).render(
   <Web3Provider>
      <BrowserRouter>
         <ManageFormProvider>
            <App />
            <Toaster richColors position="top-right" closeButton />
         </ManageFormProvider>
      </BrowserRouter>
   </Web3Provider>,
);
