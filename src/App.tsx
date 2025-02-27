import "./App.css";

function App() {
  const imagePath: string = "/subdir/vite.svg";

  return (
    <>
      <img src={imagePath} alt="Vite Logo" />
    </>
  );
}

export default App;
