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
    outro: string
}

const projects: ProjectsProps[]  = [
{
    index: 6,
    title: "Wild.Self",
    id: "wild-self",
    description: "Wild.Self is a company run by my dear friend, who is a fantastic Body Awareness & Self Love Coach. The project was a rebranding from scratch - using new ideas as well as existing ideas from her previous brand.",
    colour: "#AE2012",
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
}
]