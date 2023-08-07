import Form from "./Form";
import "./App.css";
var UserIsLoggedIn = false;
export default function App() {
  return (
    <div className="container">{<Form isRegistered={UserIsLoggedIn} />}</div>
  );
}
