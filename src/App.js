import "./App.css";

const arrofCards = [
  {
    image: "/images/icon1.png",
    title: "Declarative",
    description: "React makes it painless to create interactive UIs",
  },
  {
    image: "/images/icon2.png",
    title: "Components",
    description: "Build encapsulated components that manage their state.",
  },
  {
    image: "/images/icon3.png",
    title: "Single-Way",
    description: "A set of immutable values are passed to the component's.",
  },
  {
    image: "/images/icon4.png",
    title: "JSX",
    description: "Statically-typed designed to run on modern browsers.",
  },
];

function InfoCard(props) {
  return (
    <div className="info-card">
      <img src={props.card.image} alt={props.card.title} />
      <h2>{props.card.title}</h2>
      <p>{props.card.description}</p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src="../images/ironhack-logo.svg" alt="Logo" />
      <img className="menu" src="../images/menu-top.svg" alt="burger-menu" />
    </div>
  );
}

function SayHello(){
  return (
    <div className="sayhello">
        <h1>Say Hello to React</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id a nobis harum ab deleniti ex consectetur itaque odit! Nam, voluptatem.</p>
        <button className="Button">Awesome!</button>
    </div>
)
}


function App() {
  return (
    <div className="App">
      <div className="container-nav">
        <div className="Navbar">
          <Navbar />
        </div>
        <SayHello />
      </div>
      <div className="cards">
        {arrofCards.map((mappedCard) => (
          <InfoCard card={mappedCard} key={mappedCard.image} />
        ))}
      </div>
    </div>
  );
}

export default App;
