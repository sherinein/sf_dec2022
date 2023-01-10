let str="ABnC,A2C,AA,A C";
let pattern =/A..C/g;
let patternmatch=str.match(pattern);
console.log(patternmatch);

//Expression
// [abc] --> any of the characters inside the bracket
                apple -valid
                ball -valid
                car -valid
                mouse - invalid 
// [^abc]---> enter any character except abc
            mouse - valid
            apple - invalid
// [0-9] --> allow the digit b/w 0 to 9
// [a-z]--->allow a to z
// [A-Z] --->allow A to Z
// [^0-9]---> not allow to enter digit b/w 0 to 9
// x | y --> x or y
/*
RE Modifier
----------------
g - global          / /
i - case insensitive
m -  multiline matching
*/

// Meta character

//Quantifier
 //+ , * , ?
 /*
    \A - Matches if the specified characters are at the start of a string.
    \b - Matches if the specified characters are at the beginning or end of a word.
    \B - Opposite of \b. Matches if the specified characters are not at the beginning or end of a word
    \d - Matches any decimal digit. Equivalent to [0-9]
    \D - Matches any non-decimal digit. Equivalent to [^0-9]
   \s - Matches where a string contains any whitespace character. Equivalent to [ \t\n\r\f\v].
  \S - Matches where a string contains any non-whitespace character. Equivalent to [^ \t\n\r\f\v].
   \w - Matches any alphanumeric character (digits and alphabets). Equivalent to [a-zA-Z0-9_].
   \W - Matches any non-alphanumeric character. Equivalent to [^a-zA-Z0-9_]
 \Z - Matches if the specified characters are at the end of a string.


    
    
    
    */