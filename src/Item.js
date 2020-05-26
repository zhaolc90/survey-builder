import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Item = ({id})=>{
    return(
        <Draggable draggableId={`draggable-${id}`} index={0}>
        {(provided, snapshot) => (
            <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            >
            <h4>My draggable</h4>
            </div>
        )}
        </Draggable>
    )
}
export default Item;