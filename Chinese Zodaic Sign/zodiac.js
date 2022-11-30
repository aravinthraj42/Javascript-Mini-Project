function zodiac(year){
    if(year % 12 == 1) return 'Roaster';
    else if(year % 12 == 2) return 'Dog';
    else if(year % 12 == 3) return 'Pig';
    else if(year % 12 == 4) return 'Rat';
    else if(year % 12 == 5) return 'Ox';
    else if(year % 12 == 6) return 'Tiger';
    else if(year % 12 == 7) return 'Hare';
    else if(year % 12 == 8) return 'Dragon';
    else if(year % 12 == 9) return 'Snake';
    else if(year % 12 == 10) return 'Horse';
    else if(year % 12 == 11) return 'Sheep';
    else if(year % 12 == 0) return 'Monkey'
}