import { useLanguage } from "../context/LanguageContext";



function Skills() {
    const { translate } = useLanguage();
    const skills = translate("skills");

    return (
        <>
            <section className="px-32 min-h-80 content-center bg-white text-center dark:bg-[#484148] dark:text-[#F4F4F4]">
                <h1 className="my-10 font-medium text-5xl leading-tight tracking-normal">Skills</h1>
                <div className="flex flex-row justify-evenly flex-wrap">
                    <div className="flex flex-col size-20">
                        <img src={skills.javascriptSRC}></img>
                        <p>{skills.javascriptAlt}</p>
                    </div>
                    <div className="flex flex-col size-20">
                        <img src={skills.reactSRC}></img>
                        <p>{skills.reactAlt}</p>
                    </div>
                    <div className="flex flex-col size-20">
                        <img src={skills.reduxSRC}></img>
                        <p>{skills.reduxAlt}</p>
                    </div>
                    <div className="flex flex-col size-20">
                        <img src={skills.nodeSRC}></img>
                        <p>{skills.nodeAlt}</p>
                    </div>
                    <div className="flex flex-col size-20">
                        <img src={skills.vscodeSRC}></img>
                        <p>{skills.vscodeAlt}</p>
                    </div>
                    <div className="flex flex-col size-20">
                        <img src={skills.figmaSRC}></img>
                        <p>{skills.figmaAlt}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills