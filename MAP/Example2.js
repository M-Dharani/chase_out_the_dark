import React, { useEffect, useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
import { useSpeechSynthesis } from 'react-speech-kit';
import useLocalStorage from "./useLocalStorage";
//import Constants from 'expo-constants';

import Example from './Example';
import { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Linking,
  Platform
} from "react-native";



function Example2() {
  const [value, setValue] = useState({val: '', arr:[]});
  const { speak } = useSpeechSynthesis();

  const mobileNo= "+12176002504";
  var n=0;
  const call = () => {
    console.log("callNumber ", "+12176002504");
    let phoneNumber = "+12176002504";
    phoneNumber = `tel:${mobileNo}`;
    
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
          if(n==0) {
          return Linking.openURL(phoneNumber);
          n=1;}
        
      })
      .catch(err => console.log(err));
  };

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
        if(result==='home' || result==='ho' || result==='HOME' || result==='Home' || result==='home ' || result===
        ' home')
            setValue({
            ...value,
            val : ('Home_appliances'),
            arr:findPath('Entrance','Home_appliances',graph) }) ;
                                    
        else if(result ==='Toys' || result==='toys' || result==='Toy' || result==='toy' ||  result==='tay' || result==='toi')
        setValue({
          ...value,
          val : ('Toys_section'),
          arr:findPath('Entrance','Toys_section',graph) }) ;    
        
        else if(result ==='furniture') 
        setValue({
          ...value,
          val : ('Furniture_section'),
          arr:findPath('Entrance','Furniture_section',graph) }) ; 
            
        else if(result==='garden' || result==='Garden' | result==='gaden' || result==='Gaden')
        setValue({
          ...value,
          val : ("garden_items"),
          arr:findPath('Entrance',"garden_items",graph) }) ; 
            
        else if(result=='call' || result=='kall' || result=='caal' || result=='kaal') 
        call();   
        else if(result==='MakeUp' || result==='makeup' || result==='make up')
        setValue({
          ...value,
          val : ("cosmetics"),
          arr:findPath('Entrance',"cosmetics",graph) }) ;
        // else 
       // console.log("try again")  
           
    },
  });
    
  const addNode = (graph, node) => {
    graph.set(node, {in: new Set(), out: new Set()});
  };
  
  const connectNodes = (graph, source, target) => {
    graph.get(source).out.add(target);
    graph.get(target).in.add(source);
  };
  
  const buildGraphFromEdges = (edges) => edges.reduce(
    (graph, {source, target}) => {
      if (!graph.has(source)) {
        addNode(graph, source);
      }
  
      if (!graph.has(target)) {
        addNode(graph, target);
      }
  
      connectNodes(graph, source, target);
  
      return graph;
    },
    new Map()
  );
  
  const marketing = ['Home_appliances','garden_items','Junction1'];

  const buildPath = (target, path) => {
    const result = [];
  
    while (path.has(target)) {
      const source = path.get(target);
      result.push({source, target});
      target = source;
    }
  
    return result.reverse();
  };
  const graph = buildGraphFromEdges([
    { source: 'Entrance', target: 'Junction1' ,
     t : 'you are at entrance walk 20 steps ahead to reach junction 1'},
    { source: 'Junction1', target: 'Entrance',
    t: 'you are at Junction 1 walk 20 steps ahead to reach Entrance' },
    { source: 'Junction1', target: 'garden_items',
    t: 'you are at junction 1 turn left and walk 10 steps to reach garden items' },
    { source: 'garden_items', target: 'Junction1',
     t: 'you are at garden items turn back and walt 10 steps to reach junction 1'},
    { source: 'Junction1', target: 'Toys_section',
    t: 'you are at junction 1 turn right and walk 10 steps to reach toys section' },
    { source: 'Toys_section', target: 'Junction1',
    t: 'you are at toys section turn back and walk 10 steps to reach junction 1' },
    { source: 'Junction1', target: 'Junction2',
    t: 'you are at junction  1 walk 10 steps ahead to reach junction 2' },
    { source: 'Junction2', target: 'Junction1',
    t: 'you are at junction 2 walk 10 steps ahead to reach junction 1'},
    { source: 'Junction2', target: 'cosmetics',
    t: 'you are at junction 2 turn left and walk 10 steps to reach cosmetics section'},
    { source: 'cosmetics', target: 'Junction2',
    t: 'you are at cosmetics section turn back and walk 10 steps to junction 2'},
    { source: 'Junction2', target: 'Home_appliances',
    t: 'you are at junction 2 turn right and walk 10 steps to reach home appliances section'},
    { source: 'Home_appliances', target: 'Junction2',
    t: 'you are at home appliances section turn back  and walk 10 steps to reach junction 2'},
    { source: 'Junction2', target: 'Furniture_section',
    t: 'you are at junction 2 walk 15 steps ahead to reach furniture section'},
    { source: 'Furniture_section', target: 'Junction2',
    t: 'you are at furniture section turn back and walk 15 steps to reach junction 2'}
   ]);
  const findPath = (source, target, graph) => {
    if (!graph.has(source)) {
      throw new Error('Unknown source.');
    }
  
    if (!graph.has(target)) {
      throw new Error('Unknown target.');
    }
  
    const queue = [source];
    const visited = new Set();
    const path = new Map();
  
    while (queue.length > 0) {
      const start = queue.shift();
  
      if (start === target) {
        return buildPath(start, path);
      }
  
      for (const next of graph.get(start).out) {
        if (visited.has(next)) {
          continue;
        }
  
        if (!queue.includes(next)) {
          path.set(next, start);
          queue.push(next);
        }
      }
  
      visited.add(start);
    }
  
    return null;
  };



const [destination,setDes] = useLocalStorage("destination",{});

  useEffect(() => {
    listen();
  });

  return (
    <div>
      
      <textarea
        value={value.val}
      />
      {listening && <div>Go ahead I'm listening to you</div>}
        <Example array={value.arr} des={value.val} />
        <br></br>      
      <button onClick={call}>CALL for online shopping
      </button>
    </div>
  );
}

export default Example2;