import React from 'react';
import {Container} from 'reactstrap'

export default function (props) {
    const {className} = props;
    return (
        <div className={`base-page ${className}`}>
            <Container>
                {props.children}
            </Container>
        </div>
    )
}
