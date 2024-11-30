import { useLanguage } from "../context/LanguageContext";



function Projects() {
    const { translate } = useLanguage();
    const projects = translate("projects");
    console.log(projects.myProjects)
    return (
        <>
            <section className="px-[18vw] py-24 min-h-80  content-center bg-[#FFFFFF] text-center dark:bg-[#484148] dark:text-[#F4F4F4]">
                <h1>{projects.h1}</h1>
                <div className="flex flex-row text-left flex-wrap md:flex-nowrap">
                    {
                        projects.myProjects.map(project => (
                            <div key={project.id} className="p-3 mx-2 my-3 ">
                                <h1>{project.h1}</h1>
                                <p>{project.text}</p>
                                <div className="flex flex-row flex-wrap">
                                    {
                                        project.materials.map(material => {
                                            return <p className="p-2" key={material}>{material}</p>
                                        })
                                    }
                                </div>
                                <div className="flex justify-between">
                                    <a href={project.viewLink}>{project.viewText}</a>
                                    <a href={project.appLink}>{project.appText}</a>
                                </div>
                                <img src={project.imgLink}></img>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Projects