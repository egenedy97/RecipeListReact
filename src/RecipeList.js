import React , {Component} from 'react' ;
import PropTypes from 'prop-types';
import Recipe from './Recipe' ;
import './RecipeList.css' ;
class RecipeList extends Component{
  static defaultprop = {
    recipes:[
      {
        title:"pasta",
        ingradients: ['flower' , 'Water'],
        instructions :"Mix ingradients",
        img:"ER.png"
      },
      {
        title:"pasta",
        ingradients: ['flower' , 'Water'],
        instructions :"Mix ingradients",
        img:"ER.png"
      },
      {
        title:"pasta",
        ingradients: ['flower' , 'Water'],
        instructions :"Mix ingradients",
        img:"ER.png"
      }
    ]
  }
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }
  render()
  {
    const recipes = this.props.recipes.map((r,index)=>(
      <Recipe key={index} {...r} />
    ));
    return(
      <div className="recipe-list">
      {recipes}
      </div>
    )
  }
}

export default RecipeList;
