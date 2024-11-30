import { useLanguage } from "../context/LanguageContext";



function Profile() {
    const { translate } = useLanguage();
    const profile = translate("profile");

    return (
        <>
       
            <section className="bg-[#F4F4F4] dark:text-[#FFFFFF] dark:bg-[#2A262B]   py-24 content-center text-center">
            <div className="w-20 h-32  border-l-16 border-t-16 border-b-16 border-solid border-[#EA2678]  rounded-l-full  place-self-end  -mt-36"></div>
            <div className="px-[18vw]">
            <h1 className="my-10 font-medium text-5xl leading-tight tracking-normal">{profile.profileText}</h1>
                <div className="justify-center content-center text-center flex flex-row flex-wrap">
               
                <div className="bg-[#52525280]  w-[26rem]  rounded-2xl h-[15.5rem]">
                    <div className="bg-[#FFFFFF]  dark:bg-[#525252] w-[26rem]    h-60 flex flex-col rounded-2xl -ml-3">
                        <h1 className="self-start ml-5 my-3 font-normal text-2xl text-[#EA2678] leading-8 font-playfair
                        " >{profile.cart.h1}</h1>
                        <div className="flex flex-row text-wrap text-left ml-5 ">
                            <div className="flex flex-col w-80 text-lg font-semibold leading-5 tracking-tight text-nowrap" >
                                <p className="my-1">{profile.cart.dateOfBirthText}</p>
                                <p className="my-1">{profile.cart.cityText}</p>
                                <p className="my-1">{profile.cart.educationText}</p>
                                <p className="my-6">{profile.cart.rolText}</p>
                            </div>
                            <div className="flex flex-col text-left text-lg leading-5 tracking-tight ml-1">
                                <p className="my-1">{profile.cart.dateOfBirth}</p>
                                <p className="my-1">{profile.cart.city}</p>
                                <p className="my-1">{profile.cart.education}</p>
                                <p className="my-1">{profile.cart.rol}</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="w-[30rem] ml-6 xs:mt-10 text-left">
                    <div className="border-b-[15px] -ml-1 rounded-md border-solid w-24 -mb-11 border-[#DDEEFE]"></div>
                    <h1 className="m-2 text-2xl font-normal	 font-playfair">{profile.about.aboutMe}</h1>
                    <p className="m-2">{profile.about.text1}</p>
                    <p className="m-2">{profile.about.text2}</p>
                </div>
                

                </div>
                </div>
            </section>
        </>
    )
}

export default Profile