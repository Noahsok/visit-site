import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';

async function getData() {
  const query = `{
    "current": *[_type == "exhibition" && current == true][0] {
      artist,
      title,
      startDate,
      endDate,
      description,
      image
    },
    "archive": *[_type == "exhibition" && current != true] | order(startDate desc) {
      _id,
      artist,
      title,
      startDate,
      endDate,
      image
    }
  }`;
  
  return client.fetch(query);
}

function formatDateRange(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const startStr = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const endStr = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  return `${startStr} — ${endStr}`;
}

export default async function Exhibitions() {
  const { current, archive } = await getData();

  return (
    <main>
      <h1 className="page-title">Exhibitions</h1>

      {current && (
        <section className="current-exhibition" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">Current</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
            <div className="exhibition-image" style={{ maxWidth: '100%' }}>
              {current.image && (
                <Image
                  src={urlFor(current.image).width(1000).url()}
                  alt={`${current.artist} - ${current.title}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
            <div style={{ paddingTop: '0.5rem' }}>
              <h3 className="exhibition-artist" style={{ fontSize: '1.5rem' }}>{current.artist}</h3>
              <h4 className="exhibition-title" style={{ fontSize: '1.5rem' }}>{current.title}</h4>
              <p className="exhibition-dates" style={{ marginBottom: '1.5rem' }}>
                {formatDateRange(current.startDate, current.endDate)}
              </p>
              {current.description && (
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  {current.description}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {archive && archive.length > 0 && (
        <section style={{ paddingTop: '2rem', borderTop: '1px solid var(--text-tertiary)' }}>
          <h2 className="section-title">Archive</h2>
          <div className="archive-grid">
            {archive.map((show: any) => (
              <div key={show._id} className="archive-item">
                <div className="archive-image">
                  {show.image && (
                    <Image
                      src={urlFor(show.image).width(600).url()}
                      alt={`${show.artist} - ${show.title}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </div>
                <h3 className="archive-artist">{show.artist}</h3>
                <h4 className="archive-title">{show.title}</h4>
                <p className="archive-dates">{formatDateRange(show.startDate, show.endDate)}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export const revalidate = 60;
