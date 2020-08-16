export const delay = (x: number): Promise<void> =>
    new Promise((res) => setTimeout(res, x));
