import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

const Board = ({children})=>{
    return(
        <Droppable droppableId="droppable-1">
            {(provided, snapshot) => (
                <div
                ref={provided.innerRef}
                style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                {...provided.droppableProps}
                >
                <h2>I am a droppable!</h2>
                {children}
                {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}
export default Board;