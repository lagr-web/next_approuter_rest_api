import Image from 'next/image'
import styles from '../page.module.scss';
import { actor } from "../type/types";
import Link from 'next/link';

interface actortypes {
  mindex: number;
  mdata: actor;
}

const card = (props: actortypes) => {

  const data = props.mdata;
  const index = props.mindex;


  return (

    <div
      key={"card" + index}
      className={styles.card}>


      <section className={styles.column}>

        <figure className={styles.leftColumn}>
          <Image
            src={data.image}
            priority={true}
            alt="image description"
            width={150}
            height={150}
            //fill
            style={{ objectFit: "cover" }}
          />
        </figure>

      </section>

      <section className={styles.column}>

        <div className={styles.rightColumn}>

          <div className={styles.name}>{data.name}</div>
          <div className={styles.description}>{data.description}</div>
          <div className={styles.read}>

            <Link
              href={{
                pathname: '/cardinfo',
                query: { id: data.id },
              }}
            >
              Read more
            </Link>

          </div>

        </div>

      </section>

    </div>
  )
}

export default card;