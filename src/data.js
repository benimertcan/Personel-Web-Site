const languagesData = {
    en: {
        changeLanguage: "TÜRKÇE",
        hero: {
            greeting: "Hi! 👋",
            intro: " I'm a front-end developer. I can craft solid and scalable front-end products. Let's meet!",
            profileImg: "/assets/images/profile_picure.JPG",
            profileName: "I'm Mertcan.",
            linkedInSVG: "/assets/images/linkedIn.SVG",
            linkedInLink: "https://www.linkedin.com/in/mertcan-kurt-69b22b227/",
            githubSVG: "/assets/images/github.SVG",
            githubLink: "https://github.com/benimertcan",
            heroFooter: "Currently Freelancing for UX,UI, & Web Design Project.",
            heroFooter2: "Invite me to join your team -> ",
            heroFooterMail: "mertcankurt25@gmail.com",
        },
        skills: {
            h1: "Skills",
            images: [
                {
                    Alt: "JAVASCRIPT",
                    SRC: "/assets/images/javascript.png",
                },
                {
                    Alt: "REACT",
                    SRC: "/assets/images/react.png",
                },
                {
                    Alt: "REDUX",
                    SRC: "/assets/images/redux.png",
                },
                {
                    Alt: "NODE",
                    SRC: "/assets/images/node.png",
                },
                {
                    Alt: "VS CODE",
                    SRC: "/assets/images/vscode.png",
                },
                {
                    Alt: "FIGMA",
                    SRC: "/assets/images/figma.png",
                }
            ]
        }
        ,
        profile: {
            profileText: "Profile",
            cart: {
                h1: "Basic Information",
                dateOfBirthText: "Date of Birth",
                dateOfBirth: "25.08.1999",
                cityText: "City of residence",
                city: "Bursa",
                educationText: "Educational background",
                education: "Namık Kemal Üniversitesi, Bilgisayar Programcılığı",
                rolText: "Preferred Role",
                rol: "Frontend, UI"
            },
            about: {
                aboutMe: "About me",
                text1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi molitia.",
                text2: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! "
            }
        },
        projects: {
            h1: "Projects",
            myProjects: [
                {
                    id:"reelflix",
                    h1: "ReelFlix",
                    text: "A web application that replicates the core features of Netflix, allowing users to browse movies and TV shows. This project was developed as a personal project to enhance my skills in web development.",
                    materials: [ "vercel", "html","css"],
                    viewText: "View on Github",
                    viewLink: "https://github.com/benimertcan/reelflix",
                    appText: "Go to app ->",
                    appLink: "reelflix-theta.vercel.app",
                    imgLink: "assets/images/reelflix.png",
                },
                {
                    id:"pizzahtml",
                    h1: "Pizza Challenge",
                    text: "This project was developed as a personal project to enhance my skills in web development, HTML and CSS.",
                    materials: ["vercel", "html","css"],
                    viewText: "View on Github",
                    viewLink: "https://github.com/benimertcan/PizzaPageChallenge",
                    appText: "Go to app ->",
                    appLink: "",
                    imgLink: "assets/images/reactPizza.png",
                }
                ,
                {
                    id:"pizzareact",
                    h1: "Pizza Challenge React",
                    text: "Here is a React version of the pizza page challenge from my profile. On the homepage, you can navigate around, go to the pizza ordering page, choose the dough, size, and additional toppings for the pizza you select, and add a special order note. The price of the order changes according to the selected toppings and the number of pizzas. When you place the order, a request is made to the 'https://reqres.in/api/pizza' API, and then a page opens where you can see the details of your order.",
                    materials: ["vercel", "react","router","axios","state management"],
                    viewText: "View on Github",
                    viewLink: "https://github.com/benimertcan/ReactPizzaProject",
                    appText: "Go to app ->",
                    appLink: "react-pizza-project-eight.vercel.app/",
                    imgLink: "assets/images/reactPizza.png",
                },
            ],
        },
        footer: {
            h1: "Let's work together on your next product.",
            githubText: "Github",
            githubLink: "",
            personelBlogText: "Personel Blog",
            personelBlogLink: "",
            linkedInText: "Linkedin",
            linkedInLink: "",
            emailText: "Email",
            emailLink: "",
        }
    },
    tr: {
        changeLanguage: "ENGLISH",
        hero: {
            greeting: "Merhaba! 👋",
            intro: " Ben bir ön yüz geliştiricisiyim. Sağlam ve ölçeklenebilir ön yüz ürünleri oluşturabilirim. Tanışalım!",
            profileImg: "/assets/images/profile_picure.JPG",
            profileName: "Ben Mertcan.",
            linkedInSVG: "/assets/images/linkedIn.SVG",
            linkedInLink: "https://www.linkedin.com/in/mertcan-kurt-69b22b227/",
            githubSVG: "/assets/images/github.SVG",
            githubLink: "https://github.com/benimertcan",
            heroFooter: "Şu anda UX, UI ve Web Tasarım projeleri için serbest çalışıyorum.",
            heroFooter2: "Beni ekibinize davet edin -> ",
            heroFooterMail: "mertcankurt25@gmail.com",
        },
        skills: {
            h1: "Yetenekler",
            images: [
                {
                    Alt: "JAVASCRIPT",
                    SRC: "/assets/images/javascript.png",
                },
                {
                    Alt: "REACT",
                    SRC: "/assets/images/react.png",
                },
                {
                    Alt: "REDUX",
                    SRC: "/assets/images/redux.png",
                },
                {
                    Alt: "NODE",
                    SRC: "/assets/images/node.png",
                },
                {
                    Alt: "VS CODE",
                    SRC: "/assets/images/vscode.png",
                },
                {
                    Alt: "FIGMA",
                    SRC: "/assets/images/figma.png",
                }
            ]
        }
        ,
        profile: {
            profileText: "Profil",
            cart: {
                h1: "Temel Bilgiler",
                dateOfBirthText: "Doğum tarihi",
                dateOfBirth: "25.08.1999",
                cityText: "İkamet Şehri",
                city: "Bursa",
                educationText: "Eğitim Durumu",
                education: "Namık Kemal Üniversitesi, Bilgisayar Programcılığı",
                rolText: "Tercih Ettiği Rol",
                rol: "Frontend, UI"
            },
            about: {
                aboutMe: "Hakkımda",
                text1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi molitia.",
                text2: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! "
            }
        },
        projects: {
            h1: "Projects",
            myProjects: [
                {
                    id:"reelflix",
                    h1: "ReelFlix",
                    text: "Netflix'in temel özelliklerini taklit eden bir web uygulaması, kullanıcıların film ve TV şovlarını keşfetmelerini sağlar. Bu proje, web geliştirme becerilerimi geliştirmek amacıyla kişisel bir proje olarak geliştirilmiştir.",
                    materials: [ "vercel", "html","css"],
                    viewText: "Github' ta göster",
                    viewLink: "https://github.com/benimertcan/reelflix",
                    appText: "Uygulamaya git ->",
                    appLink: "reelflix-theta.vercel.app",
                    imgLink: "assets/images/reelflix.png",
                },
                {
                    id:"pizzahtml",
                    h1: "Pizza Challenge",
                    text: "Bu proje, web geliştirme, HTML ve CSS becerilerimi geliştirmek amacıyla kişisel bir proje olarak geliştirilmiştir.",
                    materials: ["vercel", "html","css"],
                    viewText: "Github' ta göster",
                    viewLink: "https://github.com/benimertcan/PizzaPageChallenge",
                    appText: "Uygulamaya git ->",
                    appLink: "",
                    imgLink: "assets/images/reactPizza.png",
                }
                ,
                {
                    id:"pizzareact",
                    h1: "Pizza Challenge React",
                    text: "İşte profilimden pizza sayfası challenge'ının React versiyonu. Ana sayfada gezinip pizza siparişi sayfasına gidebilir, seçtiğiniz pizza için hamur, boyut ve ek malzemeleri seçebilir ve özel bir sipariş notu ekleyebilirsiniz. Siparişin fiyatı, seçilen malzemelere ve pizza sayısına göre değişir. Siparişi verdiğinizde, 'https://reqres.in/api/pizza' API'sine bir istek yapılır ve ardından siparişinizin detaylarını görebileceğiniz bir sayfa açılır.",
                    materials: ["vercel", "react","router","axios","state management"],
                    viewText: "Github' ta göster",
                    viewLink: "https://github.com/benimertcan/ReactPizzaProject",
                    appText: "Uygulamaya git ->",
                    appLink: "react-pizza-project-eight.vercel.app/",
                    imgLink: "assets/images/reactPizza.png",
                },
            ],
        },
        footer: {
            h1: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
            githubText: "Github",
            githubLink: "https://github.com/benimertcan",
            personelBlogText: "Personel Blog",
            personelBlogLink: "",
            linkedInText: "Linkedin",
            linkedInLink: "https://www.linkedin.com/in/mertcan-kurt-69b22b227/",
            emailText: "Email",
            emailLink: "mertcankurt25@gmail.com",
        }
    }
}
export default languagesData;