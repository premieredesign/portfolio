import React from 'react';
import Header from '../shared/Header';
import styled, {css} from 'styled-components';

const BaseStyledLayout = styled.main`
    // background-image: linear-gradient(45deg,#00aeef 0%,#096fb9 100%);
    overflow: hidden;
    position: relative;
    ${props => props.customClass && css`
        ${props.className}
    `}
`;

export const BaseLayout = (props) => {
    const { className, children } = props;
    console.log('ClassName', className);

    return (
        <div className="layout-container" >
            <Header />
            <BaseStyledLayout customClass={className}>
                <div className="wrapper">
                    {children}
                </div>
            </BaseStyledLayout>
        </div>
    )
};
