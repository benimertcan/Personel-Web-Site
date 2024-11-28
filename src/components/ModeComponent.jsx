

import { IoMoon } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import useLocalStorage from "../hooks/useLocalStorage";

function ModeComponent() {
    const [dark, setDark] = useLocalStorage("theme", false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    return (
        <>
            <div className="flex flex-row items-center delay-700 text-opacity-10 text-[#777777]"   onClick={() => darkModeHandler()} >      
                <div  className="mr-3 w-14 flow-root dark:bg-black bg-[#E92577] rounded-2xl transition duration-700 ">
                    {
                        dark && 
                        <IoMoon className="float-left m-1 transition text-white"/>
                    }
                    {
                        !dark && <FaCircle className="float-right m-1 transition  text-[#FFE86E]"/>
                    }
                </div>    
                {
                    dark && 
                    <p className="font-semibold text-[#D9D9D9]">LIGHT MODE</p>
                }
                {
                    !dark && <p className="font-semibold  text-[#777777]">DARK MODE</p>
                }
            </div>
        </>
    )
}

export default ModeComponent