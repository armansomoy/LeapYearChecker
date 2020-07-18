// Author: Arman Hossain Somoy

function leapyear(year) {
    if ((year % 100 != 0) & (year % 4 == 0) | (year % 400 == 0)) {
        alert('This is Leap Year');
    } else {
        alert('This is not Leap Year');
    }
}