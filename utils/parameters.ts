export const parametersFormatted = (parameters: { [key: string]: any }): string => {
    return Object.entries(parameters).map(([key, value]) => {
        return `${key}=${value}`;
    }).join('&');
}
