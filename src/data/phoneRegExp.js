export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

/*
PHONE NUMBERS SUPPORTED BY THIS REGEX

Standard Telephone numbers
+61 1 2345 6789
+61 01 2345 6789
01 2345 6789
01-2345-6789
(01) 2345 6789
(01) 2345-6789
1234 5678
1234-5678
12345678

Mobile Numbers
0123 456 789
0123456789

International Phone Numbers
US Format - +1 (012) 456 7890
US Virgin Islands (four digit international code) +1-340 123 4567
*/
