import colours from "../sass/_foundation/_colours.module.scss";
import projectStyles from '../pages/Projects/Projects.module.scss';

interface ContentProps {
    component: string,
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
    ux: boolean,
    dev: boolean,
    brand: boolean,
    graphic: boolean,
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
        ux: true,
        dev: true,
        brand: true,
        graphic: true,
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
                        content: `I developed the app with React and used Sass for styling. Using components allows projects to be loaded dynamically. I used a separate file for adding project content, and the Project component will loop through the project array to dynamically generate content on the fly.`
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
                    },
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
        title: "LocalThrones",
        id: "localthrones",
        description: "UX Design",
        colour: "#F7E16A",
        ux: true,
        dev: false,
        brand: false,
        graphic: false,
        resources: [
            {
                name: "The Project",
                id: "the-project",
                class: ``,
                content: [
                    {
                        component: 'lineText',
                        font: 'p',
                        content: "Welcome to Pierce’s Pocket! I designed and developed this website as a home for my work."
                    },
                ]
            }
        ],
        outro: "Pierce’s Pocket is a work in progress. I have plans to make it more interactive and make it more like a playground for my coding adventures!\n\nBut for now, feel free to check out the rest of the site."
    },
    {
        index: 2,
        title: "Fluid Ads",
        id: "fluid-ads",
        description: "Graphic Design & Front End Development",
        colour: "#29D8E6",
        ux: true,
        dev: true,
        brand: false,
        graphic: true,
        resources: [
            {
                name: "The Project",
                id: "the-project",
                class: `mg-t-8 mg-b-8 pd-b-20 z-1`,
                content: [
                    {
                        component: 'lineText',
                        font: 'p',
                        content: "Welcome to Pierce’s Pocket! I designed and developed this website as a home for my work."
                    },
                ]
            }
        ],
        outro: "Pierce’s Pocket is a work in progress. I have plans to make it more interactive and make it more like a playground for my coding adventures!\n\nBut for now, feel free to check out the rest of the site."
    },
    {
        index: 3,
        title: "Wild.Self",
        id: "wild-self",
        description: "Brand & UX Design, Front End Development",
        colour: "#E62929",
        ux: true,
        dev: true,
        brand: true,
        graphic: true,
        resources: [
            {
                name: "The Project",
                id: "the-project",
                class: `mg-t-8 mg-b-8 pd-b-20 z-1`,
                content: [
                    {
                        component: 'lineText',
                        font: 'p',
                        content: "Welcome to Pierce’s Pocket! I designed and developed this website as a home for my work."
                    },
                ]
            }
        ],
        outro: "Pierce’s Pocket is a work in progress. I have plans to make it more interactive and make it more like a playground for my coding adventures!\n\nBut for now, feel free to check out the rest of the site."
    },
    {
        index: 4,
        title: "Clear UK",
        id: "clear-uk",
        description: "UX Design",
        colour: "#7DD876",
        ux: true,
        dev: true,
        brand: true,
        graphic: false,
        resources: [
            {
                name: "The Project",
                id: "the-project",
                class: `mg-t-8 mg-b-8 pd-b-20 z-1`,
                content: [
                    {
                        component: 'lineText',
                        font: 'p',
                        content: "Welcome to Pierce’s Pocket! I designed and developed this website as a home for my work."
                    },
                ]
            }
        ],
        outro: "Pierce’s Pocket is a work in progress. I have plans to make it more interactive and make it more like a playground for my coding adventures!\n\nBut for now, feel free to check out the rest of the site."
    },
    {
        index: 5,
        title: "Codedump",
        id: "codedump",
        description: "Brand & UX Design",
        colour: "#D876BD",
        ux: true,
        dev: true,
        brand: true,
        graphic: false,
        resources: [
            {
                name: "The Project",
                id: "the-project",
                class: `mg-t-8 mg-b-8 pd-b-20 z-1`,
                content: [
                    {
                        component: 'lineText',
                        font: 'p',
                        content: "Welcome to Pierce’s Pocket! I designed and developed this website as a home for my work."
                    },
                ]
            }
        ],
        outro: "Pierce’s Pocket is a work in progress. I have plans to make it more interactive and make it more like a playground for my coding adventures!\n\nBut for now, feel free to check out the rest of the site."
    },
    {
        index: 6,
        title: "Rozafa",
        id: "rozafa",
        description: "UX Design",
        colour: "#76D4D8",
        ux: true,
        dev: false,
        brand: true,
        graphic: false,
        resources: [
            {
                name: "The Project",
                id: "the-project",
                class: `mg-t-8 mg-b-8 pd-b-20 z-1`,
                content: [
                    {
                        component: 'lineText',
                        font: 'p',
                        content: "Welcome to Pierce’s Pocket! I designed and developed this website as a home for my work."
                    },
                ]
            }
        ],
        outro: "Pierce’s Pocket is a work in progress. I have plans to make it more interactive and make it more like a playground for my coding adventures!\n\nBut for now, feel free to check out the rest of the site."
    },
    {
        index: 7,
        title: "Brand Design",
        id: "brand-design",
        description: "A collection of branding work",
        colour: "#9646D1",
        ux: false,
        dev: false,
        brand: true,
        graphic: false,
        resources: [
            {
                name: "The Project",
                id: "the-project",
                class: `mg-t-8 mg-b-8 pd-b-20 z-1`,
                content: [
                    {
                        component: 'lineText',
                        font: 'p',
                        content: "Welcome to Pierce’s Pocket! I designed and developed this website as a home for my work."
                    },
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
  