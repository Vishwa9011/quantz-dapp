import BraveIcon from "@/assets/Icons/ChooseBrowserIcons/BraveIcon";
import CloudIcon from "@/assets/Icons/CloudIcon";
import { BrowserData } from "../types/components.types";
import MicrosoftEdgeIcon from "@/assets/Icons/ChooseBrowserIcons/EdgeIcon";
import FirefoxIcon from "@/assets/Icons/ChooseBrowserIcons/FirefoxIcon";
import ChromeIcon from "@/assets/Icons/ChooseBrowserIcons/ChromeIcon";
import OperaIcon from "@/assets/Icons/ChooseBrowserIcons/OperaIcon";
import SafariIcon from "@/assets/Icons/ChooseBrowserIcons/SafariIcon";
import TorIcon from "@/assets/Icons/ChooseBrowserIcons/TorIcon";

export const howItWorksData = [
   {
      id: "car345",
      title: "Step-1",
      description: "Stay on our dedicated farming page, where all processing contributions take place seamlessly.",
      icon: CloudIcon,
   },
   {
      id: "car346",
      title: "Step-2",
      description: "Your computer’s resources join the QuantZ network, supporting tasks across a decentralized system without manual steps.",
      icon: CloudIcon,
   },
   {
      id: "car347",
      title: "Step-3",
      description: "Watch as your processing power turns into token rewards, building value with every moment you stay active.",
      icon: CloudIcon,
   },
];

export const whySystemDetails = [
   {
      id: "car348",
      title: "Optimize Resource Allocation",
      description: "Your system details help us match the right tasks with your computer’s capabilities, ensuring efficient processing and maximizing your earning potential.",
      icon: CloudIcon,
   },
   {
      id: "car349",
      title: "Ensure Network Stability",
      description:
         "By understanding your system’s specs, we can maintain a stable and secure connection within the decentralized network, preventing interruptions in your contributions.",
      icon: CloudIcon,
   },
   {
      id: "car350",
      title: "Enhance Compatibility",
      description: "With accurate system info, we can deploy tasks that best fit your computer’s performance, ensuring smooth and effective processing on the QuantZ network.",
      icon: CloudIcon,
   },
];

export const browsersData: BrowserData[] = [
   {
      id: "brave",
      icon: BraveIcon,
      browser: "Brave",
   },
   {
      id: "edge",
      icon: MicrosoftEdgeIcon,
      browser: "Microsoft Edge",
   },
   {
      id: "firefox",
      icon: FirefoxIcon,
      browser: "Mozilla Firefox",
   },
   {
      id: "chrome",
      icon: ChromeIcon,
      browser: "Google Chrome",
   },
   {
      id: "opera",
      icon: OperaIcon,
      browser: "Opera",
   },
   {
      id: "safari",
      icon: SafariIcon,
      browser: "Safari",
   },
   {
      id: "tor",
      icon: TorIcon,
      browser: "Tor",
   },
];

export const PCBrandNames = [
   { value: "Asus", label: "Asus" },
   { value: "Acer", label: "Acer" },
   { value: "Dell", label: "Dell" },
   { value: "HP", label: "HP" },
   { value: "Apple", label: "Apple" },
   { value: "Lenovo", label: "Lenovo" },
   { value: "MSI", label: "MSI" },
   { value: "Microsoft", label: "Microsoft" },
   { value: "Razer", label: "Razer" },
   { value: "Samsung", label: "Samsung" },
   { value: "Sony", label: "Sony" },
   { value: "Toshiba", label: "Toshiba" },
   { value: "Others", label: "Others" },
];

