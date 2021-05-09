import React from 'react';
import './Marker.css';

const Marker_red = (props: any) => {
    const { color, name, id } = props;
    return (
        <div className="marker-red"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        >
        {name}
        </div>
    );
};

export default Marker_red;