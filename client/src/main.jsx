import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
// import {Goerli} from '@thirdweb-dev/chains'
// import "./styles/globals.css";
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import { StateContextProvider } from "./context";


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "ethereum";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    {/* <ThirdwebProvider activeChain={activeChain}> */}
    <ThirdwebProvider activeChain={Sepolia}
    clientId="635c7b1bde005a9e61e229ca8296fab5">
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);
