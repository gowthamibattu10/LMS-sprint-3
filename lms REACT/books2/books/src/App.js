
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import AddUser from './components/AddUser'
import Admin from './components/Admin'
import ListBookComponent from "./components/book/ListBookComponent";
import AddBookComponent from "./components/book/AddBookComponent";
import EditBookComponent from "./components/book/EditBookComponent";
import AddAuthorComponent from "./components/author/AddAuthorComponent";
import ListAuthorComponent from "./components/author/ListAuthorComponent";
import EditAuthorComponent from "./components/author/EditAuthorComponent";
import ViewAuthorComponent from "./components/author/ViewAuthorComponent";
import CreatePublisherComponent from './components/CreatePublisherComponent';
import ViewPublisherComponent from './components/ViewPublisherComponent';
import ListPublisherComponent from './components/ListPublisherComponent';
import EditUser from "./components/EditUser";
import DeleteUser from "./components/DeleteUser";
import viewUser from "./components/viewUser";
import operations from "./components/operations";
import ListUsers from "./components/ListUsers";
import Login from "./components/Login"
import ListBookComponents from "./components/book/ListBookComponents";
import ListBookOrderComponent from "./components/ListBookOrderComponent";
import CreateBookOrderComponent from "./components/CreateBookOrderComponent";
import ViewBookOrderComponent from "./components/ViewBookOrderComponent";
import ViewFeedbackComponent from "./components/ViewFeedbackComponent";
import CreateFeedbackComponent from "./components/CreateFeedbackComponent";
import ListBooksIssuedComponent from "./components/ListBooksIssuedComponent";
import CreateBooksIssuedComponent from "./components/CreateBooksIssuedComponent";
import ViewBooksIssuedComponent from "./components/ViewBooksIssuedComponent";
import ListBooksReturnedComponent from "./components/ListBooksReturnedComponent";
import CreateBooksReturnedComponent from "./components/CreateBooksReturnedComponent";
import ViewBooksReturnedComponent from "./components/ViewBooksReturnedComponent";
import ListFeedbackComponent from "./components/ListFeedbackComponent";
class App extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/library" className="navbar-brand">
            Library Management
            </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
        <Switch>
            <Route exact path="/add" component={AddUser} />
            <Route exact path="/login" component={Login} />
            <Route path="/edit-user" component={EditUser} />
            <Route path="/delete-user" component={DeleteUser} />
            <Route path="/view-user" component={viewUser} />
            <Route path="/viewbooks" component={ListBookComponents}/>
            <Route path="/operations" component={operations} />
            <Route path="/admin" component={Admin} />
            <Route exact path="/ListUsers" component={ListUsers} />
            <Route exact path="/author" component={ListAuthorComponent} />  
            <Route path="/add-author" component={AddAuthorComponent}/>
            <Route path="/edit-author" component={EditAuthorComponent}/>
            <Route path = "/view-author" component = {ViewAuthorComponent} />
            <Route path="/books" component={ListBookComponent} />
            <Route path="/addbook" component={AddBookComponent} />
            <Route path="/edit-book" component={EditBookComponent} />
            <Route path = "/publishers" component = {ListPublisherComponent}/>
            <Route path = "/add-publisher/:publisherId" component = {CreatePublisherComponent} />
            <Route path = "/view-publisher/:publisherId" component = {ViewPublisherComponent} />
            <Route path = "/booksorder" component = {ListBookOrderComponent}></Route>
            <Route path = "/add-booksorder/:orderid" component = {CreateBookOrderComponent}></Route>
            <Route path = "/view-booksorder/:orderid" component = {ViewBookOrderComponent}></Route>
            <Route path ="/givefeedback" component ={CreateFeedbackComponent}/>
            <Route path ="/listfeedback"  component={ListFeedbackComponent}/>
            <Route path = "/view-feedback/:id" component = {ViewFeedbackComponent}></Route>
            <Route path = "/booksissued" component = {ListBooksIssuedComponent}></Route>
            <Route path = "/add-booksissued/:issueId" component = {CreateBooksIssuedComponent}></Route>
            <Route path = "/view-booksissued/:issueId" component = {ViewBooksIssuedComponent}></Route>
            <Route path = "/booksreturned" component = {ListBooksReturnedComponent}></Route>
            <Route path = "/add-booksreturned/:returnid" component = {CreateBooksReturnedComponent}></Route>
            <Route path = "/view-booksreturned/:returnid" component = {ViewBooksReturnedComponent}></Route> 
        </Switch>
     </div>

</div>


    );
  }
}


export default App;
