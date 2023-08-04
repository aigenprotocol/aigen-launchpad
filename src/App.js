import AigenLogo from "./launch/assets/aigen-logo-light.svg"
import './App.css';
import { Button } from 'flowbite-react';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={AigenLogo} alt="Aigen Logo"/>
                <div className="text-3xl font-bold underline my-4">Aigen Launchpad</div>
                <Button> Coming Soon... </Button>
            </header>
        </div>
    );
}

export default App;
