import React from 'react'

function InputOptions({Icon, title, color}) {
    return (
        <div className=' gap-1 flex items-center justify-center mt-1 p-3 text-gray-500 cursor-pointer hover:bg-gray-200 rounded-xl'>
            <Icon style={{color: color}}/>
            <h4>{title}</h4>
        </div>
    );
}

export default InputOptions
