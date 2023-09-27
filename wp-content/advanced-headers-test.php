<?php
/**
* This file is created by Really Simple SSL to test the CSP header length
* It will not load during regular wordpress execution
*/


if ( !headers_sent() ) {
header("X-REALLY-SIMPLE-SSL-TEST: %F6A%19%88%0D%D1R%5D%B5%BB%8B9%B2t%95V%BE%9A%CD%F6%07CT%19%01%3B%29%12%5B%BB+%0A%899%D9%9F%9FU%7E%FA%92%5B1%86%B1%2C%99%E6%B4C%A0I%29%7Bq%DA%CC%06%00%C4%83%AD%26%A06M%81%CD%F1%03%8Da%E8hZ3%16P%DD%00%8C%B0%E0%04%2F%E3V%23%13%E2%B4J%F7y%D4E%CC%E6%5C%94%D2%26%23%3C%09%1E%97GG+%01q%5D+6N%82%9B%C4%0C%D8%B1%1B%92g%B3%07%5C%B2P%AB%85r%A2%BE%1A%E5%17%3Dj%01%8C%A6%7Dhjz%A8bxiz%A7%3D%3B%A6P%D5%94%5E%D2I%84%A1%D7%8B%83%E9%BB5%88%23%C8%05c%A6%E9%8Ex.%23%F3%F9%7C%F9%7F%CAT%FA%95%13X%A0h%C0sM%EA%BD%C1J%3B%14%");
}

 echo '<html><head><meta charset="UTF-8"><META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW"></head><body>Really Simple SSL headers test page</body></html>';