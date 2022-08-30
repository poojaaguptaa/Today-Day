let date = new Date();
let weekDay = date.getDay();
let nameOfDay;
let quote;

switch(weekDay){
    case 0: 
        nameOfDay = 'Sunday';
        quote = 'Time to chillax!';
        break;
    case 1:
        nameOfDay = 'Monday';
        quote = ' “Hey, I know it’s Monday. But it’s also a new day and a new week. And in that lies a new opportunity for something special to happen.” ';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        quote = 'Tuesday is Monday’s ugly sister.';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        quote = 'Wednesday can only dream of becoming Thursday.';
        break;
    case 4:
        nameOfDay = 'Thursday';
        quote = 'Playing on a Thursday and then a Sunday is not a problem.';
        break;
    case 5:
        nameOfDay = 'Friday';
        quote = 'Ohhh Friday aa! ';
        break;
    case 6:
        nameOfDay = 'Saturday';
        quote = 'Time to party!';
        break;

}

document.getElementById("weekday").innerHTML =  nameOfDay;
document.getElementById("quotes").innerHTML = quote;


