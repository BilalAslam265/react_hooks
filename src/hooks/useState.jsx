import React, { useState } from 'react'

function useStateHook() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h4 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Click count: <span className="text-indigo-600">{count}</span></span>
                    </h4>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            onClick={() => setCount(count + 1)}>
                            Click Event
                            </a>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                            onClick={() => setCount(0)}>
                            Clear
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default useStateHook;