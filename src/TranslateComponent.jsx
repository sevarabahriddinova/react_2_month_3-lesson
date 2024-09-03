import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslation } from './translateSlice';

const TranslateComponent = () => {
    const [text, setText] = useState('');
    const [targetLang, setTargetLang] = useState('uz');
    const dispatch = useDispatch();
    const { translation, loading, error } = useSelector((state) => state.translate);

    const handleTranslate = () => {
        dispatch(fetchTranslation(text, targetLang));
    };

    return (
        <div className='container w-[800px] mx-auto mt-28 shadow-xl p-6 bg-gray-200 rounded-lg'>
            <div className="w-full  p-4 bg-white rounded-lg shadow-2xl">
            <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text"
                className="w-full outline-none  border border-gray-300 rounded-lg resize-none mb-4 p-4"
            />
            <button
                onClick={handleTranslate}
                disabled={loading}
                className={`w-[400px] mx-auto flex justify-center py-2 px-4 rounded-lg text-white ${
                    loading ? 'bg-blue-400' : 'bg-gray-500 hover:bg-gray-500'
                }`}
            >
                {loading ? 'Translating...' : 'Translate'}
            </button>
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {translation && <p className="mt-4">Translation: {translation}</p>}
        </div>
        </div>
    );
};

export default TranslateComponent;
