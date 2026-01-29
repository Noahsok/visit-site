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
      endDate
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
    <main className="exhibitions-page">
      <h1 className="page-title">Exhibitions</h1>

      {current && (
        <section className="current-exhibition">
          <h2 className="section-title">Current</h2>
          <div className="current-exhibition-layout">
            <div className="current-exhibition-image">
              {current.image && (
                <Image
                  src={urlFor(current.image).width(800).url()}
                  alt={`${current.artist} - ${current.title}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
            <div className="current-exhibition-info">
              <h3 className="exhibition-artist">{current.artist}</h3>
              <h4 className="exhibition-title">{current.title}</h4>
              <p className="exhibition-dates">
                {formatDateRange(current.startDate, current.endDate)}
              </p>
              {current.description && (
                <p className="exhibition-description">{current.description}</p>
              )}
            </div>
          </div>
        </section>
      )}

      {archive && archive.length > 0 && (
        <section className="archive-section">
          <h2 className="section-title">Archive</h2>
          <div className="archive-scroll-container">
            <div className="archive-scroll">
              {archive.map((show: any) => (
                <div key={show._id} className="archive-item">
                  <h3 className="archive-artist">{show.artist}</h3>
                  <h4 className="archive-title">{show.title}</h4>
                  <p className="archive-dates">{formatDateRange(show.startDate, show.endDate)}</p>
                </div>
              ))}
            </div>
            <div className="archive-scroll-fade" />
          </div>
        </section>
      )}
    </main>
  );
}

export const revalidate = 60;
