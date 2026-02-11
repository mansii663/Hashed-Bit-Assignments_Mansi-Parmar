const states = ["Gujarat", "Maharashtra", "Uttar Pradesh", "Odisha", "Kerala", "Assam", "Rajasthan", "Punjab", "Madhya Pradesh", "Haryana", "West Bengal", "Himachal Pradesh", "Arunachal Pradesh"];

const result = states.filter(state => {
    const firstChar = state[0].toLowerCase();
    return !['a', 'e', 'i', 'o', 'u'].includes(firstChar);
});

console.log(result);