import React,{Component} from 'react';
import './App.css'
import TodoInput from './components/todoinput'
import TodoList from './components/todolist'
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: this.checkEmpty(),
      id:uuid(),
      item:"",
      editItems:false
    };
//localStorage.setItem(11,JSON.stringify(fruits))
  }
 
  checkEmpty = () => {
    let locStorage = JSON.parse(localStorage.getItem("to-do-react"))
    if(localStorage.getItem('to-do-react') === null) {
      return []
    }else{
      return locStorage
    }
  }

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
    console.log(newItem);
    
    //set for local
    const updatedItems = [...this.state.items, newItem]
    localStorage.setItem("to-do-react",JSON.stringify(updatedItems))

    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItems:false
    })
  }

  componentDidMount(){
    fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(response => 
      response.json()
    )
    .then(res => console.log(res))
  }

  clearList = () => {
    this.setState({
      items:[]
    })
  }

  //dlete button
  delItem = (id) => {
    const filteredItem = this.state.items.filter(item => item.id !== id)
    this.setState({
      items:filteredItem
    })
    localStorage.removeItem(id);
  }

  edtItem = id => {
    const filteredItem = this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item => item.id === id)

    this.setState({
      items:filteredItem,
      item:selectedItem.title,
      editItems:true,
      id    
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
