import { useState } from "react";
import rocket from "./rocket.svg";
import smoke from "./smoke.svg";
import '../styles/styles.css';



const Button = () => {
  const [isLaunching, setIsLaunching] = useState(false);
  const handleClick = () => {
    setIsLaunching(true);
    setTimeout(() => {
      setIsLaunching(false);
    }, 3000);
  };

    
  return (
    
      <button onClick={handleClick} className={isLaunching ? "launching" : ""}>
      <img className="rocket" alt='btn' src={rocket} />
      <span>Launch</span>
      <img className="smoke" alt='btn' src={smoke} />
    </button>
  
    
  )
}

export default Button


