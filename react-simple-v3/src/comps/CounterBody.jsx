import CounterInput from './CounterInput';
import CounterView from './CounterView';

function CounterBody({change, num}) {
 
    return (
        <div>
            <CounterInput change={change}/>
            <CounterView num={num}/>
        </div>
    )
}

export default CounterBody
