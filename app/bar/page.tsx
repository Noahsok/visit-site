import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';

async function getData() {
  const query = `*[_type == "barPage"][0] {
    headline,
    description,
    photos
  }`;
  
  return client.fetch(query);
}

export default async function Bar() {
  const data = await getData();

  return (
    <main>
      <h1 className="page-title">Bar</h1>
      
      <div className="intro">
        {data?.description ? (
          <p>{data.description}</p>
        ) : (
          <>
            <p>A cocktail bar for members and their guests.</p>
            <p>Thursday – Saturday, 6pm – 12am</p>
          </>
        )}
      </div>

      {data?.photos && data.photos.length > 0 && (
        <div className="photo-grid">
          {data.photos.map((photo: any, index: number) => (
            <div key={index} className="photo">
              <Image
                src={urlFor(photo).width(800).url()}
                alt="Visit bar"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export const revalidate = 60;
