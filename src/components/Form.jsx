import React, {Component} from 'react'
import { addMovie} from "../action/action.js";
import { connect } from "react-redux";
//import './addMovie.scss'
function mapDispatchToProps(dispatch) {
    return {
      addMovie: movie => dispatch(addMovie(movie))
    };
  }
class ConnectedForm extends Component{
    constructor() {
        super();
    this.state={
        title:'',
        image:'',
        year: '',
        rating:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     handleTitleChange = (title) => {
         this.setState({
             title
         })
     }

     handleYearChange = (year) => {
        this.setState({
            year
        })
    }

    handleImageChange = (image) => {
        this.setState({
            image
        })
    }
    handleRatingChange = (rating) => {
        this.setState({
            rating
        })
    }
    

    cleanInputs = () => {
        this.setState({
            title:'',
            image:'',
            year:'',
            rating:0
            
        })
    }

    handleSubmit(event) {
       
        const { title } = this.state;
        const { image } = this.state;
        const {year } = this.state;
        const {rating } = this.state;
        this.props.addMovie({ title, image,year,rating});
        this.setState({ title: "",image:"",rating:"" });
      }

    render(){
       
        const {title, image, year,rating} = this.state
        return(
            <div className="add-movie">
                <input value={title} onChange={(e) => this.handleTitleChange(e.target.value)} type="text" placeholder="title"/>
                <input value={image} onChange={(e) => this.handleImageChange(e.target.value)} type="text" placeholder="image"/>
                <input value={year} onChange={(e) => this.handleYearChange(e.target.value)} type="number" placeholder="year"/>
                <input value={rating} onChange={(e) => this.handleRatingChange(e.target.value)} type="number" placeholder="rating"/>
                <button
                    onClick={() => {
                        
                        this.handleSubmit()
                    }}
                    type="button">
                    add
                </button>
            </div>
        )
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;