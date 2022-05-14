import { Component } from "react";
import imageDone from "./done.png";

export class GroceryList extends Component{
    constructor(){
        super();

        this.state = {
            userInput: "",
            groceryList: []
        }
    }

    onChangeEvent(e){
        this.setState({userInput: e})
        // console.log(e);
    }

    addItem(input){
        if (input === "") {
            alert("Please, add an item!")
        } else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput: ""})
            console.log(listArray);
        }
        
    }

    crosedWord(event){
        const li = event.target;
        li.classList.toggle("crossed");
    }

    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray});
    }

    onFormSumbit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSumbit}>
                <div className="container">
                    <input type="text" 
                    placeholder="What do you want?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>

                <div className="container">
                    <button className="add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
                </div>

                <ul className="containerTwo">
                    {this.state.groceryList.map((item, index) => (
                        <li onClick={this.crosedWord} key={index}>
                            <img src={imageDone} width="20px" alt='done'/> {item}
                        </li>
                    ))}
                </ul>

                <div className="container">
                    <button className="delete" onClick={() => this.deleteItem(this.state.userInput)}>Delete all</button>
                </div>
                </form>
            </div>
            
        )
    }


}

