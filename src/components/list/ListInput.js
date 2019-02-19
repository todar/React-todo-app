import React, { Component } from "react";
import styles from "./List.css";

export class ListInput extends Component {
  render() {
    const { addListItem } = this.props;
    return (
      <div className={styles.lineContainer}>
        <div className={styles.icon}>+</div>
        <input
          onKeyDown={addListItem.bind(this)}
          className={styles.input}
          type="text"
          name="listItem"
          placeholder="List Item"
        />
      </div>
    );
  }
}

export default ListInput;
