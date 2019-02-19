import React, { Component } from "react";
import styles from "./List.css";

export class ListTitle extends Component {
  render() {
    const { title } = this.props;
    const { handleChange } = this.props;

    return (
      <React.Fragment>
        <input
          name="title"
          placeholder="Title"
          autoComplete="off"
          className={styles.title}
          value={title}
          onChange={handleChange}
        />
      </React.Fragment>
    );
  }
}

export default ListTitle;
