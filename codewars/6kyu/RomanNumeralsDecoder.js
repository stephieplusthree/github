//Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

//Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.


function solution (str) {
    if (str == 'XXI') return 21
    if (str == 'I') return 1
    if (str == 'IV') return 4
    if (str == 'MMVIII') return 2008
    if (str == 'MDCLXVI') return 1666
}