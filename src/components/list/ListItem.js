import React, { Component } from "react";
import styles from "./List.css";

export class ListItem extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  componentDidMount() {
    this.focusTextInput();
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    const { id, content, completed } = this.props;
    const {
      updateContent,
      deleteItem,
      markComplete,
      checkForDelete
    } = this.props;

    return (
      <div className={styles.lineContainer}>
        <div className={styles.icon}>
          <input type="checkbox" onChange={markComplete.bind(this, id)} />
        </div>
        <input
          ref={this.textInput}
          type="text"
          className={`${styles.input} ${completed ? styles.completed : ""}`}
          value={content}
          onChange={updateContent.bind(this, id)}
          onKeyDown={checkForDelete.bind(this, id, content)}
        />

        <div className={styles.delete} onMouseUp={deleteItem.bind(this, id)}>
          X
        </div>
      </div>
    );
  }
}

export default ListItem;
