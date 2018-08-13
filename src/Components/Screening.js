import React, {Component} from 'react';

class Screening extends Component {
  render(){
    return(
      <div className="screening">
        <section>
        <h4 className="screening-title">{this.props.screening.title}</h4>
      </section>
    <section className="showtimes">
      <a href="#">Showtimes</a>
    </section>
      </div>
    )
  }
}

// import React, {Component} from 'react';
//
// const Screening = (props) => {
//     return(
//       <div className="screening">
//         <ul>
//           <li>{props.screening.title}</li>
//            <a href={props.screening.showtimes}>Showtimes</a></ul>
//       </div>
//     )
//   }

export default Screening;
