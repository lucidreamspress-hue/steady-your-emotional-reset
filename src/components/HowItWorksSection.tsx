import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import howItWorksMockup from "@/assets/how-it-works-mockup.png";
import howItWorksMockup2 from "@/assets/how-it-works-mockup-2.png";
import howItWorksMockup3 from "@/assets/how-it-works-mockup-3.png";

const steps = [
  { number: "1", title: "Tell Steady how you feel", description: "Pick from overwhelmed, stuck, or numb — or just tap reset.", image: howItWorksMockup },
  { number: "2", title: "Get a tailored micro-tool", description: "Breathing, grounding, or attention-shifting in under a minute.", image: howItWorksMockup2 },
  { number: "3", title: "Feel steadier, fast", description: "Most resets take about 60 seconds.", image: howItWorksMockup3 },
];

const HowItWorksSection = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    


      


        
          How it works
        

        


          


            {steps.map((step, i) => (
              
                

{step.number}


                


                  

{step.title}


                  

{step.description}


                


              
            ))}
          


          


            
              {steps.map((step, idx) =>
                activeImage === idx ? (
                  
                ) : null
              )}
            
          


        



        


          {steps.map((step, i) => (
            
              


                
              


              


                

{step.number}


                

{step.title}


                

{step.description}


              


            
          ))}
        


      


    

  );
};

export default HowItWorksSection;