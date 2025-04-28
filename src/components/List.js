import Item from "./Item"

// Fragmentado com props
function List() {

    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="ferrari"/>
                <Item marca="fiat"/>
            </ul>
        </>
    )
}

export default List


//Fragmentado
// function List() {

//     //Esse é o fragment, uma tag vazia
//     return (
//         <>
//             <h1>Minha lista</h1>
//             <ul>
//                 <li>Item 1</li>
//                 <li>Item 2</li>
//                 <li>Item 3</li>
//                 <li>Item 4</li>
//             </ul>
//         </>
//     )
// }

// export default List

// Jeito convencional
// function List() {

//     return (
//         <div>
//             <h1>Minha lista</h1>
//             <ul>
//                 <il>Item 1</il>
//                 <il>Item 2</il>
//                 <il>Item 3</il>
//                 <il>Item 4</il>
//             </ul>
//         </div>
//     )
// }

// export default List