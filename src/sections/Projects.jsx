import { useEffect, useRef, useState } from "react"

const useIsMobile = (query = "(max-width : 639px)") => {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" && window.matchMedia(query).matches
    )

    useEffect(() => {
        if (typeof window === "undefined") return;
        const mql = window.matchMedia(query);
        const handler = (e) => setIsMobile(e.matches);

        mql.addEventListener("change", handler);
        setIsMobile(mql.matches);

        return () => mql.removeEventListener("change", handler);
    }, [query])

    return isMobile;
}

export default function Projects(){
    const isMobile = useIsMobile();
    const sceneRef = useRef(null);

    const projects = useMemo(() => [
        {
            title : "RePlay Gaming Encyclopedia",
            link: "github link",
            bgColor: "bg-gradient-to-r from-purple-600 to-blue-600",
            image: isMobile ? photo1 : img1
        },
        {
            title: "AstroGPT",
            link: "github link",
            bgColor: "bg-gradient-to-r from-purple-600 to-blue-600",
            image: isMobile ? photo2 : img2
        },
        
    ])

    return(
        <section id="projects" className="relative text-white"> 

        </section>
    )   
}