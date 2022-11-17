
import './App.css';

const Main = ({text}) =>{
  return (
    <div>
        {'Componente'+ (text || '')}
    </div>
  );
}

export default Main;
