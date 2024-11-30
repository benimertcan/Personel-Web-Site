import { useLanguage } from "../context/LanguageContext";



function Projects() {
    const { translate } = useLanguage();
    const projects = translate("projects");

    return (
        <>
            <section className="px-[18vw] py-24 min-h-80  content-center bg-[#FFFFFF] text-center dark:bg-[#484148] dark:text-[#F4F4F4]">
            <h1>{projects.h1}</h1>
            </section> 
        </>
    )
}

export default Projects