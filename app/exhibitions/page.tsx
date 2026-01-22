import content from '@/content/site-content.json';
import Image from 'next/image';

function formatDateRange(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const startStr = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const endStr = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  return `${startStr} – ${endStr}`;
}

export default function Exhibitions() {
  const { currentExhibition, pastExhibitions } = content;

  return (
    <main>
      <h1 className="page-title">Exhibitions</h1>

      {currentExhibition && (
        <section className="exhibition" style={{ marginBottom: '4rem' }}>
          <h3 className="section-title">Current</h3>
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
            <h2 className="exhibition-artist">{currentExhibition.artist}</h2>
            <p className="exhibition-title">{currentExhibition.title}</p>
            <p className="exhibition-dates">
              {formatDateRange(currentExhibition.startDate, currentExhibition.endDate)}
            </p>
          </div>
        </section>
      )}

      {pastExhibitions && pastExhibitions.length > 0 && (
  <section className="archive-section">
    <h3 className="section-title">Archive</h3>
    <div className="archive-scroll">
      <div className="archive-grid">
        {/* First set */}
        {pastExhibitions.map((exhibition, index) => (
          <div key={index} className="archive-item">
            <p className="archive-artist">{exhibition.artist}</p>
            <p className="archive-title">{exhibition.title}</p>
            <p className="archive-dates">
              {formatDateRange(exhibition.startDate, exhibition.endDate)}
            </p>
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {pastExhibitions.map((exhibition, index) => (
          <div key={`dup-${index}`} className="archive-item">
            <p className="archive-artist">{exhibition.artist}</p>
            <p className="archive-title">{exhibition.title}</p>
            <p className="archive-dates">
              {formatDateRange(exhibition.startDate, exhibition.endDate)}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)}
    </main>
  );
}
