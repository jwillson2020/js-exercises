
// learnCodingONLINE.IN

let myTodos = {

    day: 'Monday',
    meeting: 0,
    meetingDone: 0,

addMeeting: function(){

console.log(this);

    }
}


myTodos.addMeeting()


/*
this returns whole object
{
    day: 'Monday',
    meeting: 0,
    meetingDone: 0,
    addMeeting: [Function: addMeeting]
  }
*/


