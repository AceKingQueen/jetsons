var table_data = [ { first_name : 'Rose',
                     last_name  : 'Tyler',
                     home       : 'Earth' },
                   { first_name : 'Zoe',
                     last_name  : 'Heriot',
                     home       : 'Space Station W3'},
                   { first_name : 'Jo',
                     last_name  : 'Grant',
                     home       : 'Earth'},
                   { first_name : 'Leela',
                     last_name  : null,
                     home       : 'Unspecified'},
                   { first_name : 'Romana',
                     last_name  : null,
                     home       : 'Gallifrey'},
                   { first_name : 'Clara',
                     last_name  : 'Oswald',
                     home       : 'Earth'},
                   { first_name : 'Adric',
                     last_name  : null,
                     home       : 'Alzarius'},
                   { first_name : 'Susan',
                     last_name  : 'Foreman',
                     home       : 'Gallifrey'} ];

console.log(table_data[0]);    

//loop over each object in the table_data array 
//display the corresponding object at the populate-table divs in the html

table_data.forEach(function(item) {
    $("#populate-first-name").append("<div>" + item.first_name + "</div>");
});

table_data.forEach(function(item) {
    $("#populate-last-name").append("<div>" + item.last_name + "</div>");
});

table_data.forEach(function(item) {
    $("#populate-home").append("<div>" + item.home + "</div>");
});

