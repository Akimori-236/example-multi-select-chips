import { useState } from 'react';
import { Button, ListGroup, ListGroupItem, Badge, Row, Col } from 'reactstrap';

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
        <div className="container mt-5">
            {/* List of available labels */}
            <Row>
                <Col>
                    <h3>Select Labels:</h3>
                    <ListGroup>
                        {availableLabels.map((label) => (
                            <ListGroupItem key={label} className="d-flex justify-content-between">
                                <Button
                                    color="primary"
                                    size="sm"
                                    onClick={() => handleAddLabel(label)}
                                >
                                    {label}
                                </Button>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Col>
            </Row>

            {/* Display selected labels as chips */}
            <Row className="mt-4">
                <Col>
                    <h3>Selected Labels:</h3>
                    {selectedLabels.length > 0 ? (
                        <div className="d-flex flex-wrap">
                            {selectedLabels.map((label) => (
                                <Badge
                                    key={label}
                                    color="light"
                                    pill
                                    className="border border-dark text-dark me-2 mb-2 ps-3 d-flex align-items-center"
                                >
                                    {label}
                                    <Button
                                        color="light"
                                        size="sm"
                                        className="ms-2 rounded-pill"
                                        onClick={() => handleRemoveLabel(label)}
                                    >
                                        ❌
                                    </Button>
                                </Badge>
                            ))}
                        </div>
                    ) : (
                        <p>No labels selected</p>
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default MultiSelectChips;
