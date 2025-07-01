
type sampleData = {
    company: string;
    slug: string;
    samples: {
        title: string;
        description: string;
        link: string;
    }[];
}

const sampleData: sampleData[] = [
    {
        "company": "BigCommerce",
        "slug": "bigcommerce",
        "samples" : [
            {
                "title": "Sample Project 1",
                "description": "This is a description of sample project 1. It showcases various features and functionalities that can be implemented in a web application.",
                "link": "/samples/sample-1"
            },
            {
                "title": "Sample Project 2",
                "description": "This is a description of sample project 2. It highlights the use of modern web technologies and best practices in software development.",
                "link": "/samples/sample-2"
            },
            {
                "title": "Sample Project 3",
                "description": "This is a description of sample project 3. It highlights the use of modern web technologies and best practices in software development.",
                "link": "/samples/sample-3"
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
                "link": "/samples/sample-4"
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
                "link": "/samples/sample-5"
            }
        ]
    },
]

export default sampleData;