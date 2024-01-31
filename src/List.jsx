function List(){
    const Meat = [
                 {name:"beef",protein:19},
                 {name:"chicken",protein:19},
                 {name:'mutton',protein:20},
                 {name:'pork',protein:30}]
    Meat.sort();
    const filtereItems = Meat.filter( meat => <li>{meat.protein>20}</li>)
    const listItems = Meat.map((meat) => <li>{meat.name}</li>   )
    return(<ol>{filtereItems}</ol>)
}

export default List