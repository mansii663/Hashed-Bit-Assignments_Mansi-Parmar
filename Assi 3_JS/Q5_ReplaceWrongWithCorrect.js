function correctString(sentence, wrong, correct)
{
    return sentence.replace(wrong, correct);
}

console.log(correctString("I love JvaaScript", "JvaaScript", "JavaScript"));