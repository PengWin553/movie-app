// Importing the CSS file for styling the App component
import './App.css'

// Main App component
function App() {

  return (
    // React Fragment used as a wrapper since React components must return a single enclosing element
    <>
      {/* Rendering the Text component with different content props */}
      <Text content="Hello" />
      <Text content="Sup?" />
    </>
  )
}

// Text component: A reusable component that accepts a 'content' prop and displays it inside a paragraph
function Text({ content }) {
  return (
    <div>
      {/* Displaying the content passed from the parent App component */}
      <p>{content}</p>
    </div>
  )
}

// Exporting the App component as the default export of this file
export default App