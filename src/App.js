import React,{Component} from 'react';
import './App.css'
import TodoInput from './components/todoinput'
import TodoList from './components/todolist'
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

class App extends Component {
  state = {
    items: [],
    id:uuid(),
    item:"",
    editItems:false
  };

  handleChange = e => {
    this.setState({
      item : e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault()

    const newItem = {
      id : this.state.id,
      title : this.state.item
    }

    const updatedItems = [...this.state.items, newItem]

    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItems:false
    })
  }

  clearList = () => {
    this.setState({
      items:[]
    })
  }

  delItem = (id) => {
    const filteredItem = this.state.items.filter(item => item.id !== id)
    this.setState({
      items:filteredItem
    })
  }

  edtItem = id => {
    const filteredItem = this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item => item.id === id)

    this.setState({
      items:filteredItem,
      item:selectedItem.title,
      editItems:true,
      id:id
    })
  }
  

  render(){
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
            <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItems={this.state.editItems}/>

            <TodoList 
            items={this.state.items} 
            clearList={this.clearList}
            delItem={this.delItem}
            edtItem={this.edtItem}/>

        </div>
      </div>
    </div>
  );
  }
}

export default App;
