import "./Card.css"
import Button from "./Button"
import React from "react"


const Card = (props) => {

    
    return (
        <div className="col" >
            <div className="card">
                <img src={props.img} alt={props.alt} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quo exercitationem amet earum nihil</p>
                    <Button />
                </div>
            </div>
        </div >
    )
}
export default Card

// class Card extends React.Component {

//     render() {
//         return (
//             <div className="col" >
//                 <div className="card">
//                     <img src={this.props.img} alt={this.props.alt} />
//                     <div className="card-body">
//                         <h5 className="card-title">{this.props.title}</h5>
//                         <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quo exercitationem amet earum nihil</p>
//                         <Button />
//                     </div>
//                 </div>
//             </div >
//         )

//     }

// }

