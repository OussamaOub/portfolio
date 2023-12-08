import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import Landing from "./pages/Landing.tsx";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <NextUIProvider>
      <Landing />
      <Analytics />
    </NextUIProvider>
  </>
);
