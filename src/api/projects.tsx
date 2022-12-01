import colours from "../sass/_foundation/_colours.module.scss";
import projectStyles from '../pages/Projects/Projects.module.scss';

interface ContentProps {
    component: string,
    title?: string,
    content?: string,
    font?: string,
    src?: string,
    src2?: string,
    alt?: string,
    alt2?: string,
    margin?: string,
    colour?: string,
    link?: {
        url: string,
        content: string
    }
    videoType?: string;
}

interface ResourcesProps {
    name: string,
    id: string,
    titleClass?: string,
    class: string,
    content: ContentProps[]
}

interface ProjectsProps {
    index: number,
    title: string,
    id: string,
    description: string,
    colour: string,
    role: {
        ux?: boolean,
        brand?: boolean,
        graphic?: boolean,
        dev?: boolean,
        threeD?: boolean
    }
    software: {
        xd?: boolean,
        figma?: boolean,
        sketch?: boolean,
        react?: boolean,
        angular?: boolean,
        wordpress?: boolean,
        ai?: boolean,
        animate?: boolean,
        premiere?: boolean,
        max?: boolean
    }
    resources: ResourcesProps[],
    outro: string
}

const projects: ProjectsProps[]  = [
    {
        index: 0,
        title: "Pierce's Pocket",
        id: "pierce's-pocket",
        description: "Welcome to Pierce’s Pocket! I designed and developed this website as a home for my work. The style is minimal & clean. The work I produce needs to be easily accessible, whilst being pleasant to look at.",
        colour: "#35485C",
        role: {
            ux: true,
            dev: true,
            graphic: true,
            brand: true
        },
        software: {
            ai: true,
            xd: true,
            react: true
        },
        resources: [
            {
                name: "Logo",
                id: "logo",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `When designing the logo I had two things in mind. I wanted it to look like it was cutout of the page, and that two "p's" were present - one inside the other.`
                    },
                    {
                        component: 'image',
                        src: 'logo_showcase.png',
                        alt: ''
                    },
                    {
                        component: 'lineText',
                        font: 'p',
                        content: "The shortened logo is used on pages where the overlayed panels are shrunk - just like this page you are on now!"
                    }
                ]
            },
            {
                name: "Styleguide",
                id: "styleguide",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The style is simple but effective. Less is always more. I opted for a monochrome aesthetic, leaving space for images and slight accents to bring in the colours, which adds the spice!`
                    },
                    {
                        component: 'image',
                        src: 'styleguide.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `To add to the classy - clean - feel, I wanted a serif title with a smooth sans-serif body.`
                    }
                ]
            },
            {
                name: "First Iteration",
                id: "first-iteration",
                class: `bg-g3 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `I started designing this project when I was in my infancy in learning UX Design. The idea of having something covering the content, and then revealing it afterwards began here. This later evolved to the panels you see today.\n\nI used Sketch to design this iteration and later moved to Adobe XD.`
                    },
                    {
                        component: 'image',
                        src: 'oldPortfolio_2.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'oldPortfolio_3.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'oldPortfolio_4.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Second Iteration",
                id: "first-iteration",
                class: `bg-g3 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `This project has been in the works for a while, meeting multiple iterations. Each iteration added a new element that would be carried forwards into the final design.`
                    },
                    {
                        component: 'image',
                        src: '2ndPortfolio_1.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: '2ndPortfolio_2.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: '2ndPortfolio_3.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: '2ndPortfolio_4.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Final Design",
                id: "final-design",
                class: `bg-g2 z-3`,
                content: [
                    {
                        component: 'paragraph',
                        content: `For the final design I opted with a simple and clean look. The monochromatic aesthetic leaves a minimalistic feel, allowing for projects and other accents to draw focus.`
                    },
                    {
                        component: 'image',
                        src: 'main.png',
                        alt: ''
                    },
                    {
                        component: 'lineText',
                        content: `The final implementation turned out like the final design looks, so feel free to explore this website to see!`,
                        font: 'p'
                    }
                ]
            },
            {
                name: "Development",
                id: "development",
                class: `bg-g1 z-4`,
                content: [
                    {
                        component: 'paragraph',
                        content: `I developed the app with React and Typescript, using Sass for styling. Using components allows projects to be loaded dynamically. I used a separate file for adding project content, and the Project component will loop through the project array to dynamically generate content on the fly.`
                    },
                    {
                        component: 'image',
                        src: 'code_data.png',
                        alt: ''
                    },
                    {
                        component: 'cardText',
                        content: "A new panel is added every 80px of the screen width being expanded, adding panels all the way upto ultrawide resolution. Depending on the page being viewed, depends on the height these panels are set.\n\nFor example, the page you are viewing now closes most of the panels, but leave some open for the menu buttons to be navigatable.",
                        colour: colours.grey2
                    },
                    {
                        component: 'paragraph',
                        content: `The grid menu button on the bottom left corner is also dynamic. The amount of grid items that is shown is dependant on the amount of projects available - and the current project number will reflect the active state of the grid.`
                    },
                    {
                        component: 'lineText',
                        content: `I had never used React before starting this project – however I was familiar with Angular – so it didn’t take too long to get things moving.`,
                        font: 'p'
                    },
                    {
                        component: 'paragraph',
                        content: `You can view the code over on <a/>.`,
                        link: {
                            url: 'https://github.com/InspectorPocket/pierces-pocket',
                            content: 'GitHub'
                        }
                    }
                ]
            },
            {
                name: "Future Plans",
                id: "future-plans",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Some ideas didn't make it to the current implimentation, however they remain on the back burner and will be implemented later.\n\nFor example, I want to add the option to choose a certain theme that will carry through the website. Like dark mode, but introduces background designs and specific colours, carefully chosen to compliment each other.`
                    },
                    {
                        component: 'image',
                        src: 'theme_1.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'theme_2.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'theme_3.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'theme_4.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `Once I add a custom cursor to the site, the idea was to add fun little characters that can either follow the cursor around - or just be interactable. Scattering these illustrations around the site would add some unique personality, and could even be themed with the project being viewed.`
                    },
                    {
                        component: 'image',
                        src: 'character_customisation.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `The next step was to add a menu bar that allowed for cursor and character customisation - soley for the fun of it!`
                    }
                ]
            },
        ],
        outro: `Pierce’s Pocket is a work in progress. I have plans to make it more interactive and make it more like a playground for my coding adventures!\n\nBut for now, feel free to check out the rest of the site!`
    },
    {
        index: 1,
        title: "Wild.Self",
        id: "wild-self",
        description: "Wild.Self is a company run by my dear friend, who is a fantastic Body Awareness & Self Love Coach. The project was a rebranding from scratch - using new ideas as well as existing ideas from her previous brand.",
        colour: "#AE2012",
        role: {
            ux: true,
            dev: true,
            graphic: true,
            brand: true
        },
        software: {
            ai: true,
            figma: true,
            wordpress: true
        },
        resources: [
            {
                name: "Logo",
                id: "logo",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The logo design process began with a few simple sketches. It wasn't too long before we are happy with a concept.`
                    },
                    {
                        component: 'image',
                        src: 'logo_sketch.jpg',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `Once the concept was decided, I went to work making it an illustration. We decided in the end to move the feather into the middle of the text to replace the "l".`
                    },
                    {
                        component: 'image',
                        src: 'logo_showcase.jpg',
                        alt: ''
                    }
                ]
            },
            {
                name: "Typography",
                id: "typography",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The branding needed to strong and represent self worth, but playful at the same time. The main colour used is a dark red to show confidence. The fonts are more playful, complementing each other nicely.`
                    },
                    {
                        component: 'image',
                        src: 'typography.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Design",
                id: "design",
                class: `bg-g3 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The project was designed in Figma. The feathers were the core grounding point of the brand, so they are featured a lot. The background is a beige colour to look more like paper, that a plain white background would. Take a look at the final designs below.`
                    },
                    {
                        component: 'image',
                        src: 'home.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'blogs.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'blog.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'contact.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Development",
                id: "development",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The styling of this project was applied over the top of an existing WordPress theme. A lot of the colours, fonts and basic layouts were achievable through manipulating the themes features. But most of the stylings you see were added through custom CSS.`
                    },
                    {
                        component: 'lineText',
                        content: `You may notice some last minute design changes on the final published site, but mostly the design stayed the same.`,
                        font: 'p'
                    },
                    {
                        component: 'paragraph',
                        content: `You can view the completed website - and it's responsive capabilities - over here on <a/>.`,
                        link: {
                            url: 'https://wild-self.de/',
                            content: 'Wild.Self'
                        }
                    }
                ]
            },
            {
                name: "Social Media",
                id: "social-media",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `To complete the brand, I replicated the design of the website and fashioned some basic templates for the client to manipulate on Canva, and use for Instagram.`
                    },
                    {
                        component: 'image',
                        src: 'social_paper.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'social_red.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'social_blue.png',
                        alt: ''
                    }
                ]
            }
        ],
        outro: "Wild.Self was a fun project to work on. Having creative freedom to play around with ideas is always welcome, and working on a project that already has copy to work with makes things much easier.\n\nFeel free to check out the next project below."
    },
    {
        index: 2,
        title: "LocalThrones",
        id: "localthrones",
        description: "LocalThrones is a work in progress app to help local venues stand out from the crowd. A businesses branding and marketing would be taken care of by LocalThrones, giving the customer full focus on running their business.",
        colour: "#FFD750",
        role: {
            ux: true
        },
        software: {
            figma: true,
        },
        resources: [
            {
                name: "User Journey",
                id: "user-journey",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `I joined this project as a UX Designer with the intention of helping out with front end later on. It was important to establish a coheasive user journey that demonstrates LocalThrones' vision.`
                    },
                    {
                        component: 'lineText',
                        font: 'p',
                        content: `The LocalThrones app targets both businesses and customers - so both journeys had to be considered.`
                    },
                    {
                        component: 'paragraph',
                        content: `After a few guided meetings and whiteboard sessions, I was able to take all the ideas and goals to map them out into an easily readable flow chart.`
                    },
                    {
                        component: 'image',
                        src: 'whiteboard.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'user_journey.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'flow_map.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "B2C Design",
                id: "b2c-design",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `My time at LocalThrones was spent researching competition, organising flows and creating mock-ups for screens. It was a project that we were all working on as a side piece - so progress wasn't as quick as it would have been full time.`
                    },
                    {
                        component: 'image',
                        src: 'b2c_screens.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `However, we did manage to get screens mocked-up for the majority of the B2C flow.`
                    },
                    {
                        component: 'paragraph',
                        content: `You can view the interactive Figma prototype <a/>.`,
                        link: {
                            url: 'https://www.figma.com/proto/r3FwRqC3zlgDbKtCCynxSr/LocalThrones?node-id=2%3A69&scaling=scale-down&page-id=2%3A13&starting-point-node-id=2%3A69',
                            content: 'using this link'
                        }
                    },
                ]
            },
            {
                name: "B2B Design",
                id: "b2b-design",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The B2C designs were a priority, so I didn't get to spend much time mapping out the B2B side of things. I did play around with UI for a deal creation tool that would be included in the platform.`
                    },
                    {
                        component: 'image',
                        src: 'deal_create_1.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'deal_create_2.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `The business app would be tailored to allowing a business to set up their menu, set up deals, customise their brand, and have it all reflect cohesively in their profile.`
                    },
                    {
                        component: 'paragraph',
                        content: `You can view the designed screens using this interactive Figma prototype <a/>.`,
                        link: {
                            url: 'https://www.figma.com/proto/r3FwRqC3zlgDbKtCCynxSr/LocalThrones?node-id=2%3A69&scaling=scale-down&page-id=2%3A13&starting-point-node-id=2%3A69',
                            content: 'using this link'
                        }
                    }
                ]
            }
        ],
        outro: "As fun and promising this project was, I decided to step back from it to work on some other projects I had in the back burner."
    },
    {
        index: 3,
        title: "Fluid Ads",
        id: "fluid-ads",
        description: "Fluid Ads is an advertising platform with technology to build and handle the creation, delivery and maintenance of custom ads. I joined the company as a Digital Designer, and later moved into a Front End Development role.",
        colour: "#2dc2b8",
        role: {
            ux: true,
            dev: true,
            graphic: true
        },
        software: {
            ai: true,
            animate: true,
            premiere: true,
            sketch: true,
            wordpress: true,
            angular: true,
        },
        resources: [
            {
                name: "Showreel",
                id: "showreel",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `One of the earlier projects I worked on was a showreel for the features that Fluid Ads offers. The three main branches of the company were captured in this showreel.`
                    },
                    {
                        component: 'video',
                        videoType: 'iframe',
                        src: "https://www.youtube.com/embed/Xja9mu1dvIk",
                        title: "Fluid Ads Digital Platform"
                    },
                    {
                        component: 'paragraph',
                        content: `Using existing iconography, I recreated the three icons in Adobe Animate and animated each to provide some visual flare. This was meant to provide intrigue and attract users to learn more.`
                    }
                ]
            },
            {
                name: "Digital Design",
                id: "digital-design",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `My role as a Digital Designer was to create dynamic adverts for clients as well as producing in house digital and print graphics for the marketing department.`
                    },
                    {
                        component: 'paragraph',
                        content: `At this time Fluid Ads was still developing the advert builder they have now, so the adverts I was creating at this time was using HTML / CSS. Later on this role would shift to building customer ads in the platform. Below are a few examples of the multitude of templates I created.`
                    },
                    {
                        component: 'image',
                        src: 'adverts.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `Digital and print assets were a core fundamental for the company's exposure. The booklets and leaflets created would be shown at events.`
                    },
                    {
                        component: 'image',
                        src: 'print.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `The digital assets would be used on social media and on the website. The graphics included a combination of custom illustrations and illustrations from a free library - <a/>.`,
                        link: {
                            url: 'https://undraw.co/',
                            content: 'UnDraw'
                        }
                    },
                    {
                        component: 'image',
                        src: 'digital.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `At some point during my time in this role, I also took on the maintenance of the website, and then later recreated it with fresh new styles.`
                    }
                ]
            },
            {
                name: "Web Development",
                id: "web-development",
                class: `bg-g3 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `As the app was progressing, and nearing the time of release - we realised the website needed an overhaul. Working closely with a UX Designer we began implementing new designs and features. New styles were introduced using the BEM system within SCSS to keep it organised.`
                    },
                    {
                        component: 'paragraph',
                        content: `Take a look at the <a/> and browse some of the features for yourself.`,
                        link: {
                            url: 'https://fluidads.com/',
                            content: 'Fluid Ads website'
                        }
                    },
                    {
                        component: 'image',
                        src: 'home.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `Some of the features included search and filter functionality as well as dynamic carousels that loaded information in from WordPress custom fields. These were implemented with the idea that the marketing department could add new content in WordPress - and it would automatically populate the components.`
                    },
                    {
                        component: 'paragraph',
                        content: `The pricing page required some real workarounds using flexbox and JavaScript. It appears as normal on desktop, however on mobile, the details of a package are hidden behind the card. Once the info button is pressed, the card will flip over - displaying the content.`
                    },
                    {
                        component: 'image',
                        src: 'pricing.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "App Development",
                id: "app-development",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The talented people at Fluid Ads began teaching me Angular5 - the software the app was built with. After some learning I began to work on some components. My main role was adding styling to the platform to make it look pretty.`
                    },
                    {
                        component: 'lineText',
                        font: 'p',
                        content: `I started by implementing the style guide across the platform. I used an atomic design structure to style the components, so it would be consistent across the entirety.`
                    },
                    {
                        component: 'paragraph',
                        content: `Most of the styling was revamped by me. Some of the front end features and functionality was also my doing, however the majority of the back-end development was done by the very talented team of developers at Fluid Ads.`
                    },
                    {
                        component: 'image',
                        src: 'app.png',
                        alt: ''
                    },
                    // TODO need macbook to edit video and create a gif
                    // {
                    //     component: 'paragraph',
                    //     content: `I tried to add some interactivity, with nice looking hover states. One of the components I designed and implemented was the options bar in the ad builder. We were trying to understand the best way to show these options without crowding the timeline.`
                    // },
                    // {
                    //     component: 'image',
                    //     src: 'timeline.gif',
                    //     alt: ''
                    // },
                    {
                        component: 'paragraph',
                        content: `You can <a/> to use the app, and see if it is something you might use. The technology is great and the team is super helpful and lovely. You can also see my work in action this way - but to launch an advert you must sign up for a package.`,
                        link: {
                            url: 'https://app.fluidads.com/',
                            content: 'sign up for a free account'
                        }
                    }
                ]
            },
            {
                name: "Video Editing",
                id: "video-editing",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `There were a couple of occasions I was asked to create videos that showcased the platform, so potential customers and investors could see an overview of the features. Here is one of the videos shown at the DMEXCO event.`
                    },
                    {
                        component: 'video',
                        videoType: 'iframe',
                        src: "https://www.youtube.com/embed/MPcvdYQZk5s",
                        title: "Award-winning Ad Builder from Fluid Ads"
                    }
                ]
            },
            {
                name: "Scripts",
                id: "scripts",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The Fluid Ads app integrates a technology called Geofencing, that allows ads to be served in a specifically targeted fence. These ads, once clicked, will usually take you to the product page or a landing page for that company.`
                    },
                    {
                        component: 'paragraph',
                        content: `One of the ideas we had was to have a script that shows the user the closest store to the Geofenced area, however any location can be added. A user is able to pass through URL parameters appended to the url "<a/>" - setting the company name, address and/or lat and long values.`,
                        link: {
                            url: 'https://inmapadvertising.com/',
                            content: 'https://inmapadvertising.com/'
                        }
                    },
                    {
                        component: 'paragraph',
                        content: `The script will take you to a page that will give you redirect options - depending on the passed parameters. The redirect will either give you directions to the specified place, or use the company name to show you all available stores. On mobile devices, it will automatically redirect you to Google Maps.`
                    },
                    {
                        component: 'paragraph',
                        content: `You can <a/>, feel free to change up the parameters in the url.`,
                        link: {
                            url: 'https://inmapadvertising.com/?company=Ethiad&addr=Ashton%20New%20Rd,%20Manchester%20M11%203FF&redir=0',
                            content: 'view it in action here'
                        }
                    }
                ]
            }
        ],
        outro: "I learnt so much at Fluid Ads, getting a real taste for version control and agile workflows. Working with UX Designers and Developers really bolstered my ability to grow and I’m so grateful for my time there."
    },
    {
        index: 4,
        title: "Clear UK",
        id: "clear-uk",
        description: "Clear UK is an organisation dedicated to reforming the laws around cannabis and proving the medicine can be a tool to help people. I handled the UX / UI and my friend would handle the development.",
        colour: "#81B29A",
        role: {
            ux: true,
            brand: true
        },
        software: {
            xd: true
        },
        resources: [
            {
                name: "User Journey",
                id: "user-journey",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The first thing I did when approaching the redesign was figure out the organisation's goals and create a user journey that would allow sharper focus in figuring out what the end point for a user would be.`
                    },
                    {
                        component: 'image',
                        src: 'user_journey.jpg',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `Once I had the journey laid out I went ahead to create a flow map of the new website. I analysed the current layout and tightened it up, so the content was easier to navigate to.`
                    },
                    {
                        component: 'image',
                        src: 'user_flow.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Logo",
                id: "logo",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The logo design was pretty simple here. I took their existing logo and remade it as a vector illustration. I then placed it into a circle and cut it out.`
                    },
                    {
                        component: 'image',
                        src: 'logo_showcase.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Styleguide",
                id: "styleguide",
                class: `bg-g3 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Being an organisation focused around the legalisation of marijuana, I found a green primary colour to be fitting. I then based the other colours used off this - orange being complimentary and the dark blue colour to be contrasting.`
                    },
                    {
                        component: 'paragraph',
                        content: `Using a green as a background colour presented some challenges in accessibility, so I made sure the text that showed on the green background would meet the AAA accessibility requirements.`
                    },
                    {
                        component: 'image',
                        src: 'colours.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `There is only one font used in this project - Nunito Sans. I used size and weight to determine the hierarchy of the typography to make each heading and content distinguishable.`
                    },
                    {
                        component: 'paragraph',
                        content: `I also provided an extensive styling guide for each option to help in the development of the styleguide.`
                    },
                    {
                        component: 'image',
                        src: 'typography.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Components",
                id: "components",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Components were designed with an atomic design structure. Atoms would be present in Molecules, and so on. Using my knowledge of CSS and SCSS I was able to show different states for each, and even add comments that would help in development where necessary.`
                    },
                    {
                        component: 'image',
                        src: 'atoms.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'molecules.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'organisms.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'skeleton.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'loading.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Design",
                id: "design",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `In the design process I had an idea that the content would be laid out over the primary colour as cards, to create a sense of depth - and just to try something different! The website was to be built in react, so I thought the idea would work well using a component based system.`
                    },
                    {
                        component: 'paragraph',
                        content: `You can view and interact with the Adobe XD flow prototype I created <a/>. Or see the final screens presented below.`,
                        link: {
                            url: 'https://xd.adobe.com/view/3b500a75-f223-4959-b408-55de76b37278-6e03/?fullscreen',
                            content: 'using this link here'
                        }
                    },
                    {
                        component: 'image',
                        src: 'home.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'about.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'campaigns.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'campaign.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'members.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'spotlight.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'news.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'news_page.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'contact.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'joined.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'not_found.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `The circles in the background use the golden ratio to set their sizes. The largest circle has a fixed height and width, and the subsequent circles follow the formula for resizing.`
                    },
                ]
            },
        ],
        outro: "Unfortunately we didn’t receive any further communications with the organisation once the designs had been completed, so the development halted. However it made for a good project to hone my design abilities."
    },
    {
        index: 5,
        title: "Codedump",
        id: "codedump",
        description: "Codedump was a project idea my talented colleague and friend came up with, where users would be able to store and publish bouts of code. He asked me to help with the design of the website and app.",
        colour: "#D3354D",
        role: {
            ux: true,
            brand: true
        },
        software: {
            sketch: true
        },
        resources: [
            {
                name: "User Journey",
                id: "user-journey",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `First things first, mapping out the flow of the project. After liasoning with my friend and analysing the current understanding of what he outlined, I came up with a flow map we were happy with.`
                    },
                    {
                        component: 'image',
                        src: 'flow_map.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Logo",
                id: "logo",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The logo requirements were to have the name “Codedump” included. So I opted for a very simple design and added a backslash to the end of the name - using the red from the new brand colours.`
                    },
                    {
                        component: 'image',
                        src: 'logo_showcase.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `The smaller variant was to be used as an icon for things mobile devices or a favicon.`
                    }
                ]
            },
            {
                name: "Styleguide",
                id: "styleguide",
                class: `bg-g3 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The red colour was a colour my friend had already decided on, so I chose purple as a complimentary colour that would be associated with any elements distinguishable with the main content elements - like private settings or tags / filter options.`
                    },
                    {
                        component: 'image',
                        src: 'colours.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `I chose to use Abril Fatface as the main heading font and Poppins for everything else. These two fonts have curved letters and compliment each other well.`
                    },
                    {
                        component: 'image',
                        src: 'typography.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Components",
                id: "components",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Using the atomic design structure, the components were designed from an atom up. Lower level components will be used in higher level components. If a style changes for an atom, it will change in the entirety.`
                    },
                    {
                        component: 'image',
                        src: 'inputs.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'components.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'components_2.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Design",
                id: "design",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `I wanted both the website and the app to use the same styleguide, so both are designed with consistency in mind. `
                    },
                    {
                        component: 'paragraph',
                        content: `You can view and interact with the Adobe XD flow prototype I created <a/>. Or see the final screens presented below.`,
                        link: {
                            url: 'https://xd.adobe.com/view/dc0a9975-0739-43c6-95cb-f1969902e3dc-8959/?fullscreen',
                            content: 'using this link here'
                        }
                    },
                    {
                        component: 'image',
                        src: 'home.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'learn_more.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'register.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'login.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'password_reset.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'home_loggedin_settings.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `Everything that appears outside the app (the website content and the side panel of the app) would have a white background.`
                    },
                    {
                        component: 'paragraph',
                        content: `Everything contained within the app would sit inside a grey rounded container. The main content inside would appear in cards. Because the project was to be built in Angular, I liked this design as components can be transitioned in and out.`
                    },
                    {
                        component: 'image',
                        src: 'dashboard.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'bookmarks.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'posts.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'profile.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'subscription.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'payment.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'email.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'expired.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Potential Development",
                id: "potential-development",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `After the designs were fully realised, I was going to help style the app using SCSS and Angular components...`
                    }
                ]
            }
        ],
        outro: "Codedump development was put on hold, however the designing process allowed me to sharpen my UX Design abilities."
    },
    {
        index: 6,
        title: "Rozafa",
        id: "rozafa",
        description: "Rozafa was the first potential client of a freelance business, me and some friends were going to start. Rozafa was part of a pitch to show what the branding company was capable of - designing and handling your brand and website.",
        colour: "#F5B0C5",
        role: {
            ux: true,
            brand: true
        },
        software: {
            xd: true
        },
        resources: [
            {
                name: "User Journey",
                id: "user-journey",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The flow of the website was straight forward. The goal of the user is to have customers book a table. Showing deals on the home page and allowing easy navigation to an interactive menu page - and details for each - was the primary step in achieving the users goal.`
                    },
                    {
                        component: 'image',
                        src: 'user_flow.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Styleguide",
                id: "styleguide",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The colours I opted with were based on a quick browse on Dribbble to see some greek themed inspiration. The pink and the blue colour works nicely together, and the dark blue font style meets all accessibility requirements with the colours I chose.`
                    },
                    {
                        component: 'image',
                        src: 'colours.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `I chose Berkshire Squash as the font for the heading, to bring a exotic feel to the site. The main font is Century Gothic - a complimentary font to the headings.`
                    },
                    {
                        component: 'image',
                        src: 'typography.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `I used the traditional Greek key pattern to have as borders for the content. The same symbol is used in the background at a reduced opacity. You can see this in the next section.`
                    }
                ]
            },
            {
                name: "Design",
                id: "design",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The design follows a standard layout of either a full width content block, or split into the necessary number of components. For example; 50:50 for text/content and 33:33:33 for testimonials.`
                    },
                    {
                        component: 'paragraph',
                        content: `The menu page is interactive and leads to a more detailed view of an item - giving the company choice to add pictures, lore for the dishes or simply ingredients.`
                    },
                    {
                        component: 'paragraph',
                        content: `You can view and interact with the Adobe XD flow prototype I created <a/>. Or see the final screens presented below.`,
                        link: {
                            url: 'https://xd.adobe.com/view/854b9f76-3a66-4fcc-ae59-6d5fb61c09dd-d018/?fullscreen',
                            content: 'using this link here'
                        }
                    },
                    {
                        component: 'image',
                        src: 'home.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'menu.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'menu_item.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'our_story.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'book.png',
                        alt: ''
                    }
                ]
            },
        ],
        outro: "We all got too busy with other responsibilities to continue with the project, so this was our first and last case study, but it was fun to work on together regardless."
    },
    {
        index: 7,
        title: "Extras",
        id: "extras",
        description: "For now, this is just a dump of other bits and bobs that didn't fit as a full project. The extra content will sit in another section in the future, but for now - it is all compiled here.",
        colour: "#35485C",
        role: {
            brand: true,
            graphic: true,
            threeD: true
        },
        software: {
            ai: true,
            xd: true,
            sketch: true,
            animate: true,
            max: true
        },
        resources: [
            {
                name: "Glassware Games",
                id: "glassware-games",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Glassware Games is a small project me and a few friends started working on. I was the Graphic Designer and also the character animator for the game we were creating.`
                    },
                    {
                        component: 'image',
                        src: 'gg_logo.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'tempus_animations.gif',
                        alt: ''
                    }
                ]
            },
            {
                name: "Nature Stuff",
                id: "nature-stuff",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Nature Stuff is a mock-up brand I was toying around with. I designed the logo using the Golden Ratio.`
                    },
                    {
                        component: 'image',
                        src: 'nature_stuff_logo.jpg',
                        alt: ''
                    }
                ]
            },
            {
                name: "Ashley B. Portraits",
                id: "ashley-b-portraits",
                class: `bg-g3 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Ashley is an american based photographer. She reached out asking if I could design her a logo. We went through 3 iterations before she was happy with the final logo.`
                    },
                    {
                        component: 'image',
                        src: 'ab_logo_01.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'ab_logo_02.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'ab_logo_03.jpg',
                        alt: ''
                    }
                ]
            },
            {
                name: "Bright Spot Wrestling",
                id: "bright-spot-wrestling",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Bright Spot Wrestling is a startup company to help develop and enrich a pro-wrestling community.`
                    },
                    {
                        component: 'image',
                        src: 'bsw_logo.jpg',
                        alt: ''
                    }
                ]
            },
            {
                name: "Navbar Concept",
                id: "navbar-concept",
                class: `bg-g3 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `An early iteration of my Portfolio had this navbar. It's a cool design - but didn't fit with the final goals or keeping it clean and minimal.`
                    },
                    {
                        component: 'video',
                        videoType: 'video',
                        src: 'navbar_concept.mp4',
                        alt: ''
                    }
                ]
            },
            {
                name: "Chunky Critters",
                id: "chunky-critters",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Meet Tug the chunky pug! This was a idea I had to take peoples pets, photoshop them onto a fatter animal of the same breed, and create an illustration of it, in different scenarios, to sell as merchandise.`
                    },
                    {
                        component: 'image',
                        src: 'chunky_bowl.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'chunky_plant.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'chunky_scalf.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'chunky_pipe.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Eggbert Nobacon",
                id: "eggbert-nobacon",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Here are a collection of characters created for a video game I helped to make during university. You play as an egg - but you have no bacon (bacon is your friend you have to save, and can later play as once complete).`
                    },
                    {
                        component: 'image',
                        src: 'egg_egg.gif',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'egg_frankie.gif',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'egg_baco.gif',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'egg_mushroom.gif',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'egg_bean.gif',
                        alt: ''
                    }
                ]
            },
            {
                name: "3D Character Design",
                id: "3d-character-design",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `During university, we were tasked with createng 3D models, for different modules. Here are a collection of those.`
                    },
                    {
                        component: 'image',
                        src: 'barry.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'gross_face.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'gross_front.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'gross_back.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'cabbit_face.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'cabbit_front.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'cabbit_back.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'sunken_player.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'sunken_axelbot.jpg',
                        alt: ''
                    },
                ]
            },
            {
                name: "Space Cards",
                id: "space-cards",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `This is just a fun little concept I was working on. The idea was develop a few of these types of cards, capturing elements of space and putting a colourful twist on it.`
                    },
                    {
                        component: 'image',
                        src: 'spacecards_black.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'spacecards_white.png',
                        alt: ''
                    }
                ]
            }
        ],
        outro: "Pierce’s Pocket is a work in progress. I have plans to make it more interactive and make it more like a playground for my coding adventures!\n\nBut for now, feel free to check out the rest of the site."
    }
];
  
// export function getResource(resourceId: string, projectId: string) {
//     return projects
//         .find((id: string) => id === projectId)
//         .resources.find((id: string) => id === resourceId);
// }

export function getProject(projectId: string) {
    return projects.find(({ id }) => id === projectId);
}

export function getProjects() {
    return projects;
}

// export function getResource({ resourceId, projectId }) {
//     return projects
//         .find(({ id }) => id === projectId)
//         .resources.find(({ id }) => id === resourceId);
// }

// export function getProject(projectId) {
//     return projects.find(({ id }) => id === projectId);
// }

// export function getProjects() {
//     return projects;
// }
