import React from 'react';
import Layout from '../components/Layout';
import styles from '../components/products.module.css';

const products = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our Products page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ab quos, minus repudiandae, impedit modi ipsum eius cum repellendus aperiam aspernatur nisi. Quae ea sequi, sint voluptas dolore blanditiis itaque?Praesentium neque quis earum voluptatibus, velit, officia, in perspiciatis excepturi amet minima culpa facere unde repellendus inventore eius hic omnis magnam aliquam accusamus recusandae voluptate! Consequuntur quod ut quas necessitatibus.</p>
      </div>
    </Layout>
  )
}

export default products;
