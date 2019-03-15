import React , {Component} from 'react' ;
import './Recipe.css';
class Recipe extends Component {
  render ()
  {
    const {title , img , instructions} = this.props;
    const ingradients = this.props.ingradients.map((ing , index)=>(
      <li key ={index}>{ing}</li>
    )) ;
    return(
      <div className= "recipe-card">
        <div className="recipe-card-img">
          <img  src={img} alt={title} />
        </div>
      <div className= "recipe-card-content">
        <h3 className="recipe-title"> Recipes {title} </h3>
        <h4 className = "recipe-ingradients">Ingradients:</h4>
        <ul>
          {ingradients}
        </ul>
        <h4 className = "recipe-instructions">Instructions:</h4>
          <p>
            {instructions}
          </p>
      </div>

      </div>
    );
  }
}
export default Recipe ;
