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
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to translate"
                className="w-full h-32 p-2 border border-gray-300 rounded-lg resize-none mb-4"
            />
            <button
                onClick={handleTranslate}
                disabled={loading}
                className={`w-full py-2 px-4 rounded-lg text-white ${
                    loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'
                }`}
            >
                {loading ? 'Translating...' : 'Translate'}
            </button>
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {translation && <p className="mt-4 text-green-500">Translation: {translation}</p>}
        </div>
    );
};

export default TranslateComponent;
