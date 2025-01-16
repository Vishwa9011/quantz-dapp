import DashboardGuideCard from "../components/Dashboard/DashboardGuideCard";
import { useEffect, useState } from "react";
import developerImage from "../assets/images/developer.png";
import processorImage from "../assets/images/processor.png";
import GreetTab from "../components/shared/GreetTab";
import BalanceCard from "@/components/shared/BalanceCard";
import { fetchWrapper } from "@/lib/utils";
import { UserInfo } from "@/lib/types/userInfo.type";
import { useAccount } from "wagmi";
import WhyProvider from "@/components/whyQuantz/WhyProvider";
import WhyDeployer from "@/components/whyQuantz/WhyDeployer";
import { useBrowserName } from "@/hooks/useBrowserInfo";

const Dashboard = () => {
   const { address } = useAccount();
   const userId = address;
   const borwserInfo = useBrowserName();
   console.log("borwserInfo", borwserInfo);
   const [userDetails, setUserDetails] = useState<UserInfo | null>(null);
   const fetchUser = async () => {
      try {
         const user = await fetchWrapper<UserInfo>("/user/me/latest");
         console.log(user);
         setUserDetails(user);
      } catch (error) {
         console.log("error: ", error);
      }
   };

   useEffect(() => {
      if (userId) {
         fetchUser();
      }
   }, [userId]);

   const cardsData = [
      {
         image: processorImage,
         title: "Provider",
         heading: "Provide Power, Earn Rewards",
         descrtiption:
            "Share your device’s processing power on QuantZ’s dedicated token farming page to earn rewards effortlessly. Simply stay active, and watch your contributions grow into token earnings!",
         buttonText1: "Get Started",
         buttonLink1: "/provider",
         buttonText2: "Learn More",
         buttonLink2: "#",
         bgClassName: "processor-card-gradient",
      },
      {
         image: developerImage,
         title: "Deployer",
         heading: "Launch on Decentralized Compute",
         descrtiption:
            "Deploy your tasks to QuantZ’s decentralized network, where they’re processed across a network of users providing power. Smooth, efficient, and distributed—QuantZ transforms deployment into a truly decentralized experience.",
         buttonText1: "Coming Soon",
         buttonLink1: "/create",
         buttonText2: "Learn More",
         buttonLink2: "#",
         bgClassName: "developer-card-gradient",
      },
   ];

   return (
      <div className="flex flex-col gap-[2rem]">
         <p className="text-[1.125rem] font-[700]">Dashboard</p>

         <GreetTab
            heading="Step into the World of QuantZ!"
            descrtiption="Where your device’s processing power transforms into token rewards! Simply stay on our dedicated farming page, and watch your contributions generate value in real-time."
         />

         <div className="flex flex-col gap-[1rem] 1000:flex-row">
            {cardsData.map((card) => (
               <DashboardGuideCard
                  key={card.title}
                  image={card.image}
                  title={card.title}
                  heading={card.heading}
                  descrtiption={card.descrtiption}
                  buttonText1={card.buttonText1}
                  buttonLink1={card.buttonLink1}
                  buttonText2={card.buttonText2}
                  buttonLink2={card.buttonLink2}
                  bgClassName={card.bgClassName}
               />
            ))}
         </div>

         <BalanceCard dashboard={true} rewards={userDetails?.rewards || 0} />

         <WhyProvider />
         <WhyDeployer />
      </div>
   );
};

export default Dashboard;
