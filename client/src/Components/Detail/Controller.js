export const Num = (num) => {
    if(num < 10) {
        const number = num / 10;
        return number;
    } else if(num > 10) {
        const seg = num * 0.10;
        const number = seg.toFixed(2);
        return number;
    } else if(num > 10) {
        const seg = num * 0.100;
        const number = seg.toFixed(2);
        return number;
    };
};

export const Weight = (weight) => {
    if(weight < 100) {
        const value = weight / 10;
        return value;
    }else if(weight > 100) {
        const value = weight / 10;
        return value;
    };
};

export const Percentage = (percentage) => {
    const value = percentage / 255 * 100;
    return `${value} ${'%'}`
};