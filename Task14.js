let temp = window.prompt("Enter temperature:  ?");
if (temp = 30){
    console.log("hot");
}
else if (temp = 20 && temp < 30){
    console.log("warm");
}
else if (temp < 20){
    console.log("cold");
}

else {
    console.log("unknown temperature");
};




let temp = Number(window.prompt("Enter temperature: ?")); // Convert input to number

if (temp === 30) {
    console.log("hot");
} else if (temp >= 20 && temp < 30) {
    console.log("warm");
} else if (temp < 20) {
    console.log("cold");
} else {
    console.log("unknown temperature");
}

// corrected version with external help.
