//src/app/cardinfo/page.tsx

import { getData } from "../cardinfo/data";
//import { earchParams } from 'next/navigation';

import cardinfo from "../cardinfo/cardinfo.module.scss";

const Page = async ({ searchParams }: { searchParams: { id: string } }) => {

    const id = searchParams.id;

    const data = await getData(id);

    return (

        <>
            {data &&
                <>
                    <section id={cardinfo.cardContainer}>
                        <div id={cardinfo.card}>
                            <div id={cardinfo.headline}>{data.post.name}</div>
                            <div id={cardinfo.imagecon}>
                                <img id="showImg" src={data.post.image} />
                            </div>
                            <div id={cardinfo.content}>{data.post.description}</div>

                        </div>
                    </section>
                </>
            }
        </>

    )
}

export default Page;