import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

async function getData() {
  const query = `*[_type == "barPage"][0] {
    headline,
    description,
    photos[] {
      asset,
      caption
    },
    hours,
    accessNote
  }`;
  
  return client.fetch(query);
}

export default async function Bar() {
  const data = await getData();

  return (
    <main>
      <h1 className="page-title">The Bar</h1>

      <div className="intro">
        {data?.description ? (
          data.description.split('\n\n').map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))
        ) : (
          <>
            <p>House-made syrups, proper technique, seasonal ingredients. The menu changes. The wine list is short and thoughtful. The beer is cold.</p>
            <p>It's a real bar, not a gallery that happens to serve drinks.</p>
          </>
        )}
      </div>

      <div className="photo-grid">
        {data?.photos && data.photos.length > 0 ? (
          data.photos.slice(0, 5).map((photo: any, i: number) => (
            <div key={i} className="photo">
              <Image
                src={urlFor(photo.asset).width(1200).url()}
                alt={photo.caption || 'The Bar at Visit'}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))
        ) : (
          <>
            <div className="photo" />
            <div className="photo" />
            <div className="photo" />
            <div className="photo" />
            <div className="photo" />
          </>
        )}
      </div>

      <div className="info" style={{ maxWidth: '500px' }}>
        <div className="info-block">
          <span className="info-label">Hours</span>
          <span className="info-text" dangerouslySetInnerHTML={{ 
            __html: (data?.hours || 'Thu–Sat\n6pm–late').replace(/\n/g, '<br>') 
          }} />
        </div>
        <div className="info-block">
          <span className="info-label">Access</span>
          <span className="info-text">
            {data?.accessNote || 'Members & guests only'}<br />
            <Link href="/membership">Become a member</Link>
          </span>
        </div>
      </div>
    </main>
  );
}

export const revalidate = 60;
