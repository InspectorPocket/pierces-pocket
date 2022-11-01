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
}

interface ResourcesProps {
    name: string,
    id: string,
    titleClass?: string,
    class: string,
    circle: {
        colour: string,
        transform: string,
        top?: string,
        width?: string,
        height?: string,
        opacity?: string,
    },
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
        description: "Brand & UX Design, Front End Development",
        colour: "#35485C",
        ux: true,
        dev: true,
        brand: true,
        graphic: true,
        resources: [
            {
                name: "The Project",
                id: "the-project",
                class: `z-1`,
                circle: {
                    colour: colours.grey1,
                    transform: 'translateX(calc(-50% - 112px))',
                    top: '-52px',
                    width: '240vw',
                    height: 'calc(130% + 104px)',
                    opacity: '1'
                },
                content: [
                    {
                        component: 'paragraph',
                        content: "Welcome to Pierce’s Pocket! I designed and developed this website as a home for my work."
                    },
                    {
                        component: 'image',
                        src: 'main.jpeg',
                        alt: ''
                    },
                    {
                        component: 'lineText',
                        font: 'p',
                        content: "The style is minimal & clean. The work I produce needs to be easily accessible, whilst being pleasant to look at."
                    },
                    {
                        component: 'paragraph',
                        content: "The name Pierce's Pocket ties into the idea of having a portfolio in a digital pocket! A mobile first design was ideal for the idea."
                    }
                ]
            },
            {
                name: "Logo",
                id: "logo",
                class: `bg-g2 z-2`,
                circle: {
                    colour: colours.grey2,
                    transform: 'translateX(calc(-50% - 56px))',
                    width: '250vw'
                },
                content: [
                    {
                        component: 'paragraph',
                        content: `When designing the logo I had two things in mind. I wanted it to look like it was cutout of the page, and that two "p's" were present - one inside the other.`
                    },
                    {
                        component: 'lineText',
                        font: 'h5',
                        content: "The design utilises the golden ratio."
                    },
                    {
                        component: 'image',
                        src: 'main.jpeg',
                        alt: ''
                    }
                ]
            },
            {
                name: "Design",
                id: "design",
                class: `bg-g1 z-3`,
                circle: {
                    colour: colours.grey1,
                    transform: 'translateX(-50%)',
                    width: '350vw',
                    height: 'calc(100% + 60px)',
                    top: '-60px'
                },
                content: [
                    {
                        component: 'paragraph',
                        content: `The style is simple but effective. Less is always more. I opted for a monochrome aesthetic, leaving space for images and slight accents to bring in the colours and adds the spice!`
                    },
                    {
                        component: 'cardText',
                        content: 'Creative freedom allowed for a less than conventional grid system. Whilst the traditional rules of spacing are applied, the grid follows the same layout as the panels in the background.',
                        colour: colours.grey2
                    },
                    {
                        component: 'paragraph',
                        content: `To add to the classy - clean - feel, I wanted a serif title with a smooth sans-serif body.`
                    },
                    {
                        component: 'lineText',
                        font: 'h5',
                        content: "Playfair Display and Open Sans dance harmoniously together on a white canvas."
                    },
                    {
                        component: 'image',
                        src: 'main.jpeg',
                        alt: '',
                        margin: 'tight'
                    },
                    {
                        component: 'image',
                        src: 'main.jpeg',
                        src2: 'main.jpeg',
                        alt: '',
                        alt2: '',
                        margin: 'tight'
                    },
                    {
                        component: 'image',
                        src: 'main.jpeg',
                        alt: '',
                        margin: 'tight'
                    },
                    {
                        component: 'image',
                        src: 'main.jpeg',
                        src2: 'main.jpeg',
                        alt: '',
                        alt2: '',
                        margin: 'tight'
                    }
                ]
            },
            {
                name: "Development",
                id: "development",
                class: `bg-w z-4`,
                circle: {
                    colour: 'transparent',
                    transform: 'translateX(calc(-50% - 56px))',
                    width: '250vw'
                },
                content: [
                    {
                        component: 'paragraph',
                        content: `I developed the app with React and used Sass for styling.`
                    },
                    {
                        component: 'cardText',
                        content: "I had never used react before starting this project – however I was familiar with Angular – so it didn’t take too long to get things moving.",
                        colour: colours.grey1
                    },
                    {
                        component: 'paragraph',
                        // TODO Add ability to add inline links
                        content: `You can view the code over on GitHub.`
                    },
                ]
            }
        ],
        outro: `Pierce’s Pocket is a work in progress. I have plans to make it more interactive and make it more like a playground for my coding adventures!\n\nBut for now, feel free to check out the rest of the site.`
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
                class: `mg-t-8 mg-b-8 pd-b-20 z-1`,
                circle: {
                    colour: colours.grey1,
                    transform: 'translateX(calc(-50% - 112px))',
                    top: '-52px',
                    width: '240vw',
                    height: 'calc(130% + 104px)',
                    opacity: '1'
                },
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
                circle: {
                    colour: colours.grey1,
                    transform: 'translateX(calc(-50% - 112px))',
                    top: '-52px',
                    width: '240vw',
                    height: 'calc(130% + 104px)',
                    opacity: '1'
                },
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
                circle: {
                    colour: colours.grey1,
                    transform: 'translateX(calc(-50% - 112px))',
                    top: '-52px',
                    width: '240vw',
                    height: 'calc(130% + 104px)',
                    opacity: '1'
                },
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
                circle: {
                    colour: colours.grey1,
                    transform: 'translateX(calc(-50% - 112px))',
                    top: '-52px',
                    width: '240vw',
                    height: 'calc(130% + 104px)',
                    opacity: '1'
                },
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
                circle: {
                    colour: colours.grey1,
                    transform: 'translateX(calc(-50% - 112px))',
                    top: '-52px',
                    width: '240vw',
                    height: 'calc(130% + 104px)',
                    opacity: '1'
                },
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
                circle: {
                    colour: colours.grey1,
                    transform: 'translateX(calc(-50% - 112px))',
                    top: '-52px',
                    width: '240vw',
                    height: 'calc(130% + 104px)',
                    opacity: '1'
                },
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
                circle: {
                    colour: colours.grey1,
                    transform: 'translateX(calc(-50% - 112px))',
                    top: '-52px',
                    width: '240vw',
                    height: 'calc(130% + 104px)',
                    opacity: '1'
                },
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
  