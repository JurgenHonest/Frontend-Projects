import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {
  ConnectedEditor,
  ConnectedPreviewer,
  markdownReducer,
} from "./Markdown";

// Create the Redux store
const store = createStore(markdownReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="text-center nav mb-4">
          <h1>Markdown Previewer 📝</h1>
        </div>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="editor-container">
                <ConnectedEditor />
              </div>
            </div>
            <div className="col-md-6">
              <div className="previewer-container">
                <ConnectedPreviewer />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
