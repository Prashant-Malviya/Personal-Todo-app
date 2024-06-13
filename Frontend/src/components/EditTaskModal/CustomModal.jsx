import React from 'react';

function CustomModal({ show, onClose, children }) {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gradient-to-tr from-blue-300 via-red-100 to-amber-300 p-6 rounded-lg shadow-lg w-full max-w-lg">
                <div className="flex justify-end">
                    <button
                        className="text-gray-600 hover:text-gray-900 text-2xl font-bold"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>
                <div className="mt-4">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default CustomModal;
