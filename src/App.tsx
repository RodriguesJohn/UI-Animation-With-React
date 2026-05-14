import './App.css'
function Card() {
  return (
    <div className="card">
      
      <h1>Hello, John</h1>
      <p>This is a paragraph</p>
      <p> The year is {new Date().getFullYear()}</p>
    </div>
  )
}
function App() {
 return <Card />
}

export default App