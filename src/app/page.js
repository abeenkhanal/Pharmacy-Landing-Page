import Banner from "@/components/Banner/Banner";
import Featuresdata from "@/components/Featuresdata/Featuresdata";
import Hero from "@/components/Hero/Hero";
import Revolutionize from "@/components/Revolutionize/Revolutionize";
import Testimonials from "@/components/Testimonials/Testimonials";
import { FaChartBar, FaCogs, FaFilePrescription, FaPills, FaTruck, FaUsers } from "react-icons/fa";

export default function Home() {
  const features = [
    {
      icon: <FaPills size={70} className="text-white bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-full shadow-md" />,
      title: "Inventory Management",
      description: "Track and manage stock levels effortlessly.",
    },
    {
      icon: <FaFilePrescription size={70} className="text-white bg-gradient-to-r from-green-500 to-green-700 p-4 rounded-full shadow-md" />,
      title: "Prescription Tracking",
      description: "Easily manage and track prescriptions.",
    },
    {
      icon: <FaUsers size={70} className="text-white bg-gradient-to-r from-purple-500 to-purple-700 p-4 rounded-full shadow-md" />,
      title: "Team Collaboration",
      description: "Improve communication among pharmacy staff.",
    },
    {
      icon: <FaChartBar size={70} className="text-white bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 rounded-full shadow-md" />,
      title: "Sales Reports",
      description: "Analyze and generate detailed sales reports.",
    },
    {
      icon: <FaCogs size={70} className="text-white bg-gradient-to-r from-pink-500 to-pink-700 p-4 rounded-full shadow-md" />,
      title: "Customizable Dashboard",
      description: "Personalize your workflow for better productivity.",
    },
    {
      icon: <FaTruck size={70} className="text-white bg-gradient-to-r from-red-500 to-red-700 p-4 rounded-full shadow-md" />,
      title: "Supplier Management",
      description: "Efficiently manage and track suppliers.",
    },
  ];
  return (
   <div>
      <Hero/>
      <Banner/>
      <Revolutionize/>
      <Featuresdata features={features} />
      <Testimonials/>
      
   </div>
  );
}
