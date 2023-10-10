import React from "react"
import User from "./User"
import "./User.css"


const App = () => {
    let users = [
        { name: "mehdi", family: "rashidi", age: 17 },
        { name: "ali", family: "dehghan", age: 19 },
        { name: "reza", family: "mohammadi", age: 18 }
    ]

    return (
        <div className="containerUser">
            <User {...users[0]} />
            <User {...users[1]}/>
            <User {...users[2]}/>
        </div>
    )
}





// const App = (props) => {
//     const [productstate, setproductstate] = useState({
//         product: [
//             { title: "shoe1", alt: "shoe1" },
//             { title: "shoe2", alt: "shoe2" },
//             { title: "shoe3", alt: "shoe3" }
//         ]
//     })

//     const changehandler = () => {
//         setproductstate({
//             product: [
//                 { title: "shoe mehdi 1", alt: "shoe mehdi 1" },
//                 { title: "shoe mehdi 1", alt: "shoe mehdi 1" },
//                 { title: "shoe mehdi 1", alt: "shoe mehdi 1" }
//             ]
//         })
//     }

//     return (
//         < section >
//             <div className="container">
//                 <div className="row">
//                     <Card img="./images/01.png" title={productstate.product[0].title} alt={productstate.product[0].alt} />
//                     <Card img="./images/02.png" title={productstate.product[1].title} alt={productstate.product[1].alt} />
//                     <Card img="./images/03.png" title={productstate.product[2].title} alt={productstate.product[2].alt} />
//                     <button className="btn" onClick={changehandler}>click</button>
//                 </div>
//             </div>

//         </section >
//     )
// }








// class App extends React.Component {
//     state = {
//         product: [
//             { title: "shoe1", alt: "shoe1" },
//             { title: "shoe2", alt: "shoe2" },
//             { title: "shoe3", alt: "shoe3" }
//         ]
//     }

//     changehandler = () => {
//         this.setState({
//             product: [
//                 { title: "shoe mehdi 1", alt: "shoe mehdi 1" },
//                 { title: "shoe mehdi 1", alt: "shoe mehdi 1" },
//                 { title: "shoe mehdi 1", alt: "shoe mehdi 1" }
//             ]
//         })


//     }

//     render() {
//         return (
//             < section >
//                 <div className="container">
//                     <div className="row">
//                         <Card img="./images/01.png" title={this.state.product[0].title} alt={this.state.product[0].alt} />
//                         <Card img="./images/02.png" title={this.state.product[1].title} alt={this.state.product[1].alt} />
//                         <Card img="./images/03.png" title={this.state.product[2].title} alt={this.state.product[2].alt} />
//                         <button className="btn" onClick={this.changehandler }>click</button>
//                     </div>
//                 </div>

//             </section >
//         )

//     }


// }
export default App