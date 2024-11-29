import { useLanguage } from "../context/LanguageContext";



function Header() {
    const { translate } = useLanguage();
    const hero = translate("hero");

    return (
        <>
            <header className="text-left my-16 min-w-96 duration-500 bg-[#F4F4F4] dark:text-[#FFFFFF] dark:bg-[#2A262B]">
                <div className="flex flex-row ">
                    <div className="w-45">
                        <h1 className="font-normal text-3xl leading-9 tracking-wide">{hero.greeting}</h1>
                        <p className="text-4xl font-medium leading-none tracking-normal mt-2">{hero.intro}</p>
                    </div>
                    <div className="bg-[#E92577] pt-4 pl-4 rounded-2xl min-w-44 flex m-10">
                        <img src={hero.profileImg} className="rounded-2xl ms-1 -mb-2"></img>
                    </div>
                </div>
                <div className="flex flex-row mt-10">
                   <a href={hero.linkedInLink} > <img src={hero.linkedInSVG} className="dark:stroke-[#2A262B] dark:fill-[#2A262B] mr-5"></img></a>
                   <a href={hero.githubLink}>  <img src={hero.githubSVG} className="dark:stroke-[#2A262B] dark:fill-[#2A262B]"></img></a>
                </div>
                <p className="mt-5 ">{hero.heroFooter}</p>
                <p>{hero.heroFooter2}<a className="text-[#E92577]" href={`mailto:${hero.heroFooterMail}`} >{hero.heroFooterMail}</a></p>
            </header>
        </>
    )
}

export default Header