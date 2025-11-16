const profile = {
    name: "Sadiq",
    age : 22,
    country: "Nigeria"
};

for (let key in profile) {
    console.log(`${key}: ${profile[key]}`);
};