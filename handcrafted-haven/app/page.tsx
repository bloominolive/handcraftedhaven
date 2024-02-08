import styles from '@/app/styles/home.module.css';
<div className={styles.shape} />;
import { Metadata } from 'next';
import PageLayout from './components/page-layout';
 
export const metadata: Metadata = {
  title: 'Handcrafted Haven | Home',
};

export default function Page() {
  return (
      <PageLayout>
        <div className="mt-6 flex flex-col md:flex-row gap-4 items-stretch md:h-1/2">
            <div className="flex flex-col justify-center gap-4 mt-14 rounded-lg bg-light px-6 py-10 md:w-2/5 md:px-20 md:h-full">
              <p className="text-xl text-dark md:text-3xl md:leading-normal">
                <strong>Welcome to Handcrafted Haven.</strong> Connect with creativity and browse handcrafted and handmade products.
              </p>  
            </div>
            <div className="md:w-3/5 flex justify-center items-center md:h-full">
              <img src='/images/girl-creating-440x660.jpg' alt='girl-creating' style={{ maxWidth: '80%' }} className=" mx-2 object-cover rounded-lg" />
            </div>
          </div>
      </PageLayout>
  );
}
