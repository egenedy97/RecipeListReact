import React , {Component} from 'react' ;
import './Navbar.css' ;

class Navbar extends Component{
  render()
  {
    return (
        <header>
          <h2><a>Recipe App</a></h2>
          <nav>
            <li><a>New Recipe</a></li>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact us</a></li>
          </nav>
        </header>
    );
  }
}

export default Navbar ;
