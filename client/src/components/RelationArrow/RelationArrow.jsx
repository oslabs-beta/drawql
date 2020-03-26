import React from 'react';
import { Arrow } from 'react-konva';

function RelationArrow(props) {
    const { startPos, endPos } = props;
    return (
        <Arrow
            points={[startPos.x, startPos.y, endPos.x, endPos.y]}
            pointerLength={20}
            pointerWidth={20}
            fill="black"
            stroke="black"
            strokeWidth={4}
        />
    );
}
export default RelationArrow;
