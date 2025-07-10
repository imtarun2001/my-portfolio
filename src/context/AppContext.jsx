import { createContext, useContext, useEffect } from "react";
import { useState } from "react"
import { myDetails,myCertificates,myEducation,myProjects,mySkills, myDigitalAccounts } from "../Data"

export const AppContext = createContext();

export function AppContextProvider({children}) {
    const [details,setDetails] = useState(myDetails);
    const [projects,setProjects] = useState(myProjects);
    const [myskills,setMyskills] = useState(mySkills);
    const [certificates,setCertificates] = useState(myCertificates);
    const [education,setEducation] = useState(myEducation);
    const [digitalAccounts,setDigitalAcounts] = useState(myDigitalAccounts);

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



    const [lightmode,setLightmode] = useState(false);
    const lightmodeHandler = () => {
        setLightmode(prev => !prev);
    }

    const datas = {
        details,setDetails,
        projects,setProjects,
        myskills,setMyskills,
        certificates,setCertificates,
        education,setEducation,
        digitalAccounts,setDigitalAcounts,
        screenSize,setScreenSize,
        lightmode,setLightmode,
        lightmodeHandler
    };

    return <AppContext.Provider value={datas}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext);