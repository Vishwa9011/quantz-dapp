import NFT from "@/pages/nft/NFT";
import Own from "@/pages/nft/Own";
import Mint from "@/pages/nft/Mint";
import Create from "@/pages/nft/Create";
import Dashboard from "@/pages/Dashboard";
import QuantumVault from "@/pages/QuantumVault";
import { Route, Routes } from "react-router-dom";
import Provider from "@/pages/crypto-minerx/Provider";
import Balances from "@/pages/crypto-minerx/Balances";
import HostSphere from "@/pages/host-sphere/HostSphere";
import CrypoMinerx from "@/pages/crypto-minerx/CrypoMinerx";
import Environments from "@/pages/host-sphere/Environments";
import Upload from "@/pages/host-sphere/resources/UploadZip";
import ConnectWallet from "@/pages/host-sphere/ConnectWallet";
import Resources from "@/pages/host-sphere/resources/Resources";
import ResourceConfig from "@/pages/host-sphere/resources/ResourceConfig";
import ResourceConfigEdit from "@/pages/host-sphere/resources/ResourceConfigEdit";

const AllRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/quantum-vault" element={<QuantumVault />} />
         <Route path="/nft/*" element={<NFT />}>
            <Route index element={<Create />} />
            <Route path="create" element={<Create />} />
            <Route path="own" element={<Own />} />
            <Route path="mint" element={<Mint />} />
         </Route>
         <Route path="/crypto-minerx/*" element={<CrypoMinerx />}>
            <Route index element={<Provider />} />
            <Route path="provider" element={<Provider />} />
            <Route path="balance" element={<Balances />} />
         </Route>
         <Route path="/host-sphere/*" element={<HostSphere />}>
            <Route index element={<ConnectWallet />} />
            <Route path="resources/*" element={<Resources />}>
               <Route index element={<Upload />} />
               <Route path="config" element={<ResourceConfig />} />
               <Route path="edit" element={<ResourceConfigEdit />} />
            </Route>
            <Route path="env" element={<Environments />} />
         </Route>
      </Routes>
   );
};

export default AllRoutes;
