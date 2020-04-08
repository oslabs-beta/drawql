import React, { Component } from "react";
import { Line } from "react-konva";

export default class RelationArrow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startPos: 0,
            endPos: 0,
            pointer: false,
            active: false
        }
    }

    componentDidMount() {
        const { startPos, endPos } = this.props;
        this.setState({
            startPos,
            endPos
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            startPos: nextProps.startPos,
            endPos: nextProps.endPos,
        })
    }

    renderArrow() {


        const { startPos, endPos } = this.state;
        const dx = endPos.x - startPos.x;
        const dy = endPos.y - startPos.y;

        let angle = Math.atan2(-dy, dx);
        let radius = endPos.pointer ? 10 : 60;

        const arrowStart = {
            x: startPos.x + - (startPos.small ? 40 : radius) * Math.cos(angle + Math.PI),
            y: startPos.y + (startPos.small ? 40 : radius) * Math.sin(angle + Math.PI)
        };

        const arrowEnd = {
            x: endPos.x - (endPos.small ? 40 : radius) * Math.cos(angle),
            y: endPos.y + (endPos.small ? 40 : radius) * Math.sin(angle)
        };

        const arrowDefaultProps = {
            pointerWidth: 6,
            fill: 'blue',
            stroke: 'blue',
            strokeWidth: 4,
            dashEnabled: true,
            dash: [8, 3]
        }

        return (
            <Line
                {...arrowDefaultProps}
                points={[arrowStart.x, arrowStart.y, arrowEnd.x, arrowEnd.y]}

            // pointerLength={20}
            // pointerWidth={6}
            // fill="#000"
            // stroke="#000"
            // strokeWidth={4}
            />
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.renderArrow()}
            </React.Fragment>
        );
    }
}