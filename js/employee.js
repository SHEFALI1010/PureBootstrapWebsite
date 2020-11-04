var empdetails=[
    {
        "name":"a",
        "age":25,
        "gender":"male"
    },
    {
        "name":"b",
        "age":35,
        "gender":"female"
    },
    {
        "name":"c",
        "age":25,
        "gender":"male"
    },
    {
        "name":"d",
        "age":25,
        "gender":"female"
    },
    {
        "name":"d",
        "age":45,
        "gender":"male"
    },
    {
        "name":"e",
        "age":25,
        "gender":"male"
    },
    {
        "name":"f",
        "age":55,
        "gender":"female"
    },
    {
        "name":"g",
        "age":25,
        "gender":"male"
    },
    {
        "name":"h",
        "age":25,
        "gender":"female"
    },
    {
        "name":"i",
        "age":35,
        "gender":"male"
    },
    {
        "name":"j",
        "age":25,
        "gender":"female"
    }
]


$(document).ready(function() {
    var table = $('#myTable');
  
    var max_size = empdetails.length;
    var start= 0;
    var elements_per_page = 4;
    var limit = elements_per_page;
    
    Fun(start, limit);
    function Fun(start, limit) {
        for (var i = start; i < limit; i++) {
      //    var tab = '<tr><td>' + empdetails[i].name + "\n" + '</td><td>' + empdetails[i].age + "\n" + '</td><td>' + empdetails[i].gender + "\n" + '</td></tr>';
            $('#myTable').append("<li>a</li>");
        }
      }
      $('#nextValue').click(function() {
        var next = limit;
        if (max_size >= next) {
          limit = limit + elements_per_page;
          table.empty();
          Fun(next, limit);
        }
      });
      $('#PreValue').click(function() {
        var pre = limit - (2 * elements_per_page);
        if (pre >= 0) {
          limit = limit - elements_per_page;
          table.empty();
          Fun(pre, limit);
        }
      });
    
    });
    
    