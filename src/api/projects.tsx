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
    featured: boolean,
    featured_list: boolean,
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
        photoshop?: boolean,
        indesign?: boolean,
        premiere?: boolean,
        max?: boolean
    }
    resources: ResourcesProps[],
    outro?: string
}

// TODO - Create a component for list
// TODO - Add brand stand pics one gotten

const projects: ProjectsProps[]  = [
    // Acushla goes here <-
    {
        index: 0,
        title: "Fuelius",
        id: "fuelius",
        description: "Fuelius is a digital agency focused on elevating HubSpot and Umbraco websites for clients. I joined as a UX designer, helping rebrand the company, as well as shift the workflow to a more modern Figma design methodology – building templates and connecting design & dev workflows together.",
        colour: "#6E2DF5",
        featured: true,
        featured_list: false,
        role: {
            ux: true,
            graphic: true,
            brand: true
        },
        software: {
            xd: true,
            figma: true,
            ai: true,
            photoshop: true,
            indesign: true
        },
        resources: [
            {
                name: "Overview",
                id: "overview",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `I joined around the time the company was ready to re-brand themselves. I was fortunate enough to be able to work on the rebrand project from it’s conceptualisation - providing a lot of creative freedom.`
                    },
                    {
                        component: 'paragraph',
                        content: 'The work I completed includes; Re-branding (UX, Colours, Typography), Website Design, Asset Creation, Slide Deck Design, Email Template Design.'
                    },
                    // {
                    //     component: 'list',
                    //     content: 'Re-branding (UX, Colours, Typography) / Website Design / Slide Deck Design / Email Template Design / Social Templates (left out because the style is very similar to the above)'
                    // },
                    {
                        component: 'paragraph',
                        content: `A snippet of each of the above have been chosen for display – but each has more modules and templates completed for them.`
                    },
                    {
                        component: 'heading',
                        content: `Table of Contents`
                    },
                    {
                        component: 'paragraph',
                        content: `<ul style="font-weight:500;"><li>Assets & Website</li><li>Slide Decks</li><li>Client Work</li><li>Design System</li></ul>`,
                    }
                ]
            },
            {
                name: "Assets & Website",
                id: "assets-website",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'heading',
                        content: `Assets`
                    },
                    {
                        component: 'paragraph',
                        content: `The most recent piece of work outisde of webdesign I completed is with the asset creation, to help the brand come alive.`,
                    },
                    {
                        component: 'image',
                        src: 'Assets.jpg',
                        alt: ''
                    },
                    {
                        component: 'heading',
                        content: `Website`
                    },
                    {
                        component: 'paragraph',
                        content: `The following screenshot demonstrates some my favourite modules for the site. The designs are meant to go live at any moment, so you can hopefully see the final developed website <a/>.`,
                        link: {
                            url: 'https://fuelius.com',
                            content: 'at this link'
                        }
                    },
                    {
                        component: 'image',
                        src: 'Website_Showcase.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'Website_Menu.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `Using light & dark mode Token Variables in Figma meant each of these designs are also available in a light theme.`
                    }
                ]
            },
            {
                name: "Slide Decks",
                id: "slde-decks",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'image',
                        src: 'Slide_Cover.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'Slide_Effort.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'Slide_Prototype.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'Slide_CaseStudies.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'Slide_Trail.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'Slide_Testemonials.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Client Work",
                id: "client-work",
                class: `bg-g3 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The main responsibilities of the role was to take client briefs and transform them into a beautiful design. I worked on a fair few projects, but I have highlighted below some of my favourite designs and concepts.`
                    },
                    {
                        component: 'heading',
                        content: `HealthShield (Concepts)`
                    },
                    {
                        component: 'image',
                        src: 'Client_HealthShield.png',
                        alt: ''
                    },
                    {
                        component: 'heading',
                        content: `SmartSearch (Concepts)`
                    },
                    {
                        component: 'image',
                        src: 'Client_SmartSearch1.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'Client_SmartSearch2.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'Client_SmartSearch3.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'Client_SmartSearch4.png',
                        alt: ''
                    },
                    {
                        component: 'heading',
                        content: `Cambridge Spark (Concepts)`
                    },
                    {
                        component: 'image',
                        src: 'Client_CambridgeSpark.png',
                        alt: ''
                    },
                    {
                        component: 'heading',
                        content: `Donorfy`
                    },
                    {
                        component: 'paragraph',
                        content: `You can see the full design live at <a/>.`,
                        link: {
                            url: 'https://donorfy.com',
                            content: 'donorfy.com'
                        }
                    },
                    {
                        component: 'image',
                        src: 'Client_Donorfy1.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'Client_Donorfy2.png',
                        alt: ''
                    },
                    {
                        component: 'heading',
                        content: `LinkWaste (Concepts)`
                    },
                    {
                        component: 'image',
                        src: 'Client_LinkWaste.png',
                        alt: ''
                    },
                    {
                        component: 'heading',
                        content: `CHASE People (Concepts)`
                    },
                    {
                        component: 'image',
                        src: 'Client_CHASE.jpg',
                        alt: ''
                    },
                ]
            },
            {
                name: "Design System",
                id: "design-system",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Noticing Figma was becoming a powerhouse in the UX world, it was time to move away from XD. I immediately began working on project template for the company to use to help reduce the repetitiveness of beginning each project a new.`
                    },
                    {
                        component: 'paragraph',
                        content: `The template contains a Primitive → Token variable approach, with dynamic collections to shift between Light/Dark and Desktop/Mobile spacing modes.`
                    },
                    {
                        component: 'paragraph',
                        content: `Around 20 HubSpot module was then setup – built using custom *Atomic components* – all tied into the variables.`
                    },
                    {
                        component: 'paragraph',
                        content: `I won’t go into anymore detail here – for respect to Fuelius’ internal processes – but I have included a couple of screenshots below to demonstrate the complexity of this document. The first showing the spread of created components...`
                    },
                    {
                        component: 'image',
                        src: 'DesignLibrary_Components.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `And the second showing these components in demo template pages.`
                    },
                    {
                        component: 'image',
                        src: 'DesignLibrary_Templates.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `The new system I would put in place would help communicate designs with developers in an infinitely better way – removing the need for handover documents and allowing Figma dev mode to do most of the heavy lifting. The idea is to free up time for both designers and developers so that we can all focus on creating spicier designs!`
                    },
                    {
                        component: 'paragraph',
                        content: `The variables I set up in this template would tie into the core code HubSpot/Umbraco template setup (also being re-vamped to follow this system), meaning developers would have a much easier time getting values to match up with designs. This will hopefully result in way fewer bugs and design inconsistencies.`
                    },
                    {
                        component: 'paragraph',
                        content: `The system is also be setup to sync with TailwindCSS, meaning my system can extend on top of Tailwind (if required) to save developers even more time.`
                    },
                    {
                        component: 'paragraph',
                        content: `All of this process came with highly detailed documents explaining the entire process, so current and future hires would be able to pick up the process.`
                    },
                    
                ]
            }
        ],
        outro: "There is so much more that went into the branding of this project, but I feel the above captures the core essence of the aesthetics."
    },
    {
        index: 1,
        title: "Cosmic Architect",
        id: "cosmic-architect",
        description: "Cosmic Architect is an in progress branding personality for the future projects I would like to work on in my spare time.",
        colour: "#313131",
        featured: false,
        featured_list: true,
        role: {
            ux: true,
            graphic: true,
            brand: true
        },
        software: {
            figma: true,
            ai: true,
            photoshop: true
        },
        resources: [
            {
                name: "Brand",
                id: "brand",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The brand consists of palettes across the entire colour spectrum. Each set of colours will come together in different ways to create new and interesting forms depending on the topic being discussed. Each form indicates a different branch of the umbrella ‘Cosmic Architect‘ brand.`
                    },
                    {
                        component: 'heading',
                        content: `Colour Palette`
                    },
                    {
                        component: 'paragraph',
                        content: `The colours are chosen by me, by hand. Each of the colours are laid out next to each other and are carefully crafted to compliment the colours around each. This process involved tweaking not only the lightness and saturation colour values, but the hues as well.`
                    },
                    {
                        component: 'image',
                        src: 'ColourPalette.png',
                        alt: ''
                    },
                    {
                        component: 'heading',
                        content: `Material Palette`
                    },
                    {
                        component: 'paragraph',
                        content: `Each of the colour themes will sit a top of a material, that helps tune the feeling of the over all theme. Different tones of base monochrome, that form the foundation for all the brand applications. This includes borders, backgrounds and other elements that make up the foundations.`
                    },
                    {
                        component: 'paragraph',
                        content: `This could be a cooler theme on top of a steel grey material:`
                    },
                    {
                        component: 'image',
                        src: 'PurpleSteel.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `Or a warmer colour palette on top of a stone grey material:`
                    },
                    {
                        component: 'image',
                        src: 'WarmStone.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `Or even a green colour palette on top of a wood like material:`
                    },
                    {
                        component: 'image',
                        src: 'GreenEarth.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `All colours and materials can be switched around at will using the design system I have set up for this file.`
                    },
                    {
                        component: 'heading',
                        content: `Careful Colour Application`
                    },
                    {
                        component: 'paragraph',
                        content: `Human biological development is closely tied to colour, and colours have very powerful effects on our psyche. We can have different emotional reactions to seeing a red vs a yellow car. We can sense a company is more organic or health focused if their colour palettes are green. Or we feel more trusting towards a company that is blue (this is why most social media companies are blue!). `
                    },
                    {
                        component: 'paragraph',
                        content: `Colour theory is studied deeply in UX design, so I wanted to have a broad spectrum of colours available to help craft certain characters & narratives, as well as help illicit certain feelings depending on what topic or story I want to explore.`
                    },
                    {
                        component: 'paragraph',
                        content: `Colours will be able to mix together to create certain themes - allowing for an infinite combination of colour schemes to be created for each purpose. A few examples can be seen below:`
                    },
                    {
                        component: 'image',
                        src: 'ThemeExamples.png',
                        alt: ''
                    },
                ]
            },
            {
                name: "Portfolio 2.0 Application",
                id: "portfolio-2",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `As you can see from the section above, I have begin testing and experimenting with these colours on a newer version of my portfolio. This version has the designs ready and is currently under development.`
                    },
                    {
                        component: 'image',
                        src: 'Dashboard.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'Project.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'FullScreen.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `The main deviation from the brand (as laid out above) is that the colours in the portfolio are tied to specific projects, rather than topics. This is the current theme as of the current website you are viewing, so I’m transferring the colouring system from this version over to the 2.0 version.`
                    }
                ]
            },
            {
                name: "App Research",
                id: "app-research",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `I have plans to develop an application. The Cosmic Architect app will be designed to help show people easily understandable and digestible tools to help uncover the shadows within and face them without fear.`
                    },
                    {
                        component: 'paragraph',
                        content: `The Cosmic Blanket branch of the app, as mentioned above, is meant to be a safe area people can journal, find meditations, play healing music and ask deep questions about themselves.`
                    },
                    {
                        component: 'paragraph',
                        content: `This is still under heavy conceptualisation and planning, however I have conducted some user research worth sharing. I am fortunate enough to be part of a spiritual community that was more than willing to help guide the direction of this from a potential users perspective:`
                    },
                    {
                        component: 'image',
                        src: 'survey_results.jpg',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `Collating all this data took a little while, but it has been extremely useful in creating user personas and user flows:`
                    },
                    {
                        component: 'image',
                        src: 'user_personas.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'user_flow(base).png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `With plenty of detail:`
                    },
                    {
                        component: 'image',
                        src: 'user_flow(expanded).jpg',
                        alt: ''
                    },
                ]
            }
        ],
        outro: "These projects are a work in progress, and what I have laid out are mainly ideas, but hopefully it give a bit of an insight into my mind when designing."
    },
    {
        index: 2,
        title: "Pierce's Pocket",
        id: "pierces-pocket",
        description: "Welcome to Pierce’s Pocket! I designed and developed this website as a home for my work. The style is minimal & clean. The work I produce needs to be easily accessible, whilst being pleasant to look at.",
        colour: "#35485C",
        featured: false,
        featured_list: true,
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
                        content: `Playfair Display was used in earlier iterations, but I have recently opted for a more modern look to blend in with my new brand direction.`
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
                        content: `This project has been in the works for a while, meeting multiple iterations. Each iteration added a new element that would be carried forwards into the final design.`
                    },
                    {
                        component: 'image',
                        src: '1.0_home.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: '1.0_projects.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: '1.0_home_dark.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: '1.0_projects_dark.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Current Implementation",
                id: "current-implementation",
                class: `bg-g2 z-3`,
                content: [
                    {
                        component: 'paragraph',
                        content: `For the final design I opted with a simple and clean look. The monochromatic aesthetic leaves a minimalistic feel, allowing for projects and other accents to draw focus.`
                    },
                    {
                        component: 'image',
                        src: 'main.jpg',
                        alt: ''
                    },
                    {
                        component: 'lineText',
                        content: `The final implementation turned out like the final design looks (with some slight adjustments here and there), so feel free to explore this website to see!`,
                        font: 'p'
                    }
                ]
            },
            {
                name: "Future Design",
                id: "future-design",
                class: `bg-g3 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The design below has been completed this year (2024). As my ux abilities has increased over time, my original vision for this project has been able to materialise more and more.`
                    },
                    {
                        component: 'image',
                        src: '2.0_home.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: '2.0_projects.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: '2.0_project.jpg',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `I'm sure this project will continuously been under construction, but these new designs feel more aligned to what I had initially invisioned for this project.`
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
                        src: 'code_data.jpg',
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
                name: "Extra Ideas",
                id: "extra-plans",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Some ideas didn't make it to the current implimentation, however they remain on the back burner and will be implemented later.\n\nFor example, I want to add the option to choose a certain theme that will carry through the website. Like dark mode, but introduces background designs and specific colours, carefully chosen to compliment each other.`
                    },
                    {
                        component: 'image',
                        src: 'theme_1.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'theme_2.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'theme_3.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'theme_4.jpg',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `Once I add a custom cursor to the site, the idea was to add fun little characters that can either follow the cursor around - or just be interactable. Scattering these illustrations around the site would add some unique personality, and could even be themed with the project being viewed.`
                    },
                    {
                        component: 'image',
                        src: 'character_customisation.jpg',
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
        index: 3,
        title: "North Property Group",
        id: "north-property-group",
        description: "I worked with North Property Group for only a couple of months, but I managed to help rebrand them and set up email and print templates for use going forwards.",
        colour: "#720000",
        featured: false,
        featured_list: false,
        role: {
            ux: true,
            dev: true,
            graphic: true,
            brand: true
        },
        software: {
            ai: true,
            xd: true,
            photoshop: true,
            indesign: true
        },
        resources: [
            {
                name: "Logo",
                id: "logo",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Their original logo was becoming slightly outdated. With the company growing and evolving, the logo and brand needed to keep up.`
                    },
                    {
                        component: 'image',
                        src: 'logo_old.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `The new logo has sharp cutting edges, showing the world they are modern and reliable. The 'N' and 'P' from the company name form the outline of the icon shape and the pointy right angles are to represent a property.`
                    },
                    {
                        component: 'image',
                        src: 'logo_showcase.jpg',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `Now the brand has a unique and distinct glance value icon for the logo that can be carried across the branding.`
                    }
                ]
            },
            {
                name: "Branding",
                id: "branding",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The logo can be tesselate symetrically with itself to work as background assets, breaking up a potentially boring plain background and adding depth.`
                    },
                    {
                        component: 'image',
                        src: 'branding_showcase.jpg',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `The company works with different categories of customers, requiring different levels of expertise. An introduction of a new purple colour would allow the company to visually break the departments and allow each to be unique and recognisable from a glance.`
                    },
                    {
                        component: 'image',
                        src: 'social_templates.jpg',
                        alt: ''
                    }
                ]
            },
            {
                name: "Email Template",
                id: "email-template",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `The final project I completed for North Property Group was a pardot email template. I completed the design using Adobe XD, and later developed templates in MJML - a library for making email development less of a nightmare.`
                    },
                    {
                        component: 'image',
                        src: 'email_template.jpg',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `Once the development was complete and responsiveness was tested it was time to add in the Pardot meta tags and import it efficiently into Pardot. Now they can clone a master template and reduce modules as needed for the creation of what ever email they desire.`
                    }
                ]
            }
        ],
        outro: "I enjoyed my time with North Property Group and am very grateful to be able to help improve their brand."
    },
    {
        index: 4,
        title: "Fluid Ads",
        id: "fluid-ads",
        description: "Fluid Ads is an advertising platform with technology to build and handle the creation, delivery and maintenance of custom ads. I joined the company as a Digital Designer, and later moved into a Front End Development role.",
        colour: "#2dc2b8",
        featured: false,
        featured_list: false,
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
                        content: `At this time Fluid Ads was still developing the advert builder they have now, so the adverts I was creating at this time was using HTML / CSS. Later on this method would shift to building customer ads in the platform. Below are a few examples of the multitude of templates I created.`
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
                        content: `I began learning Angular5 to help with the Apps development. After some learning I began to work on some components. My main role was adding styling to the platform to make it look pretty.`
                    },
                    {
                        component: 'lineText',
                        font: 'p',
                        content: `I started by implementing the styleguide across the platform. I used an atomic design structure to style the components, so it would be consistent across the entirety.`
                    },
                    {
                        component: 'paragraph',
                        content: `I personally revamped most of the styling. Some of the front end features and functionality was also my doing, however the majority of the back-end development was done by the very talented team of developers at Fluid Ads.`
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
                        content: `On a couple of occasions I was asked to create videos that showcased the platform, so potential customers and investors could see an overview of the features. Here is one of the videos shown at the DMEXCO event.`
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
                        content: `The link will take you to a page that will give you redirect options - depending on the passed parameters. The redirect will either give you directions to the specified place, or use the company name to show you all available stores. On mobile devices, it will automatically redirect you to Google Maps.`
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
        index: 5,
        title: "LocalThrones",
        id: "localthrones",
        description: "LocalThrones was a work in progress app to help local venues stand out from the crowd. A businesses branding and marketing would be taken care of by LocalThrones, giving the customer full focus on running their business.",
        colour: "#FFD750",
        featured: false,
        featured_list: false,
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
                        src: 'user_journey.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'flow_map.jpg',
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
                        src: 'deal_create_1.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'deal_create_2.jpg',
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
        index: 6,
        title: "Clear UK",
        id: "clear-uk",
        description: "Clear UK is an organisation dedicated to reforming the laws around cannabis and proving the medicine can be a tool to help people. I handled the UX / UI and my friend would handle the development.",
        colour: "#81B29A",
        featured: false,
        featured_list: false,
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
        index: 7,
        title: "Codedump",
        id: "codedump",
        description: "Codedump was a project idea my talented colleague and friend came up with, where users would be able to store and publish bouts of code. He asked me to help with the design of the website and app.",
        colour: "#D3354D",
        featured: false,
        featured_list: false,
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
                        content: `After the designs were fully realised, I was going to help style the app using SCSS and Angular components. Codedump development was put on hold, however the designing process allowed me to sharpen my UX Design abilities.`
                    }
                ]
            }
        ],
        outro: "Codedump development was put on hold, however the designing process allowed me to sharpen my UX Design abilities."
    },
    {
        index: 8,
        title: "Rozafa",
        id: "rozafa",
        description: "Rozafa was the first potential client of a freelance business, me and some friends were going to start. Rozafa was part of a pitch to show what the branding company was capable of - designing and handling your brand and website.",
        colour: "#F5B0C5",
        featured: false,
        featured_list: false,
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
                        src: 'colours.jpg',
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
                        src: 'home.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'menu.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'menu_item.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'our_story.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'book.jpg',
                        alt: ''
                    }
                ]
            },
        ],
        outro: "We all got too busy with other responsibilities to continue with the project, so this was our first and last case study, but it was fun to work on together regardless."
    },

    {
        index: 9,
        title: "Logos",
        id: "logos",
        description: "Brand work is one of my favourite things about digital design. This page houses a few logos I worked on whilst completing brand work for clients.",
        colour: "#35485C",
        featured: false,
        featured_list: false,
        role: {
            brand: true,
            graphic: true
        },
        software: {
            ai: true
        },
        resources: [
            {
                name: "Glassware Games",
                id: "glassware-games",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Glassware Games is a small project me and a few friends started working on. I was the Graphic Designer and also the character animator for the game we were creating. Here is the logo I created for the team.`
                    },
                    {
                        component: 'image',
                        src: 'gg_logo.jpg',
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
                        content: `Ashley is an american based photographer. She reached out asking if I could design her a logo. We went through 3 iterations before she was happy with the final logo (top right).`
                    },
                    {
                        component: 'image',
                        src: 'ab_logos.jpg',
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
            }
        ],
        outro: "I always have fun making logos and love the process of coming up with fun ideas. I flourish best when allowed creating freedom."
    },
    {
        index: 10,
        title: "Illustrations & Drawings",
        id: "illustrations-drawings",
        description: "In my spare time and sometimes for commision I will craft a illustration or two. I have also added some drawings I would like to eventually turn into illustrations.",
        colour: "#35485C",
        featured: false,
        featured_list: false,
        role: {
            brand: true,
            graphic: true
        },
        software: {
            ai: true,
            photoshop: true
        },
        resources: [
            {
                name: "Mystic Touch",
                id: "mystic-touch",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Two of my close and talented friends got together to create an album - and they needed an album cover. Here is the result.`
                    },
                    {
                        component: 'image',
                        src: 'mystic_touch.jpg',
                        alt: ''
                    }
                ]
            },
            {
                name: "Food Party",
                id: "food-party",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Food party is an illustration I created depicting a nice little hang out around a fire of love.`
                    },
                    {
                        component: 'image',
                        src: 'gang_illustration.jpg',
                        alt: ''
                    }
                ]
            },
            {
                name: "Flat 21+",
                id: "flat-21",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `This was one of the first illustrations I completed. It is a little drawing of some of the people I lived with at university.`
                    },
                    {
                        component: 'image',
                        src: 'flat21+.jpg',
                        alt: ''
                    }
                ]
            },
            {
                name: "Tattoo Design",
                id: "tattoo-design",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `A friend of mine wanted to get a new tattoo - so I helped him out!`
                    },
                    {
                        component: 'image',
                        src: 'rory_tattoo.jpg',
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
                        src: 'chunky_scalf.png',
                        src2: 'chunky_pipe.png',
                        alt: '',
                        alt2: ''
                    }
                ]
            },
            {
                name: "Drawings",
                id: "drawings",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `I have a thousand drawings scattered across all my notebooks, but here are some that were around at the time. I plan to add more but here are just a few for now.`
                    },
                    {
                        component: 'image',
                        src: 'colour_drawing.jpg',
                        alt: '',
                    },
                    {
                        component: 'image',
                        src: 'coloured_apendage.jpg',
                        alt: '',
                    },
                    {
                        component: 'image',
                        src: 'coloured_characters.jpg',
                        src2: 'lined_characters.jpg',
                        alt: '',
                        alt2: ''
                    }
                ]
            }
        ],
        outro: "Drawings and illustrations are something I enjoy in my spare time and are usually projects I take on just for fun."
    },
    {
        index: 11,
        title: "Animations",
        id: "animations",
        description: "Here lives some of the most recent animations I have to show. Mainly video game characters!",
        colour: "#35485C",
        featured: false,
        featured_list: false,
        role: {
            brand: true,
            graphic: true,
            dev: true
        },
        software: {
            ai: true,
            animate: true
        },
        resources: [
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
                name: "Tempus Express",
                id: "glassware-games",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Glassware Games is a small project me and a few friends started working on. I was the Graphic Designer and also the character animator for the game we were creating.`
                    },
                    {
                        component: 'image',
                        src: 'snow_monkey_idle.gif',
                        src2: 'snow_monkey_walk.gif',
                        alt: '',
                        alt2: ''
                    }
                ]
            },
            {
                name: "Navbar Concept",
                id: "navbar-concept",
                class: `bg-w z-2`,
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
                    },
                    {
                        component: 'paragraph',
                        content: `I suppose you could say this is more development related, but the showcase here is more for the animations!`
                    }
                ]
            }
        ],
        outro: "I have been animating for many years now, but I only show the more presentable ones here. The other bits I worked on are dated or too short as projects to show."
    },
    {
        index: 12,
        title: "3D Modelling",
        id: "3d-modelling",
        description: "Find here a collection of 3D models I have worked on during my time at university as well as some more recent work - with more to come.",
        colour: "#35485C",
        featured: false,
        featured_list: false,
        role: {
            graphic: true,
            threeD: true
        },
        software: {
            photoshop: true,
            max: true
        },
        resources: [
            {
                name: "Roadmap Landscape",
                id: "prodo-roadmap",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Using Blender, I was able to use a noise texture to randomly displace an invisible mesh. I could then use this mesh as a boolean object to then cutout the shape from an array of boxes. I would then map a constant gradient material onto the mesh to help give a sense of height to the landmasses that were generated.`
                    },
                    {
                        component: 'image',
                        src: 'Prodo_Process.png',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `This allows for an infinite generation of landscapes as I move the noise texture around, and can even be animated for future asset creation. The final result, as a template for them to use in slide decks is below:`
                    },
                    {
                        component: 'image',
                        src: 'Prodo_Roadmap.png',
                        alt: ''
                    }
                ]
            },
            {
                name: "Character Design - Concept to Hi-res",
                id: "character-design-1",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `This task was the first introduction to character design in our university course. We were tasked in sketching and then producing a hi-res model of a character.`
                    },
                    {
                        component: 'image',
                        src: 'barry_concept.jpg',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `This is what my sculpting process produced:`
                    },
                    {
                        component: 'image',
                        src: 'barry.jpg',
                        alt: ''
                    }
                ]
            },
            {
                name: "Character Design - Drawing to Render",
                id: "character-design-2",
                class: `bg-g2 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `We were each tasked in drawing two characters, and then passing them on to another student, who would then convert the drawings into 3d models. I recieved a picture of a cat rabbit thing in a sweater and a man in a wheelchair with legs.`
                    },
                    {
                        component: 'paragraph',
                        content: `Here is the cat rabbit hybrid:`
                    },
                    {
                        component: 'image',
                        src: 'cabbit_front.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'cabbit_back.jpg',
                        alt: ''
                    },
                    {
                        component: 'paragraph',
                        content: `And here is the man in the wheelchair.. He isn't especially a pretty sight:`
                    },
                    {
                        component: 'image',
                        src: 'gross_face.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'gross_front.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'gross_back.jpg',
                        alt: ''
                    }
                ]
            },
            {
                name: "Character Design - Sunken",
                id: "character-design-3",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `This time we were tasked with making a game we called Sunken. I was in charge of the UI and the character models.`
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
                    {
                        component: 'paragraph',
                        content: `The trailer for the game was last spotted on my friends YouTube channel - but unfortunatly has recently deleted it, along with the trailer.`
                    },
                ]
            }
        ],
        outro: "Fun fact - the reason I got into web design/development in the first place was to add all my 3D models into a portfolio showcase! The process hooked me so much I now do it for a living."
    },
    {
        index: 13,
        title: "UX Extras",
        id: "ux-extras",
        description: "I have included some smaller projects I have worked on here to avoid crowding the main projects board.",
        colour: "#23609e",
        featured: false,
        featured_list: true,
        role: {
            ux: true,
            dev: false,
            graphic: true,
            brand: false
        },
        software: {
            ai: true,
            figma: true,
            wordpress: true
        },
        resources: [
            {
                name: "Star Citizen - UI Mockup",
                id: "logo",
                class: `bg-g1 z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `This is a concept for a potential UI display for a crate interaction in the video game Star Citizen.`
                    },
                    {
                        component: 'paragraph',
                        content: `The task was to create a user interface for an in game crate, that would handle a volitile material. The material would only be able to last in the storage container for a set amount of time before exploding.`
                    },
                    {
                        component: 'image',
                        src: 'main_crate.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'danger_integrity_crate.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'main_full.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'inventory_full.jpg',
                        alt: ''
                    }
                ]
            },
            {
                name: "Dr Zu's Reiki Healing",
                id: "dr-zu",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Zu is a dear friend of mine who is focusing on healing people through the metaphysics. She is a qualified doctor who chose a holistic path. I'm happy help her on her journey.`,
                        // link: {
                        //     url: 'https://fuelius.com',
                        //     content: 'at this link'
                        // }
                    },
                    {
                        component: 'image',
                        src: 'zu_desktop.png',
                        alt: ''
                    },
                ]
            },
            {
                name: "Wild.Self",
                id: "wild-self",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `<a/> is a company run by my dear friend, who is a fantastic Body Awareness & Self Love Coach. The project was a rebranding from scratch including a colour palette, logo and website - Designed in Figma and developed in WordPress.`,
                        link: {
                            url: 'https://wild-self.de',
                            content: 'Wild.Self'
                        }
                    },
                    {
                        component: 'image',
                        src: 'ws_logo_showcase.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'ws_typography.png',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'ws_home.jpg',
                        alt: ''
                    },
                    {
                        component: 'image',
                        src: 'ws_blogs.jpg',
                        alt: ''
                    },
                ]
            },
            {
                name: "Pop-up UI",
                id: "popup",
                class: `bg-w z-2`,
                content: [
                    {
                        component: 'paragraph',
                        content: `Below is a concept for a UI style I was playing around with.`
                    },
                    {
                        component: 'image',
                        src: 'ui_brand_idea.jpg',
                        alt: ''
                    }
                ]
            }
        ],
        outro: "I enjoyed working on this task and branching out into a different discipline of UI than web, however my true competency is with web UX/UI."
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
