# Anastasiya Lebedevich

## Contacts

- E-mail - deadbeat.hd.07@gmail.com
- Telegram - [@anastasiya_lebedevich](https://t.me/anastasiya_lebedevich)
- Discord - Nastya Lebedevich(@deadbeathd07)

## Personal Information

### Target

The main goal is to get a job as a frontend developer, speak English fluently. Short term goal is to complete two small projects I'm working on at the moment. The accompanying goal at this stage is to complete courses at rs-school.

### Strong character traits

I am a very patient person in relation to other people, I quickly find a common language with people, especially if they are also interested in communication. When my efforts are noticed and praised, I begin to work even harder.

### Weak character traits

I tend to downplay my achievements and devalue my own work. Also, I am not always punctual in routine duties.

### Work experience

I don't have experience as a frontend developer, but I'm looking to improve my development skills. I study every day, I do small projects on my own. Even when sometimes it seems to me that my efforts are not enough or I do not see the expected result, I do not allow negative thoughts to capture me and continue my activities.

### Skills

- HTML / CSS (SCSS/SASS)
- BEM
- JavaScript
- React.js
- Node.js
- MySQL
- Webflow
- Git
- Webpack
- Gulp
- NPM
- Devtools
- Adobe Photoshop
- Adobe Illustrator
- Figma

### Сode example

#### Description

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

#### Examples

`the-stealth-warrior" gets converted to "theStealthWarrior`
`The_Stealth_Warrior" gets converted to "TheStealthWarrior`

#### Solution

```
function toCamelCase(str) {
  if (str.length === 0) {
    return "";
  } else {
    let separator;
    if (str.indexOf("-") !== -1) {
      separator = "-";
    } else if (str.indexOf("_") !== -1) {
      separator = "_";
    }
    return str
      .split(separator)
      .map((substr, index) => {
        return index === 0 ? substr : substr[0].toUpperCase() + substr.slice(1);
      })
      .join("");
  }
}
```

### Project examples

- Notes:
  - code - [Github](https://github.com/deadbeathd07/notes-ivashin-test)
  - deploy - [Netlify](https://musical-rugelach-61598f.netlify.app/)
- My site:
  - code - [Github](https://github.com/deadbeathd07/lebedevichAV)
  - deploy - [Github](https://deadbeathd07.github.io/lebedevichAV/)
- Search github pages:
  - code - [Github](https://github.com/deadbeathd07/paralect-test)
  - deploy - [Github](https://deadbeathd07.github.io/paralect-test/)

### Education

I have a higher engineering education. Graduated from the Belarusian National Technical University in 2016.
Completed courses in Adobe Photoshop at the itAcademy.
Completed HTML+CSS+JS+React courses at the itShatle.
I am currently attending an English language school (intermediate).

### English language

My English proficiency is at the pre-intermediate level. I am good at listening to spoken language and understand documentation well at this level. Speaking practice is still not enough in sufficient quantity, but I am working on it.
