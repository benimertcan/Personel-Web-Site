import { useLanguage } from "../context/LanguageContext";



function Skills() {
    const { translate } = useLanguage();
    const skills = translate("skills");
    const images = skills.images;
    return (
        <>
            <section className="py-24  min-h-80  content-center bg-[#FFFFFF] text-center dark:bg-[#484148] dark:text-[#F4F4F4]">
                <div className="px-[18vw] ">
                <h1 className="my-10 font-medium text-5xl leading-tight tracking-normal">{skills.h1}</h1>
                <div className="flex flex-row justify-evenly flex-wrap ">
                    {
                        images.map((image, index) => {
                            return (  
                                <div className="flex flex-col size-24 ml-[4vw] mt-10" key={index}>
                                    <img src={image.SRC} alt={image.Alt} />
                                    <p className="font-medium text-base m-1 leading-9 opacity-65 dark:text-[#D9D9D9] text-[#777777}">{image.Alt}</p>
                                </div>
                            );
                        })
                    }
                </div>
                </div>
                <div className="w-20 h-12  bg-[#525252] rounded-r-full place-self-start"></div>

            </section>
        </>
    )
}

export default Skills