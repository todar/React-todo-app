import React, { Component } from "react";
import styles from "./List.css";
import ListTitle from "./ListTitle";
import ListItem from "./ListItem";
import ListInput from "./ListInput";

export class List extends Component {
  render() {
    const { title, listItems } = this.props;
    const {
      handleChange,
      updateContent,
      deleteItem,
      checkForDelete,
      markComplete,
      addListItem
    } = this.props;

    return (
      <div className={styles.listBox}>
        <ListTitle title={title} handleChange={handleChange} />
        {listItems.map(item => (
          <ListItem
            key={item.id}
            id={item.id}
            content={item.content}
            completed={item.completed}
            updateContent={updateContent}
            deleteItem={deleteItem}
            checkForDelete={checkForDelete}
            markComplete={markComplete}
          />
        ))}
        <ListInput addListItem={addListItem} />
      </div>
    );
  }
}

export default List;
