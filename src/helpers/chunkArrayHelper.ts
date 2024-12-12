export const chunkArray = (data: any[], size: number) => {
    const result = [];
    for (let i = 0; i < data.length; i += size) {
        result.push(data.slice(i, i + size));
    }
    return result;
};