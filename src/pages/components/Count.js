import {useState} from 'react';

function Count(){
    const [count,setCount] = useState(0);
    
    function Incrementar(){
            setCount(count +1);
    }
    function Decrementar(){
        setCount(count -1);
}
    return (
        
        <div className="flex flex-col items-center ">
            <label className="mb-16 text-4xl h-fit w-fit bg-gray-50 flex justify-center items-center p-2 rounded-md shadow-lg">{count}</label>
            <div className=''>
                <button className='bg-green-600 text-white font-bold p-2 rounded-md active:bg-green-900 active:text-gray-300 m-2' onClick={Incrementar}>Incrementar</button>
                <button className='bg-red-600 text-white font-bold p-2 rounded-md active:bg-red-900 active:text-gray-300 m-2' onClick={Decrementar}>Decrementar</button>
            </div>
        </div>
    );
}

export default Count;