import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

async function getData() {
  const query = `{
    "currentExhibition": *[_type == "exhibition" && current == true][0] {
      artist,
      title,
      startDate,
      endDate,
      image
    },
    "events": *[_type == "event" && date >= now()] | order(date asc) [0...5] {
      _id,
      name,
      date,
      time
    },
    "settings": *[_type == "siteSettings"][0] {
      hours,
      address,
      galleryNote,
      barNote
    }
  }`;
  
  return client.fetch(query);
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatDateRange(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const startStr = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const endStr = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  return `${startStr} — ${endStr}`;
}

export default async function Home() {
  const { currentExhibition, events, settings } = await getData();

  return (
    <main>
      {currentExhibition && (
        <section className="exhibition">
          <div className="exhibition-image">
            {currentExhibition.image && (
              <Image
                src={urlFor(currentExhibition.image).width(1400).url()}
                alt={`${currentExhibition.artist} - ${currentExhibition.title}`}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            )}
          </div>
          <div className="exhibition-info">
            <h1 className="exhibition-artist">{currentExhibition.artist}</h1>
            <h2 className="exhibition-title">{currentExhibition.title}</h2>
            <p className="exhibition-dates">
              {formatDateRange(currentExhibition.startDate, currentExhibition.endDate)}
            </p>
          </div>
        </section>
      )}

      {events && events.length > 0 && (
        <section className="upcoming">
          <h3 className="section-title">Upcoming</h3>
          <div className="events-list">
            {events.map((event: any) => (
              <div key={event._id} className="event">
                <span className="event-date">{formatDate(event.date)}</span>
                <span className="event-name">{event.name}</span>
                <span className="event-time">{event.time}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="info">
        <div className="info-block">
          <span className="info-label">Hours</span>
          <span className="info-text" dangerouslySetInnerHTML={{ __html: settings?.hours?.replace(/\n/g, '<br>') || 'Thu–Sat<br>6pm–12am' }} />
        </div>
        <div className="info-block">
          <span className="info-label">Location</span>
          <span className="info-text">
            <a href="#" dangerouslySetInnerHTML={{ __html: settings?.address?.replace(/\n/g, '<br>') || '143 Liberty Street<br>Newburgh, NY 12550' }} />
          </span>
        </div>
      </section>

      <section className="membership-cta">
        <p className="membership-note">{settings?.galleryNote || 'Gallery open to the public'} · {settings?.barNote || 'Bar for members'}</p>
        <Link href="/membership" className="btn">Become a Member</Link>
      </section>
    </main>
  );
}

export const revalidate = 60;
