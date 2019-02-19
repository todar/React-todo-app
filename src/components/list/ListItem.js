import React, { Component } from "react";
import styles from "./List.css";

export class ListItem extends Component {
  constructor(props) {
    super(props);
    this.checkForDelete = this.checkForDelete.bind(this);
  }

  checkForDelete(e) {
    const { id, content, deleteItem } = this.props;

    if (e.key === "Backspace" && content === "") {
      deleteItem.bind(this, this.props.id);
    }
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
          ref={input => input && input.focus()}
          contentEditable="true"
          aria-multiline="true"
          type="text"
          className={`${styles.input} ${completed ? styles.completed : ""}`}
          name="listItem"
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
