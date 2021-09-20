import './App.css';
import { Line } from 'react-chartjs-2';

function App() {
    const data = {
        labels: ['11:00', '12:00'],
        datasets: [
            {
                label: 'BTC',
                data: [4000, 5000],
                backgroundColor: 'rgba(238, 175, 0, 0.4)',
                borderColor: 'rgba(238, 175, 0, 0.5)',
                pointBorderColor: 'rgba(238, 175, 0, 0.7)',
            },
        ],
    };

    return (
        <div className='App'>
            <Line data={data} />
        </div>
    );
}

export default App;
