import React, { PureComponent } from 'react';
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';

export default class DiffViewer extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      oldCode: '',
      newCode: ''
    };
  }

  render = () => {
    return (
      <div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%',
        }}>
          <textarea
            placeholder="Old content"
            onChange={(ev) => { this.setState({ oldCode: ev.currentTarget.value }) }}
            cols="30"
            rows="10"
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexBasis: '100%',
              flex: '1',
              marginLeft: '1em',
              marginRight: '1em'
            }}
          ></textarea>
          <textarea
            placeholder="New content"
            onChange={(ev) => { this.setState({ newCode: ev.currentTarget.value }) }}
            cols="30"
            rows="10"
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexBasis: '100%',
              flex: '1',
              marginLeft: '1em',
              marginRight: '1em'
            }}
          ></textarea>
        </div>
        <div
          style={{ margin: '1em', textAlign: 'initial' }}
        >
          <ReactDiffViewer
            oldValue={this.state.oldCode}
            newValue={this.state.newCode}
            splitView={true}
            compareMethod={DiffMethod.WORDS}
          //renderContent={this.highlightSyntax}
          />
        </div>
      </div>
    );
  };
}
