import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderLinksStyled = styled.div`
     font-size: 20px;
`;


export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeaderLinksStyled>
                    <Link href="/">
                        <a style={{'fontSize': '20px'}}> Home </a>
                    </Link>

                    <Link href="/about">
                        <a> About </a>
                    </Link>

                    <Link href="/portfolios">
                        <a> Portfolio </a>
                    </Link>

                    <Link href="/blogs">
                        <a> Blog </a>
                    </Link>

                    <Link href="/cv">
                        <a> CV </a>
                    </Link>
                </HeaderLinksStyled>
            </React.Fragment>
        )
    }
}
