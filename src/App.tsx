import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PrimaryButton } from '@fluentui/react';
import { DragDropContext } from 'react-beautiful-dnd';
import Board from './Board';
import Item from './Item';

function App() {
  const onDragEnd = ()=>{

  }
  return (
    <div className="App">
      <DragDropContext
      // onDragStart={this.onDragStart}
      // onDragUpdate={this.onDragUpdate}
      onDragEnd={onDragEnd}
      >
        <div>Hello world</div>
        <Board>
            <PrimaryButton>
              123
          </PrimaryButton>
          <Item id="12"/>
          <Item id="13"/>
          <Item id="15"/>
        </Board>
      </DragDropContext>
    </div>
  );
}

export default App;
