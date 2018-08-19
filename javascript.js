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

//when the "See Data" button is clicked, run the populateTable function
$("#add-data").on("click", function(event) {

    populateTable();

});


function populateTable() {

    //loop over each object in the array, and for each one of them, create a new row
    table_data.forEach(function(item) {

    //create individual cells for each piece of data    
    var createFirstNameCell = $("<td></td>").append(item.first_name);
    var createLastNameCell = $("<td></td>").append(item.last_name);
    var createHomeCell = $("<td></td>").append(item.home);

     //create a new row for each object item in the array
    var createRow = $("<tr></tr>");

    //append all the cells together
    createRow.append(createFirstNameCell);
    createRow.append(createLastNameCell);
    createRow.append(createHomeCell);
    
    //create the new row at the end of the table
    $("#data-table").append(createRow);

    });

}



