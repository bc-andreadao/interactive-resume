
type sampleData = {
    company: string;
    slug: string;
    samples: {
        title: string;
        description: string;
        filename: string;
    }[];
}

const sampleData: sampleData[] = [
    {
        "company": "BigCommerce",
        "slug": "bigcommerce",
        "samples" : [
            {
                "title": "Sample Project 1",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                "filename": "sample-1"
            },
            {
                "title": "Sample Project 2",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                "filename": "sample-2"
            },
            {
                "title": "Sample Project 3",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                "filename": "sample-3"
            }
        ]
    },
    {
        "company": "UChicago Comprehensive Cancer Center",
        "slug": "uchicago-comprehensive-cancer-center",
        "samples": [
            {
                "title": "Sample Project 4",
                "description": "This is a description of sample project 4. It highlights the use of modern web technologies and best practices in software development.",
                "filename": "sample-4"
            }
        ]
    },
    {
        "company": "Illinois Science Council",
        "slug": "illinois-science-council",
        "samples": [
            {
                "title": "Sample Project 5",
                "description": "This is a description of sample project 5. It highlights the use of modern web technologies and best practices in software development.",
                "filename": "sample-5"
            }
        ]
    },
]

export default sampleData;