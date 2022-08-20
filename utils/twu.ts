
export const hover = (...classes: string[]) => {
    return classes.map(className => `hover:${className}`.trim()).join(" ")
}
