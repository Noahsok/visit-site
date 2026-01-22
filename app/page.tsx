import content from '@/content/site-content.json';
import Image from 'next/image';
import Link from 'next/link';

interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
}

interface SiteContent {
  currentExhibition: {
    artist: string;
    title: string;
    startDate: string;
    endDate: string;
    image: string;
    pressRelease: string;
  };
  upcomingEvents: Event[];
  siteSettings: {
    hours: string;
    address: string;
    addressNote: string;
    galleryNote: string;
    barNote: string;
  };
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
  return `${startStr} – ${endStr}`;
}

export default function Home() {
  const { currentExhibition, upcomingEvents, siteSettings } = content as SiteContent;

  return (
    <main>
      {currentExhibition && (
        <section className="exhibition">
          <div className="exhibition-image">
            {currentExhibition.image && (
              <Image
                src={currentExhibition.image}
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

      {upcomingEvents && upcomingEvents.length > 0 && (
        <section className="upcoming">
          <h3 className="section-title">Upcoming</h3>
          <div className="events-list">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event">
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
          <span className="info-text" dangerouslySetInnerHTML={{ __html: siteSettings.hours.replace(/\n/g, '<br>') }} />
        </div>
        <div className="info-block">
          <span className="info-label">Location</span>
          <span className="info-text">
            <a href="#" dangerouslySetInnerHTML={{ __html: siteSettings.address.replace(/\n/g, '<br>') }} />
            <br />
            <small style={{ opacity: 0.7 }}>{siteSettings.addressNote}</small>
          </span>
        </div>
      </section>

      <section className="membership-cta">
        <p className="membership-note">{siteSettings.galleryNote} · {siteSettings.barNote}</p>
        <Link href="/membership" className="btn">Become a Member</Link>
      </section>
    </main>
  );
}
