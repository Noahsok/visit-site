import { client } from '@/lib/sanity';

async function getData() {
  const query = `*[_type == "artist"] | order(name asc) {
    _id,
    name
  }`;
  
  return client.fetch(query);
}

export default async function Artists() {
  const artists = await getData();

  return (
    <main>
      <h1 className="page-title">Artists</h1>

      <div className="artists-list">
        {artists && artists.map((artist: any) => (
          <div key={artist._id} className="artist-name">
            {artist.name}
          </div>
        ))}
      </div>
    </main>
  );
}

export const revalidate = 60;
