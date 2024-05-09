function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  logShout("HELLO");

  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  logWhisper("HELLO");

  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else {
        return string;
    }
  }
   console.log(sayHiToHeadphonedRoommate('  I cant hear you!'));
   console.log(sayHiToHeadphonedRoommate('HELLO!'));

   function sayHiToHeadphonedRoommate(string) {
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
        } else {
        return string;
        }
      }
    console.log(sayHiToHeadphonedRoommate('YES INDEED!'));
    console.log(sayHiToHeadphonedRoommate('I can,t hear you!')); 

    function sayHiToHeadphonedRoommate(string) {
      if (string === string.toLowerCase()) {
          return "I can't hear you!";
      } else {
          return string;
      }
    }
     console.log(sayHiToHeadphonedRoommate('  I cant hear you!'));
     console.log(sayHiToHeadphonedRoommate('YES INDEED!'));

     function sayHiToHeadphonedRoommate(string) {
      if (string.trim() === 'Let\'s have dinner together!') {
        return 'I would love to!';
      } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
      } else if (string === string.toLowerCase()) {
        return "I can't hear you!";
      } else {
        return string;
      }
    }
    

