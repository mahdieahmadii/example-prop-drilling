import './App.css';
import { Headers } from './Components/Headers';
import { Inputs } from './Components/Inputs';
import { HeadersChild } from './Components/Headers/HeadersChild';

function App() {
  return (
    <div className="flex">
      <div className="w-30">
        <Headers>Users</Headers>
        <HeadersChild>Add Users</HeadersChild>
        <Inputs placeholder="Enter User" name="userName" className="purple-600" >Add</Inputs>
        <HeadersChild>List of users</HeadersChild>
      </div>
    </div>
  );
}

export default App;
