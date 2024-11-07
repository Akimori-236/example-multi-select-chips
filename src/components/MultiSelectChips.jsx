import { useState } from 'react';

const MultiSelectChips = () => {
    // List of available labels
    const availableLabels = [
        'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Jackfruit', 'Kiwi'
    ];

    // State to hold the selected labels
    const [selectedLabels, setSelectedLabels] = useState([]);

    // Function to handle adding a label
    const handleAddLabel = (label) => {
        if (!selectedLabels.includes(label)) {
            setSelectedLabels([...selectedLabels, label]);
        }
    };

    // Function to handle removing a label
    const handleRemoveLabel = (label) => {
        setSelectedLabels(selectedLabels.filter((selected) => selected !== label));
    };

    return (
        <div className="multi-select-container">
            {/* List of available labels */}
            <div className="available-labels">
                <h3>Select Labels:</h3>
                <ul>
                    {availableLabels.map((label) => (
                        <li key={label}>
                            <button
                                className="select-button"
                                onClick={() => handleAddLabel(label)}
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Display selected labels as chips */}
            <div className="selected-chips">
                <h3>Selected Labels:</h3>
                {selectedLabels.length > 0 ? (
                    <div className="chips-container">
                        {selectedLabels.map((label) => (
                            <div key={label} className="chip">
                                {label}
                                <button
                                    className="remove-chip"
                                    onClick={() => handleRemoveLabel(label)}
                                >
                                    ✖
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No labels selected</p>
                )}
            </div>
        </div>
    );
};

export default MultiSelectChips;
