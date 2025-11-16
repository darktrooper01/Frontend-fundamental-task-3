let word = "Mahmoud";
vowels = ['a', 'e', 'i', 'o', 'u'];

function countvowels(word) {
    for (
        vowels of word
    ) {
        console.log(vowels);
    }
};

countvowels(vowels);