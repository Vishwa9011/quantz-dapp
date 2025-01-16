import "@xterm/xterm/css/xterm.css";
import TypingText from "../TypingText";
import TabHeading from "../TabHeading";
import GlobeIcon from "@/assets/Icons/GlobeIcon";
import GreetTab from "@/components/shared/GreetTab";
import useBeforeUnload from "@/hooks/useBeforeUnload";
import TabWatcher from "@/components/shared/TabWatcher";
import { useSocketProvider } from "@/context/SocketProvider";
import BackgroundCard from "@/components/shared/BackgroundCard";
import { ManageFormProviderContext } from "@/context/ManageForm";
import { convertSecondsToHMS } from "@/lib/utils/convertSecondsToHMS";
import { useContext, useEffect, useRef, useState } from "react";

const TerminalTab = () => {
   const { disconnectSocket, terminalUserData, connectSocket, isConnected } = useSocketProvider();
   console.log("terminalUserData: ", terminalUserData);
   const intoView = useRef<HTMLDivElement>(null);
   const [currentIndex, setCurrentIndex] = useState(0);

   useBeforeUnload(() => {
      disconnectSocket();
      console.log("leaving");
   });

   const data = useContext(ManageFormProviderContext);
   if (data === null) throw new Error("Provider context is null");

   const scrollToBottom = () => {
      if (intoView.current) {
         intoView.current.scrollIntoView({ behavior: "smooth" });
      }
   };
   const userSelectedData = [
      `${data?.selectedBrowser} browser initated `,
      `Device Integrated: ${data?.systemDetails?.brandName}`,
      `System Model: ${data?.systemDetails?.modelName}`,
      `CPU: ${data?.systemDetails?.processor}`,
      `Memory Module: ${data?.systemDetails?.ram}`,
   ];

   const systemMessages = [
      "Booting up terminal...",
      "Initializing QUANTZ system ...",
      "Loading system configuration...",
      "Initializing network protocols...",
      "Establishing secure connection...",
      "Verifying hardware integrity...",
      "System check complete.",
      "Loading assets...",
   ];

   const connectionStatusMessage = isConnected ? "......" : "⚙️ Server Disconnected...";

   const allMessages = [
      ...systemMessages,
      ...userSelectedData,
      ...(terminalUserData?.map((data) => `active time: ${convertSecondsToHMS(data?.activeTime)} __ reward secured: ${data?.rewards} QUANTZ`) || []),
      connectionStatusMessage,
   ];

   useEffect(() => {
      scrollToBottom();
   }, [currentIndex]);

   useEffect(() => {
      if (currentIndex < allMessages.length - 1) {
         const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
         }, 2000); // Adjust the delay as needed

         return () => clearTimeout(timer);
      }
   }, [currentIndex, allMessages.length]);

   const stopServer = () => {
      disconnectSocket();
   };

   const startServer = () => {
      connectSocket();
   };

   return (
      <>
         <GreetTab
            heading="Terminal"
            descrtiption="The Terminal provides real-time system status updates as the setup process kicks off. It monitors the initialization of the QuantZ network, ensuring seamless integration and verifying hardware compatibility for optimal performance."
         />

         <BackgroundCard bgClassName="developer-card-gradient">
            <div className="flex flex-col items-center justify-center gap-[1.5rem]">
               <TabHeading heading="Terminal" icon={GlobeIcon} />
               {/* <div ref={terminalRef} className="w-full bg-[#191818]  p-4" id="terminal"></div> */}
               <div className="h-[20rem] w-full overflow-auto bg-[black] p-4">
                  {allMessages.slice(0, currentIndex + 1).map((message, index) => (
                     <TypingText
                        key={index}
                        text={message}
                        repeat={false}
                        grow={true}
                        hideCursorOnComplete={index < currentIndex} // Hide cursor for completed lines
                        alwaysVisibleCount={0}
                        className="font-Hacker text-[#149414]"
                     />
                  ))}
                  <div ref={intoView} />
               </div>
               <div className="w-full">
                  {isConnected ? (
                     <button className="border px-4 py-2" onClick={stopServer}>
                        Stop Server
                     </button>
                  ) : (
                     <button onClick={startServer} className="border px-4 py-2">
                        Start Server
                     </button>
                  )}
               </div>
            </div>
         </BackgroundCard>
         <TabWatcher />
      </>
   );
};

export default TerminalTab;
