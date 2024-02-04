import styles from '@/app/styles/home.module.css';
<div className={styles.shape} />;
import ProductList from '@/app/components/product-list';
import { Metadata } from 'next';
import PageLayout from '../components/page-layout';
import './products.css'

export const metadata: Metadata = {
  title: 'Handcrafted Haven | Products',
};

export default function Page() {
    return (
      <>        
        <PageLayout>
          <ProductList />
        </PageLayout>
      </>
    )
  }