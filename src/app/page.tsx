//src/app/page.tsx

import Image from 'next/image'
import styles from './page.module.scss';
import { actor } from '@/app/type/types';
import { getData } from './data';
import Card from './components/card';

export default async function Home() {

  const data = await getData();

  return (

    <>
      <div id={styles.parent}>
        
        {data &&
          data.posts.map((item: actor, index: number) => (
            <Card mdata={item} mindex={index} />
          ))
        }
      </div>
    </>
  )

}
