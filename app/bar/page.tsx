import content from '@/content/site-content.json';
import Image from 'next/image';

export default function Bar() {
  const { barPhotos } = content;

  return (
    <main>
      <h1 className="page-title">Bar</h1>
      
      <div className="intro">
        <p>
          A curated cocktail program featuring seasonal ingredients, house-made syrups, 
          and a thoughtfully selected spirit collection. Our bar is open exclusively 
          to members and their guests.
        </p>
      </div>

      <div className="photo-grid">
        {barPhotos.map((photo, index) => (
          <div key={index} className="photo">
            <Image
              src={photo}
              alt="Visit bar"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
