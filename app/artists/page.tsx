import content from '@/content/site-content.json';

export default function Artists() {
  const { artists } = content;

  return (
    <main>
      <h1 className="page-title">Exhibited Artists</h1>
      
      <div className="artists-list">
        {artists.map((artist, index) => (
          <p key={index} className="artist-name">{artist}</p>
        ))}
      </div>
    </main>
  );
}
