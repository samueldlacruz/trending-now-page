const CATEGORIES_LIST = [
    {
        name: "general",
        icon: "ri-global-line"
    },
    {
        name: "technology",
        icon: "ri-terminal-box-line"
    },
    {
        name: "business",
        icon: "ri-briefcase-4-line",
    },
    {
        name: "entertainment",
        icon: "ri-clapperboard-fill",
    },
    {
        name: "sports",
        icon: "ri-basketball-fill",
    },
]

const colors: { [key: string]: string } = {
    "general": "text-white/50",
    "technology": "text-green-400",
    "business": "text-blue-400",
    "entertainment": "text-orange-400",
    "sports": "text-amber-500",
}

export {
    CATEGORIES_LIST, colors
}