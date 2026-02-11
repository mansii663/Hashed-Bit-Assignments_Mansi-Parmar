let text = "JavaSceript is a programming language";
text = text.toLowerCase();

let vowels = 0;
let consonants = 0;

for(let char of text)
{
    if(char >= 'a' && char <= 'z')
    {
        if("aeiou".includes(char))
        {
            vowels++;
        }
        else
        {
            consonants++;
        }
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);