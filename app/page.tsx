import ContactUs from "@/components/Home/ContactUs";
import Home from "@/components/Home/Home";
import Home2 from "@/components/Home/Home2";
import Home3 from "@/components/Home/Home3";
import { Projects } from "@/components/Home/Projects";
import Team from "@/components/Home/Team";

export default function App() {
  return (
    <div>
      <Home/>
      <Home2/>
      <Home3/>
      <Team/>
      <Projects/>
      <ContactUs/>
    </div>
  );
}