//Fibonacci 
fibonacci = function () {
let i;
let fib = [0, 1]; 
let limit = Number(document.getElementById("limit").value)
 //window.prompt('Enter the limit for your series:','');
for(i = 2; i <= limit; i++){
fib[i] = fib[i-2]+fib[i-1];
}
//console.log(fib);
document.getElementById("fibonacci").innerHTML = fib;
}
//fibonacci()

//awful neigborhood
    

neighborhood = function(flat_floor)  {
  let flat = window.prompt('Enter yor flat number:','');
      let flat_num = parseInt(flat);
      let floor = flat_num/3;
      let floor_num;
      let result;

  if (floor % 3 == 0) {
    floor_num = floor;
  } else {
    floor_num = Math.ceil(floor);   
  }

  if (floor_num  == 1) {
    floor_num == 1;
    document.getElementById("floor_num").innerHTML = floor_num;
    document.getElementById("advice").innerHTML = 'your floor is 1';
      console.log('your floor is 1. Go home')

  }else if (floor_num % 2 == 0 && floor_num !==2 ) {
      floor_num +=1
      document.getElementById("floor_num").innerHTML = floor_num;
     document.getElementById("advice").innerHTML = 'your floor down 1';
      console.log('your floor down 1')
  } else if (floor_num % 2 !== 0){
    result = floor_num; 
    document.getElementById("floor_num").innerHTML = result;
     document.getElementById("advice").innerHTML = 'Go home';
    console.log('your floor')
  }
  else if (floor_num == 2) {
    floor_num -=1
    document.getElementById("floor_num").innerHTML = floor_num;
    document.getElementById("advice").innerHTML = 'your floor is 1. Go upstair';
    console.log('your floor is 1. Go upstair')
  }
  else {
    result = floor_num; 
    console.log(result)
    console.log('your floor')
  }
}
//neighborhood()

//funny array
funny_array = function(positive_negative) {
    
    let m = document.getElementById("m").value;
    let n = document.getElementById("n").value;

    let array = []
    let array_positive = [];
    let array_negative = [];
    for (let i = 0; i < m; i++) {
        array[i] = [];
        for(let j = 0; j < n; j++ ) {
            array[i][j] = (Math.floor(Math.random()*199) - 99);
        }
    }
    for (let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++ ) {
            if (array[i][j] < 0) {
               array_negative.push(array[i][j]);
            } else {
                array_positive.push(array[i][j]);
            }
        }
    }

document.getElementById("array").innerHTML = array;
document.getElementById("array_pos").innerHTML = array_positive;
document.getElementById("array_neg").innerHTML = array_negative;
console.log(array);
console.log(array_positive);
console.log(array_negative);
}
 // funny_array();




 //university 

 let timetable = [];
 timetable[0] = {
     name: 'Node.js',
     group: 'IK91',
     aud: 365,
     day: 'Monday',
     time: '8:30'
 }
 timetable[1] = {
     name: 'Math',
     group: 'IK91',
     aud: 35,
     day: 'Tuesday',
     time: '10:25'
 }
 timetable[2] = {
  name: 'English',
  group: 'IK91',
  aud: 335,
  day: 'Tuesday',
  time: '12:15'
}
 timetable[3] = {
     name: 'English',
     group: 'IK92',
     aud: 335,
     day: 'Wednesday',
     time: '8:30'
 }
 timetable[4] = {
     name: 'Node.js',
     group: 'IK92',
     aud: 155,
     day: 'Tuesday',
     time: '14:15'
 }
 timetable[5] = {
     name: 'Node.js',
     group: 'IK93',
     aud: 24,
     day: 'Tuesday',
     time: '10:25'
 }
 timetable[5] = {
  name: 'AKS',
  group: 'IK93',
  aud: 345,
  day: 'Friday',
  time: '8:30'
}
 
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 
    function getDayOfWeek(valueDateParam) {
       var v = valueDateParam;
       var n = v.split('-');
       var y = n[0];
       var m = n[1];
       var d = n[2];
       var g = new Date(valueDateParam);
       var weekday =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
       var wd = weekday[g.getDay()];
       return wd;
   }
 
 
    function search_in_timetable() {
       let ahtung = true;
       const roz = [];
       let select = document.getElementById('select');
       var gr = select.value;
       var valueDate = document.getElementById("myDate").value;
       var wd = getDayOfWeek(valueDate);   
       console.log(wd);
       console.log(gr);
       for (var i = 0; i < timetable.length; i++) {
          for (key in timetable[i]) {
            if (timetable[i][key] == wd) {
             for (key in timetable[i]) {
             if (timetable[i][key] == gr) {
                roz.push(timetable[i]);
              ahtung = false;
            }
            }
          }
     }
    }
    if (ahtung) {
       console.log('Problem')
    } else {
       let table = document.getElementById('table_rozklad');
       let thead = document.createElement('tr');

       let th1 = document.createElement('th');
       th1.innerHTML = 'Lesson';
       thead.appendChild(th1);

         let th2 = document.createElement('th');
         th2.innerHTML = 'Group';
         thead.appendChild(th2);

         let th3 = document.createElement('th');
         th3.innerHTML = 'Day';
         thead.appendChild(th3);

         let th4 = document.createElement('th');
         th4.innerHTML = 'Room';
         thead.appendChild(th4);

         let th5 = document.createElement('th');
         th5.innerHTML = 'Time';
         thead.appendChild(th5);

         table.appendChild(thead);
 
       for (let pr of roz) {
         let tr = document.createElement('tr');

         
 
         let td1 = document.createElement('td');
         td1.innerHTML = pr.name;
         tr.appendChild(td1);
         
         let td2 = document.createElement('td');
         td2.innerHTML = pr.group;
         tr.appendChild(td2);

         let td3 = document.createElement('td');
         td3.innerHTML = pr.day;
         tr.appendChild(td3);

         let td4 = document.createElement('td');
         td4.innerHTML = pr.aud;
         tr.appendChild(td4);
     
         let td5 = document.createElement('td');
         td5.innerHTML = pr.time;
         tr.appendChild(td5);
         
         table.appendChild(tr);
       }
    }
    }
 
 



  // store 
  let object_arr = [];
      object_arr[0] = {
          name: 'Skyrim',
          quantity: 20,
          price: 120,
          total: 2400
      }
      object_arr[1] = {
        name: 'Skyrim',
        quantity: 1,
        price: 50,
        total: 50
    }

    
    function saveToArray() {
        var new_object = {};
        new_object.name = document.getElementById("name").value;
        new_object.quantity = document.getElementById("quantity").value;
        new_object.price = document.getElementById("price").value;
        new_object.total = new_object.quantity * new_object.price;
        object_arr.push(new_object);
        return ;
    }

     function shop() {

      let sum;
      Array.prototype.sum = function (prop) {
        var total = 0
        for ( var i = 0, _len = this.length; i < _len; i++ ) {
            total += this[i][prop]
        }
        return total
    }
        
    sum = object_arr.sum("total");

      let table = document.getElementById('table_shop');

      let thead = document.createElement('tr');

       let th1 = document.createElement('th');
       th1.innerHTML = 'Name';
       thead.appendChild(th1);

         let th2 = document.createElement('th');
         th2.innerHTML = 'Quantity';
         thead.appendChild(th2);

         let th3 = document.createElement('th');
         th3.innerHTML = 'Price';
         thead.appendChild(th3);

         let th4 = document.createElement('th');
         th4.innerHTML = 'Total';
         thead.appendChild(th4);

         table.appendChild(thead);

      for (let object of object_arr) {
        let tr = document.createElement('tr');
        
        let td1 = document.createElement('td');
        td1.innerHTML = object.name;
        tr.appendChild(td1);
        
        let td2 = document.createElement('td');
        td2.innerHTML = object.quantity;
        tr.appendChild(td2);
        
        let td3 = document.createElement('td');
        td3.innerHTML = object.price;
        tr.appendChild(td3);
    
        let td4 = document.createElement('td');
        td4.innerHTML = object.total;
        tr.appendChild(td4);
        
        table.appendChild(tr);
      }

      let footer = document.createElement('tr');

      let thr1 = document.createElement('td');
        thr1.innerHTML = 'Total';
        footer.appendChild(thr1);

        let thr2 = document.createElement('td');
        thr2.innerHTML = '';
        footer.appendChild(thr2);

        let thr3 = document.createElement('td');
        thr3.innerHTML = '';
        footer.appendChild(thr3);

        let thr4 = document.createElement('td');
        thr4.innerHTML = sum;
        footer.appendChild(thr4);

        table.appendChild(footer);

       console.log(object_arr); 
}

    

 

  //stone age calculator
  var op; //выбранный оператор
  function calculator() {
    
    var result;
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    switch (op) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2) {
          result = num1 / num2;
        } else {
          result = 'бесконечность';
        }
        break;
      default:
        result = 'выберите операцию';
    }

    document.getElementById("result").innerHTML = result;
  }


  // game stop 

      let game = [
      {
          name: '',
          genre: 'Witcher',
          price: '120$',
          platform: 'Windows'
      },
      {
        name: 'Outlast',
        genre: 'Horror',
        price: '120$',
        platform: 'Windows'
    },
    {
        name: 'Assasin',
        genre: 'Fantasy',
        price: '120$',
        platform: 'Windows'
    },
    {
        name: 'Silent Hill',
        genre: 'Horror',
        price: '120$',
        platform: 'Windows'
    },
    {
        name: 'Cyberpunk',
        genre: 'Adventure',
        price: '120$',
        platform: 'Windows'
    },
   {
        name: 'Skyrim',
        genre: 'Fantasy',
        price: '120$',
        platform: 'Windows'
    }
      ]

    function searchVar(value) {
        const newGame = [];
        var amount = value;
        var ahtung = true;
for (var i = 0; i < game.length; i++) {
  for (key in game[i]) {
    if (game[i][key] === amount) {
        newGame.push(game[i]);
      ahtung = false;
    }
  }
}

if (ahtung) {
  let res = 'Не найдено';
  document.getElementById('result_game').innerHTML = res;
} else {
  let table = document.getElementById('table_game');

  let thead = document.createElement('tr');

       let th1 = document.createElement('th');
       th1.innerHTML = 'Name';
       thead.appendChild(th1);

         let th2 = document.createElement('th');
         th2.innerHTML = 'Genre';
         thead.appendChild(th2);

         let th3 = document.createElement('th');
         th3.innerHTML = 'Price';
         thead.appendChild(th3);

         let th4 = document.createElement('th');
         th4.innerHTML = 'Platform';
         thead.appendChild(th4);

         table.appendChild(thead);

  for (let game of newGame) {
    let tr = document.createElement('tr');
    
    let td1 = document.createElement('td');
    td1.innerHTML = game.name;
    tr.appendChild(td1);
    
    let td2 = document.createElement('td');
    td2.innerHTML = game.genre;
    tr.appendChild(td2);
    
    let td3 = document.createElement('td');
    td3.innerHTML = game.price;
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    td4.innerHTML = game.platform;
    tr.appendChild(td4);
    
    table.appendChild(tr);
  }
    }

}




  

      

function banText() {
    let banText = parseFloat(event.key);

    if (isNaN(banText) ) {
        event.preventDefault();
    } else {
        console.log(banText);
    }
  }


