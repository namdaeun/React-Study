import './App.css';

function AppJSX() {
  const name = 'danee';
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img 
      style={{ width: '200px', height: '200px' }}
      src='https://cdn.univ20.com/wp-content/uploads/2015/06/8c61e9156c31aa5b86e1c279957f3896.jpg' 
      alt='nature'
      />
    </>
  )
}
export default AppJSX;
