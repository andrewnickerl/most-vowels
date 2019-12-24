// YOUR CODE BELOW

function mostVowels(words)
{
    let currentWord = '';
    let currentVowelCount = 0;

    let maxWord = '';
    let maxVowelCount = 0;

    for(let i = 0; i <= words.length; i++)
    {
        if(words[i] !== ' ')  //discluding spaces and punctuation, adds current character to 
        {                     //currentWord and increases currentVowelCount for vowels
            if(words[i] !== undefined && words[i] !== '.' && words[i] !== '?' && words[i] !== '!')
            {
                currentWord += words[i]
            }
            if(words[i] === 'a' || words[i] === 'e' || words[i] === 'i' || words[i] === 'o' || words[i] === 'u')
            {
                currentVowelCount += 1;
            }
        }
        if(words[i] === ' ')  //upon encountering a space set current word to max word if it has
        {                     //more vowels than previous max word, then resets current word
            if(currentVowelCount > maxVowelCount)   
            {
                maxVowelCount = currentVowelCount;
                maxWord = currentWord;
            }

            currentWord = '';
            currentVowelCount = 0;
        }
        if (words[i] === undefined) 
        {
            if(currentVowelCount > maxVowelCount)
            {
                maxVowelCount = currentVowelCount;
                maxWord = currentWord;
            }
            return maxWord;
        }
    }
    return maxWord;
}

console.log(mostVowels('Give her hell from us, Peeves.'))