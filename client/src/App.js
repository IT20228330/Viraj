import React,{ Component } from 'react';
import axios from 'axios';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
        posts:[]
};

  }
    componentDidMount(){
      this.retrievePosts();
    }
  retrievePosts(){
    axios.get("http://localhost:8000/posts").then(res=>{
      if (res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    });
  }
  render(){
    return(
      <div className='container'>
        <p>All Books</p>
        <table class ="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Book Id</th>
            <th scope="col">Book Title</th>
            <th scope="col">Book Author</th>
            <th scope="col">Book Genre</th>
            <th scope="col">Book Description</th>
            <th scope="col">Book Pages</th>
            <th scope="col">Book Condition</th>
          </tr>

          </thead>
            <tbody>
            {this.state.posts.map((posts,index)=>(
              <tr>
                  <th scope="row">{index+1}</th>
                  <td>{posts.BookId}</td>
                  <td>{posts.BookName}</td>
                  <td>{posts.BookAuthor}</td>
                  <td>{posts.BookGenre}</td>
                <td>{posts.BookDesc}</td>
                <td>{posts.BookPages}</td>
                <td>{posts.BookCondition}</td>

                  <td>
                  <a className="btn btn-warning" href="#">
                    <i className="fas fa-edit"></i>&nbsp;Edit

                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#">
                    <i className="far fa-trash-alt"></i>&nbsp;Delete

                  </a>
                  </td>

              </tr>
            ))}
            </tbody>
        </table>
        

      </div>
    )
  }



}