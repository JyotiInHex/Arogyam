// import { createContext, useContext, useState } from "react";

// const SiteContext = createContext();

// export const SiteProvider = ({ children }) => {
//     const [navLinks, setNavLinks] = useState([
//         { name: 'About', path: "/about" },
//         { name: 'Features', path: "/features" },
//         { name: 'Contact', path: "/contact" },
//     ])

//     return (
//         <SiteContext.Provider value={{ navLinks }}>
//             {children}
//         </SiteContext.Provider>
//     )
// }

// export const useSiteContext = () => {
//     return useContext(SiteContext);
// };