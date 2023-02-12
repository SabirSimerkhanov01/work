const capitalize = (word) => {
    const first = word[0].toUpperCase();
    const two = word.slice(1);
    return `${first}${two}`;
};

export default capitalize;
