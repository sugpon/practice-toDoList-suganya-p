function ToDoList() {
const todos= ["Learn React", "Build a project", "Read documentation"];
    // <ul className="listText">
    //     <li className="todoItem">Learn React</li>
    //     <li className="todoItem">Build a Project</li>
    //     <li className="todoItem">Read Documentation</li>
    // </ul>
    //Learnt that we can use map to iterate over an array and return a new array
    const todoList = todos.map((todo, index) => <li key={index}>{todo}</li>);
    const element = <ul className="listText">
        {todoList}
    </ul>;
    return(
        <div className="todoList">
        {element}
        </div>
    );

}

export default ToDoList;