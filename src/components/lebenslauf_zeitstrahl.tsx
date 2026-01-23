export interface TimelineEntry {
    title: string;
    subtitle?: string;
    location?: string;
    start: string;
    end?: string;
    details?: string[];
    category: "profile" | "experience" | "education" | "job";
}


export const timeline: TimelineEntry[] = [
// PROFILE
//     {
//         title: "Geburtsdatum",
//         subtitle: "21. Mai 1992",
//         location: "Nürnberg, Deutschland",
//         start: "1992-05-21",
//         category: "profile"
//     },

// EDUCATION
    {
        title: "Bachelor",
        subtitle: "Hochschule Schmalkalden – Multimediamarketing",
        location: "Thüringen",
        start: "2013",
        end: "2018",
        category: "education",
        details: [
            "Ohne Abschluss"
        ]
    },
    {
        title: "Bachelor",
        subtitle: "Hochschule Ansbach – Wirtschaftsinformatik",
        location: "Ansbach",
        start: "2013",
        end: "2013",
        category: "education",
        details: [
            "Ohne Abschluss"
        ]
    },
    {
        title: "Fachhochschulreife",
        subtitle: "Fachhochschule Nürnberg – BWL, VWL, Wirtschaftswissenschaften",
        location: "Nürnberg",
        start: "2010",
        end: "2012",
        category: "education"
    },
];

export const timelineExperience: TimelineEntry[] = [

// EXPERIENCE

    {
        title: 'Frontend Developer',
        subtitle: "freelancermap GmbH",
        location: "Nürnberg",
        category: "job",
        start: "01/2021",
        end: "bis heute",
        details: [
            "Redesign 2021",
            "Redesign 2024-25",
            "Admin",
            "freelance-o-mat",
            "designenlassen.de",
        ]
    },
    {
        title: 'Junior Frontend Developer',
        subtitle: "united vertical media GmbH",
        location: "Nürnberg",
        category: "job",
        start: "01/2019",
        end: "12/2020",
        details: [
            "Gastromanager",
            "Pickupcard"
        ],
    },
    {
        title: 'Werkstudent',
        subtitle: "Gossenmetrawatt",
        location: "Nürnberg",
        category: "job",
        start: "01/2019",
        end: "12/2020",
        details: [
            "IT-Support-Spezialist (AnyDesk)",
        ],
    },
    {
        title: 'Frontend Developer (Praktikum)',
        subtitle: "KOM21",
        location: "Nürnberg",
        category: "job",
        start: "01/2019",
        end: "12/2020",
        details: [
            "Daily Business",
        ],
    },
];