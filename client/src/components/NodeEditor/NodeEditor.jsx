import React from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

// this needs to become a class Component
const NodeEditor = ({ node, value, handleOnChange, handleOnKeyDown }) => (
    <section className="editor-wrapper">
        {/* node that wrapped__card one should also have a CONDITIONAL class name for transparent or not */}
        {/* background: ${ ({ transparent }) => !transparent && '#FAFAFA' }; */}
        <div className="wrapper__card">
            <h1 className="card-heading">
                <span>type:</span>
                {/* {node.name} */}
            </h1>
        </div>
        <div className="wrapped__card--transparent">
            <div className="editor-container">
                <Editor
                    placeholder="-- insert fields here --"
                    value={value}
                    onChange={handleOnChange}
                    onKeyDown={handleOnKeyDown}
                    renderMark={renderMark}
                    renderNode={renderNode}
                    autoFocus={true}
                    spellCheck={false}
                    tabIndex={0}
                />
            </div>
        </div>
    </section>
);
