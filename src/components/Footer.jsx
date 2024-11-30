import { useLanguage } from "../context/LanguageContext";



function Footer() {
    const { translate } = useLanguage();
    const footer = translate("footer");
    return (
        <>
            <footer className="bg-[#F4F4F4] dark:text-[#FFFFFF] dark:bg-[#2A262B]  px-[18vw] py-24 content-center text-center ">
                <div className="flex flex-row">
               <h1 className="text-right mr-10 w-96 font-medium text-3xl md:text-5xl tracking-normal">{footer.h1}</h1>
               <div className="flex flex-col text-left content-center font-medium text-nowrap">
                <a href={footer.githubLink} className="text-[#82BBFF]">{footer.githubText}</a>
                <a href={footer.personelBlogLink} className="text-[#FFFFFF]">{footer.personelBlogText}</a>
                <a href={footer.linkedInLink} className="text-[#419CCB]">{footer.linkedInText}</a>
                <a href={footer.emailLink} className="text-[#EA2678]">{footer.emailText}</a>
               </div>
               </div>
            </footer>
        </>
    )
}

export default Footer