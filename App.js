const App = () => {
  const [counter, setCounter] = React.useState(0);
  const [isActive, setIsActive] = React.useState(true);

  const handler = () => setCounter(counter + 1);
  const toggleVisibilityCounter = () => setIsActive(currentValue => !currentValue);

  const counterComponent = isActive
    ? <Counter reRenderCounter={counter} />
    : null;

  // React.useEffect(() => {
  //   // alert('hello')
  // }, []);


  return (
    <div onClick={handler}>
      <button onClick={toggleVisibilityCounter}>Show/Hide component</button>
      <button onClick={handler}>Przerenderuj komponent</button>
      {counterComponent}
    </div>
  )
}

const Counter = ({ reRenderCounter }) => {
  const [counter, setCounter] = React.useState(0);

  const handleMouseMove = (e) => {
    setCounter(e.clientX);
  }

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      alert('Component is unmounted');
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [reRenderCounter]);

  return (
    <div>
      <p>{counter}</p>
      <p>{reRenderCounter}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
