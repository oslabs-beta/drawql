import React, { Component } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import Konva from 'konva';

class ColoredRect extends Component {
    constructor(props) {
        super(props);
        this.state = { color: 'green', rects: [] };
    }

    handleClick = () => {
        this.setState({
            color: Konva.Util.getRandomColor()
        });
    };

    render() {
        return (
            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                ref="stageReference"
            >
                <Layer>
                    <Rect
                        ref="draggableRectReference"
                        x={20}
                        y={20}
                        width={50}
                        height={50}
                        fill={this.state.color}
                        shadowBlur={5}
                        onClick={this.handleClick}
                        draggable
                        onDragEnd={() => {
                            const draggableRect = this.refs
                                .draggableRectReference;
                            /* adding a new rect in in state, no need to call draw() or anything
              because updating state triggers render() again */
                            this.setState({
                                rects: [
                                    ...this.state.rects,
                                    {
                                        x: draggableRect
                                            .getStage()
                                            .getPointerPosition().x,
                                        y: draggableRect
                                            .getStage()
                                            .getPointerPosition().y,
                                        width: 50,
                                        height: 50,
                                        fill: 'green',
                                        draggable: true
                                    }
                                ]
                            });
                            //returning draggable rect to original position
                            draggableRect.position({ x: 20, y: 20 });
                            this.refs.stageReference.draw(); // or draggableRect.getStage().draw()
                        }}
                    />
                </Layer>
                <Layer>
                    {this.state.rects.map(eachRect => {
                        return (
                            <Rect
                                x={eachRect.x}
                                y={eachRect.y}
                                width={eachRect.width}
                                height={eachRect.height}
                                fill={eachRect.fill}
                                draggable={eachRect.draggable}
                            />
                        );
                    })}
                </Layer>
            </Stage>
        );
    }
}

export default ColoredRect;
