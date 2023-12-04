import React from 'react';
import './App.css';

class App extends React.Component { 
constructor() { 
  super() 
  this.state = { 
      tasks :[ 
          { Text : 'Acheter des Croquettes', Id : Math.random(), IsDone : false },  
          {Text : 'Acheter du miel', Id : Math.random(), IsDone : false}, 
          {Text : 'Terminer le nouveau chapitre', Id : Math.random(), IsDone : false},   
          { Text : 'Ecrire dans le journal', Id : Math.random(), IsDone : false },   
        
      ], 
      textP : '',  
     
         
     
    } 
  } 
    
  
   
AddTask=()=> this.setState({tasks:[...this.state.tasks,{Text:this.state.textP, IsDone : false, Id: Math.random()}],textP: ''})

RemoveTask=(a)=>this.setState({tasks: this.state.tasks.filter((el,i,t)=>el.Id !== a)})   
   
DoneTask=(done)=>this.setState({tasks:this.state.tasks.map((el,i,t)=>el.Id===done? {...el,IsDone:!el.IsDone}:el)})
 
 
  render() {
    return(
      <div>
    <h1> Challenge React State</h1>
    {
      this.state.tasks.map ((el,i,t)=> 
      <div>
        <h2 className={el.IsDone && 'under'}>{el.Text}</h2> 
        <h2 style={{textAlign:'center', color:'pink'}} > {el.IsDone ? "true":"false"}</h2>
        <button className='felsa' onClick={()=>this.DoneTask(el.Id)}>Done</button> 
        <button className='felsa' onClick={()=>this.RemoveTask(el.Id)}>Delete</button> 
        </div> ) 
    }
    <br/>  
    <br/> 
    <input className='case' value={this.state.textP} onChange={(e)=>this.setState({textP: e.target.value})} type='text'/>
<button className='felsa2' onClick={()=>{this.state.textP === ""? alert('Le champ est vide') : this.AddTask()}}> Add Task</button>
      </div>
    ) 
  }
} 

  export default App; 