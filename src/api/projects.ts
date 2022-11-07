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
    role: {
        ux?: boolean,
        brand?: boolean,
        graphic?: boolean,
        dev?: boolean
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
        premiere?: boolean
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
        description: "Wild.Self is a company ran by my dear friend Jenny, who is a fantastic Body Awareness & Self Love Coach. The project was a rebranding from scratch - using Jenny's new ideas as well as existing ideas from her previous brand. ",
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
                        content: `To complete the brand, I replicated the design of the website and fashioned some basic templates for Jenny to manipulate on Canva, and use for Instagram.`
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
        description: "UX Design",
        colour: "#F7E16A",
        role: {
            ux: true,
            brand: true
        },
        software: {
            figma: true,
        },
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
        index: 3,
        title: "Fluid Ads",
        id: "fluid-ads",
        description: "Graphic Design & Front End Development",
        colour: "#29D8E6",
        role: {
            ux: true,
            dev: true,
            graphic: true
        },
        software: {
            sketch: true,
            wordpress: true,
            angular: true,
            ai: true,
            animate: true,
            premiere: true,
        },
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
        role: {
            ux: true,
            brand: true
        },
        software: {
            xd: true
        },
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
        role: {
            ux: true,
            brand: true
        },
        software: {
            sketch: true
        },
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
        role: {
            ux: true,
            brand: true
        },
        software: {
            figma: true
        },
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
        role: {
            brand: true
        },
        software: {
            ai: true,
            xd: true,
            sketch: true
        },
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
  