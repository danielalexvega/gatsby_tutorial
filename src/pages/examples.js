import React from 'react';
import Layout from '../components/Layout';
import Header from '../examples/Header';
import HeaderStatic from '../examples/HeaderStatic';
import { graphql } from 'gatsby';

const examples = () => {
    

    return (
        <Layout>
            <h1>Hello from examples page</h1>
            <Header />
            <HeaderStatic />
        </Layout>
    )
}

export default examples;
