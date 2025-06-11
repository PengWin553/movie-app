import './App.css'

function App() {

  return (
    // A fragment acts as a the parent container. A component only allows one parent container
    <>
      {/* The dummy component used twice */}
      <Text />
      <Text />
    </>
  )
}

// dummy component
function Text(){
  return (
    <div>
      <p>Hello World!</p>
    </div>
  )
}

export default App
