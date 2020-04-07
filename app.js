// TODO
//create grocery list of 2 items
var listDiv = document.getElementById("app");



var Task1 = () => (
  <li>Eat</li>
);

var Task2 = () => (
  <li>Sleep</li>
);

var TodoList = () => (
  <div>
    <h1>My To-Do List</h1>
      <ul>
        <Task1 />
        <Task2 />
    </ul>
  </div>
);

var GroceryList = (props) => {

  var onGroceryItemClick = (event) => {
    console.log('Clicked');
  }

  return (
    <ul>
        <li onClick = {onGroceryItemClick}>{props.groceryItems[0]}</li>
        <li>{props.groceryItems[1]}</li>
        <li>{props.groceryItems[2]}</li>
    </ul>
  )
}

var GroceryListApp = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems = {['Cabbage', 'Muff', 'Salt']} />
  </div>
)


//groceryItems is a property of groceryList in the form of an array.
//while encased in curly brackets, it is not actually an object - this is just a syntax requirement indicating that we are injecting javascript

//ReactDOM.render(<TodoList />, listDiv); //you can only do 1 per element!
ReactDOM.render(<GroceryListApp/>, listDiv); //this overwrites previous list

class GroceryListItemClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {fontWeight : 'normal'};


  }

//create a state for each list item
//when each item is being hovered over, change the hovered state to true
//then make sure the style is set to bold while that hovered state is true



      mouseEnter() {
          console.log('mouse enter');
          this.setState({fontWeight : 'bold'})
      }

      mouseLeave() {
          console.log('mouse leave')
          this.setState({fontWeight: 'normal'})
      }


    //  '::' in React simply means 'bind(this)' is called on the


// <div style={{opacity: this.state.opacity}}>

  render() {

    return (
      //<li onClick = {onGroceryItemClick}>{props.groceryItems[0]}</li>
      <li onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} style={{fontWeight: this.state.fontWeight}}>{this.props.groceryItem}</li>
    );
  }
}

var myGroceryItems = ['Cabbage', 'Muff', 'Salt'];

var GroceryListWithClass = (props) => (
  <ul>
    {props.groceryItems.map(item =>
      <GroceryListItemClass groceryItem={item} /> //new GroceryListItemClass ({myGroceryItems: myGroceryItems (array)})
    )}
  </ul>
);

ReactDOM.render(<GroceryListWithClass groceryItems={myGroceryItems} />, listDiv); //this overwrites previous list



