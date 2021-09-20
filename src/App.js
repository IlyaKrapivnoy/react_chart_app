import './App.css';
import { Line } from 'react-chartjs-2';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getData from './actions/bitcoinActions';

function App() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.bitcoin);
    const [num, setNum] = useState(15);

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

    const fetchData = (time) => {
        // fetch data from redux using time
        dispatch(getData({ time, number: num }));
    };

    const loading = true;

    return (
        <div className='App'>
            <div className='btns-wrapper'>
                <button onClick={() => fetchData('1 minutes')}>
                    1 minutes
                </button>
                <button onClick={() => fetchData('5 minutes')}>
                    5 minutes
                </button>
                <button onClick={() => fetchData('15 minutes')}>
                    15 minutes
                </button>
                <input
                    onChange={(e) => {
                        setNum(e.target.value);
                    }}
                />
                {state.loading && <p>Loading...</p>}
            </div>
            <div className='chart-wrapper'>
                <Line data={data} />
            </div>
        </div>
    );
}

export default App;
