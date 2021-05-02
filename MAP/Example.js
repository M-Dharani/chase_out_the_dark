import React, { useEffect, useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import useLocalStorage from "./useLocalStorage";
import {View} from 'react-native';

function Example({des,array}) {
  const marketing = ['Home_appliances','garden_items','Junction1'];
  const dir = {
    Entrance : {
      Junction1 : 'you are at entrance walk 20 steps ahead to reach junction 1'
    },
    Junction1 : {
        Entrance : 'you are at Junction 1 walk 20 steps ahead to reach Entrance',
        garden_items : 'you are at junction 1 turn left and walk 10 steps to reach garden items',
        Toys_section : 'you are at junction 1 turn right and walk 10 steps to reach toys section',
        Junction2 : 'you are at junction 1 walk 10 steps ahead to reach junction 2'
    },
    garden_items :{
        Junction1 : 'you are at garden items turn back and walt 10 steps to reach junction 1'
    },

    Junction2 : {
       Junction1 :  'you are at junction 2 walk 10 steps ahead to reach junction 1',
       Home_appliances : 'you are at junction 2 turn right and walk 10 steps to reach home appliances section',
       Furniture_section : 'you are at junction 2 walk 15 steps ahead to reach furniture section',
       cosmetics : 'you are at junction 2 turn left and walk 10 steps to reach cosmetics section'
    },
    Toys_section : {
        Junction1 : 'you are at toys section turn back and walk 10 steps to reach junction 1'
    },
    cosmetics : {
      Junction2 : 'you are at cosmetics section turn back and walk 10 steps to junction 2'
    },
    Home_appliances : {
      Junction2 : 'you are at home appliances section turn back  and walk 10 steps to reach junction 2'
    },
    Furniture_section : {
      Junction2 : 'you are at furniture section turn back and walk 15 steps to reach junction 2'
    }
  }

  const [arr, setValue] = useState([...array]);
  const { speak } = useSpeechSynthesis();
  useEffect(() => {
    setValue(array);
   
},[array])

  async function handlclick() { 
    if(arr[0]==undefined){console.log(array); console.log(arr); speak({text: "You have reached your destination"});
        if(marketing.includes(des)) {
             speak({text : `we have some new amazing items in ${des} today`});
        };
      }
    else {
    console.log(arr[0]);
    const a1 = arr[0].source;
    const a2 = arr[0].target;
    if(marketing.includes(a1)) {
      speak({text : `we have some new amazing items in ${a1} today`});
    };
    speak({text: dir[a1][a2] });
    const Array = arr.splice(1);
    //arr = arr.splice(1);
    await setValue(Array);
    console.log(arr);
    }
  };


    var rootStyle = {
      backgroundColor : 'green',
      color : 'white',
      height : '100%',
      width: '100%'
    }


return (
  <div onClick={handlclick} appName="fullscreen">
  <button >Go show me directions</button>
</div> );
}

export default Example;