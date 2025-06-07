import { createContext, useContext, useEffect } from "react";
import { useState } from "react"
import { myDetails,myCertificates,myEducation,myProjects,mySkills } from "../Data"

export const AppContext = createContext();

export function AppContextProvider({children}) {
    const [details,setDetails] = useState(myDetails);
    const [certificates,setCertificates] = useState(myCertificates);
    const [education,setEducation] = useState(myEducation);
    const [projects,setProjects] = useState(myProjects);
    const [myskills,setMyskills] = useState(mySkills);

    const [screenSize,setScreenSize] = useState(window.innerWidth);
    const handleResize = () => {
        const width = document.documentElement.clientWidth;
        setScreenSize(width);
    };
    useEffect(() => {
        handleResize();
        window.addEventListener("resize",handleResize);
        return () => window.removeEventListener("resize",handleResize);
    },[]);

    const datas = {
        details,setDetails,
        certificates,setCertificates,
        education,setEducation,
        projects,setProjects,
        myskills,setMyskills,
        screenSize,setScreenSize
    };

    return <AppContext.Provider value={datas}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext);