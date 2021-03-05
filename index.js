const Timer = require('timerpromise');

//   (new Timer(5)).start.then( 
//       ()=> console.log('1) 5 sec') ||
//   (new Timer(2)).start).then( 
//       ()=> console.log('2) 2 sec'));

      (async ()=> {
        console.time("5 sec");
        console.time("3 sec");
        const timer1 = await (new Timer(3)).start;
        console.timeEnd("3 sec");
        console.time("2 sec");
        const timer2 = await (new Timer(2)).start;
        console.timeEnd("2 sec");
        console.timeEnd("5 sec");
      }
    )()