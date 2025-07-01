type Jobs = {
    title: string
    dates: string
    description: string
}

type workDataObject = {
    company: string,
    slug: string,
    startDate: string,
    endDate: string,
    job: Jobs[]
}

type workDataType = workDataObject[]

const workData: workDataType = [
    {
        company: "BigCommerce",
        slug: "bigcommerce",
        startDate: "Dec 2021",
        endDate: "Present",
        job: [
            {
                title: "Developer advocate",
                dates: "Feb 2025 - Present",
                description: "Create content"
            },
            {
                title: "Developer documentation specialist",
                dates: "Dec 2021 - Feb 2025",
                description: "Worked with PMs and engineers to write and maintain REST API documentation. Created reusable markdown and JSON templates to streamline onboarding docs. Introduced Git workflows to new writers, improving collaboration and review cycles."
            }
        ],
    },
    {
        company: "UChicago Comprehensive Cancer Center",
        slug: "uchicago-comprehensive-cancer-center",
        startDate: "Sept 2021",
        endDate: "Dec 2021",
        job: [
            {
                title: "Science writing and social media intern",
                dates: "Sept 2021 - Dec 2021",
                description: "Write blogs and promote on Twitter"
            }
        ]
    },
    {
        company: "Illinois Science Council",
        slug: "illinois-science-council",
        startDate: "Mar 2020",
        endDate: "Dec 2020",
        job: [
            {
                title: "Volunteer editor for Science Unsealed blog",
                dates: "Mar 2020 - Dec 2020",
                description: "Edit and publish blog posts"
            }
        ]
    },
    {
        company: "University of Chicago",
        slug: "university-of-chicago",
        startDate: "Sept 2019",
        endDate: "Dec 2021",
        job: [
            {
                title: "Graduate research assistant",
                dates: "Sept 2019 - Dec 2021",
                description: "Conduct research in a lab"
            }
        ]
    },
    {
        company: "University of Washington, Seattle",
        slug: "university-of-washington-seattle",
        startDate: "Dec 2021",
        endDate: "Present",
        job: [
            {
                title: "Undergraduate research assistant",
                dates: "Jan 2017 - Jun 2019",
                description: "Conduct research in a lab"
            }
        ]
    }
]

export default workData 