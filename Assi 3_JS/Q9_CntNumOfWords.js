function countWords(text)
{
    return text.trim().split(/\s+/).length;
}

console.log(countWords("JavaScript is very powerful and easy to learn"));