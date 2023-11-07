import Application from "./components/applications/Application";
import "./App.css";
import { AppProviders } from "./providers/App-Providers";
import { MuiMode } from "./components/mui/Mui-Mode";
import Home from "./pages/Home";
import Users from "./components/users/Users";
import CounterTwo from "./components/counterTwo/CounterTwo";
function App() {
  return (
    <AppProviders>
      <div>
        <Application />
        <Home />
        <MuiMode />
        <CounterTwo />
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
