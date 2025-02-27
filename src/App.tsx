import "./App.css";

function App() {
  const imagePath: string = "/public/subdir/vite.svg";

  return (
    <>
      <img src={imagePath} alt="Vite Logo" />
    </>
  );
}

export default App;
