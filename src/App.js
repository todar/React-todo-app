import React, { Component } from "react";
import List from "./components/list/List";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      listItems: [
        {
          id: 1,
          content: "Add ability to persist to a database",
          completed: false
        },
        {
          id: 2,
          content: "Fix error in 'Check for delete'",
          completed: false
        },
        {
          id: 3,
          content: "Fix error with title and focus.",
          completed: false
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.checkForDelete = this.checkForDelete.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.addListItem = this.addListItem.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  updateContent(id, e) {
    this.setState({
      listItems: this.state.listItems.map(item => {
        if (item.id === id) {
          item.content = e.target.value;
        }
        return item;
      })
    });
  }

  deleteItem(id) {
    this.setState({
      listItems: this.state.listItems.filter(item => item.id !== id)
    });
  }

  checkForDelete(id, content) {
    if (id !== 1 && content === "") {
      this.setState({
        listItems: this.state.listItems.filter(item => item.id !== id)
      });
    }
  }

  markComplete(id) {
    this.setState({
      listItems: this.state.listItems.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    });
  }

  addListItem(e) {
    if (e.key.length === 1) {
      this.setState({
        listItems: [
          ...this.state.listItems,
          {
            id: this.state.listItems.length + 1,
            content: "",
            completed: false
          }
        ]
      });
    }
  }

  render() {
    const { title, listItems } = this.state;

    return (
      <div style={appStyle}>
        <List
          title={title}
          listItems={listItems}
          handleChange={this.handleChange}
          updateContent={this.updateContent}
          deleteItem={this.deleteItem}
          checkForDelete={this.checkForDelete}
          markComplete={this.markComplete}
          addListItem={this.addListItem}
        />
      </div>
    );
  }
}

const appStyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default App;