export const PCModelNames = {
   Asus: [
      { value: "ASUS VivoBook Series", label: "ASUS VivoBook Series" },
      { value: "ASUS ZenBook Series", label: "ASUS ZenBook Series" },
      { value: "ASUS TUF Gaming Series", label: "ASUS TUF Gaming Series" },
      { value: "ASUS ROG Series", label: "ASUS ROG Series" },
      { value: "ASUS ExpertBook Series", label: "ASUS ExpertBook Series" },
      { value: "ASUS Chromebook Series", label: "ASUS Chromebook Series" },
      { value: "ASUS ProArt StudioBook Series", label: "ASUS ProArt StudioBook Series" },
      { value: "Others", label: "Others" },
   ],
   Acer: [
      { value: "Acer Aspire Series", label: "Acer Aspire Series" },
      { value: "Acer Swift Series", label: "Acer Swift Series" },
      { value: "Acer Spin Series", label: "Acer Spin Series" },
      { value: "Acer Switch Series", label: "Acer Switch Series" },
      { value: "Acer Chromebook Series", label: "Acer Chromebook Series" },
      { value: "Acer Predator Series", label: "Acer Predator Series" },
      { value: "Acer ConceptD Series", label: "Acer ConceptD Series" },
      { value: "Others", label: "Others" },
   ],
   Dell: [
      { value: "Dell Inspiron Series", label: "Dell Inspiron Series" },
      { value: "Dell Latitude Series", label: "Dell Latitude Series" },
      { value: "Dell XPS Series", label: "Dell XPS Series" },
      { value: "Dell Precision Series", label: "Dell Precision Series" },
      { value: "Dell Alienware Series", label: "Dell Alienware Series" },
      { value: "Dell G Series", label: "Dell G Series" },
      { value: "Others", label: "Others" },
   ],

   HP: [
      { value: "HP Chromebook Series", label: "HP Chromebook Series" },
      { value: "HP Pavilion Series", label: "HP Pavilion Series" },
      { value: "HP Envy Series", label: "HP Envy Series" },
      { value: "HP Elite Dragonfly Series", label: "HP Elite Dragonfly Series" },
      { value: "HP Spectre x360 Series", label: "HP Spectre x360 Series" },
      { value: "HP Omen Series", label: "HP Omen Series" },
      { value: "HP EliteBook Series", label: "HP EliteBook Series" },
      { value: "HP ZBook Series", label: "HP ZBook Series" },
      { value: "Others", label: "Others" },
   ],
   Apple: [
      { value: "MacBook Air Series", label: "MacBook Air Series" },
      { value: "MacBook Pro Series", label: "MacBook Pro Series" },
      { value: "Apple Silicon Chips (M1, M2)", label: "Apple Silicon Chips (M1, M2)" },
      { value: "Older Models (Intel-Based)", label: "Older Models (Intel-Based)" },
      { value: "Others", label: "Others" },
   ],
   Lenovo: [
      { value: "Lenovo IdeaPad Series", label: "Lenovo IdeaPad Series" },
      { value: "Lenovo ThinkPad Series", label: "Lenovo ThinkPad Series" },
      { value: "Lenovo Legion Series", label: "Lenovo Legion Series" },
      { value: " Lenovo Yoga Series", label: " Lenovo Yoga Series" },
      { value: "Lenovo Flex Series", label: "Lenovo Flex Series" },
      { value: "Lenovo ThinkBook Series", label: "Lenovo ThinkBook Series" },
      { value: "Lenovo ThinkPad X1 Fold", label: "Lenovo ThinkPad X1 Fold" },
      { value: "Lenovo ThinkPad X Series", label: "Lenovo ThinkPad X Series" },
      { value: "Others", label: "Others" },
   ],
   MSI: [
      { value: "MSI Modern Series", label: "MSI Modern Series" },
      { value: " MSI Summit Series", label: " MSI Summit Series" },
      { value: "MSI Prestige Series", label: "MSI Prestige Series" },
      { value: "MSI GE Series", label: "MSI GE Series" },
      { value: "MSI GS Series", label: "MSI GS Series" },
      { value: "MSI GT Series", label: "MSI GT Series" },
      { value: "MSI Alpha Series", label: "MSI Alpha Series" },
      { value: "MSI Creator Series", label: "MSI Creator Series" },
      { value: "Others", label: "Others" },
   ],
   Microsoft: [
      { value: "Surface Laptop Series", label: "Surface Laptop Series" },
      { value: "Surface Book Series", label: "Surface Book Series" },
      { value: "Surface Pro Series", label: "Surface Pro Series" },
      { value: "Surface Go Series", label: "Surface Go Series" },
      { value: "Surface Studio Series", label: "Surface Studio Series" },
      { value: "Surface Laptop Studio", label: "Surface Laptop Studio" },
      { value: "Surface Hub Series", label: "Surface Hub Series" },
      { value: "Others", label: "Others" },
   ],
   Razer: [
      { value: "Razer Blade Stealth Series", label: "Razer Blade Stealth Series" },
      { value: "Razer Blade 15 Series", label: "Razer Blade 15 Series" },
      { value: "Razer Blade 17 Series", label: "Razer Blade 17 Series" },
      { value: "Razer Blade 14 Series", label: "Razer Blade 14 Series" },
      { value: "Razer Book 13 Series", label: "Razer Book 13 Series" },
      { value: "Razer Blade Pro 17", label: "Razer Blade Pro 17" },
      { value: "Razer Blade Stealth 13 Ultrabook (Intel Evo)", label: "Razer Blade Stealth 13 Ultrabook (Intel Evo)" },
      { value: "Others", label: "Others" },
   ],
   Samsung: [
      { value: "Samsung Galaxy Book Series", label: "Samsung Galaxy Book Series" },
      { value: "Samsung Galaxy Book Flex Series", label: "Samsung Galaxy Book Flex Series" },
      { value: "Samsung Notebook Series", label: "Samsung Notebook Series" },
      { value: "Samsung Chromebook Series", label: "Samsung Chromebook Series" },
      { value: "Samsung Odyssey Series", label: "Samsung Odyssey Series" },
      { value: "Samsung Galaxy Book Ultra Series", label: "Samsung Galaxy Book Ultra Series" },
      { value: "Others", label: "Others" },
   ],
   Sony: [
      { value: "VAIO Fit Series", label: "VAIO Fit Series" },
      { value: "VAIO Pro Series", label: "VAIO Pro Series" },
      { value: "VAIO Z Series", label: "VAIO Z Series" },
      { value: "VAIO S Series", label: "VAIO S Series" },
      { value: "VAIO E Series", label: "VAIO E Series" },
      { value: "VAIO SX12 and SX14", label: "VAIO SX12 and SX14" },
      { value: "VAIO Z Series (2020+)", label: "VAIO Z Series (2020+)" },
      { value: "VAIO FE Series", label: "VAIO FE Series" },
      { value: "Others", label: "Others" },
   ],

   Toshiba: [
      { value: "Toshiba Satellite Series", label: "Toshiba Satellite Series" },
      { value: "Toshiba Tecra Series", label: "Toshiba Tecra Series" },
      { value: "Toshiba Portege Series", label: "Toshiba Portege Series" },
      { value: "Toshiba Qosmio Series", label: "Toshiba Qosmio Series" },
      { value: "Toshiba Chromebook Series", label: "Toshiba Chromebook Series" },
      { value: "Dynabook Portege Series", label: "Dynabook Portege Series" },
      { value: " Dynabook Tecra Series", label: " Dynabook Tecra Series" },
      { value: " Dynabook Satellite Pro Series", label: " Dynabook Satellite Pro Series" },
      { value: "Dynabook Chromebook Series", label: "Dynabook Chromebook Series" },
      { value: "Others", label: "Others" },
   ],

   Others: [{ value: "Others Model", label: "Others Model" }],
};

export const Processors = [
   { value: "Intel", label: "Intel" },
   { value: "AMD", label: "AMD" },
   { value: "Qualcomm", label: "Qualcomm" },
   { value: "Apple", label: "Apple" },
   { value: "Samsung", label: "Samsung" },
   { value: "MediaTek", label: "MediaTek" },
   { value: "Others", label: "Others" },
];

export const ram = [
   { value: "4GB", label: "4GB" },
   { value: "8GB", label: "8GB" },
   { value: "16GB", label: "16GB" },
   { value: "32GB", label: "32GB" },
   { value: "64GB+", label: "64GB+" },
   { value: "Others", label: "Others" },
];
