import { client } from '@/lib/sanity';

async function getData() {
  const query = `*[_type == "membershipPage"][0] {
    intro,
    sections[] {
      title,
      content
    },
    tiers[] {
      name,
      price,
      description,
      joinUrl
    }
  }`;
  
  return client.fetch(query);
}

export default async function Membership() {
  const data = await getData();

  return (
    <main style={{ maxWidth: '600px' }}>
      <h1 className="page-title">Membership</h1>

      <div className="intro">
        <p>{data?.intro || 'Visit is a contemporary art gallery and cocktail bar in Newburgh, NY. We show ambitious work by emerging and established artists in an intimate setting, and we serve drinks worth staying for.'}</p>
      </div>

      {data?.sections ? (
        data.sections.map((section: any, i: number) => (
          <section key={i} className="about-section">
            <h2 className="section-title">{section.title}</h2>
            <div className="about-text">
              {section.content.split('\n\n').map((p: string, j: number) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </section>
        ))
      ) : (
        <>
          <section className="about-section">
            <h2 className="section-title">Why Members Only</h2>
            <div className="about-text">
              <p>We keep it small on purpose. No foot traffic, no walk-ins looking for a bathroom, no bachelorette parties. Just people who came to see the art and have a drink.</p>
              <p>Membership means you're part of a community that takes both seriously. You'll see the same faces, meet the artists, and have real conversations at the bar.</p>
            </div>
          </section>

          <section className="about-section">
            <h2 className="section-title">The Bar</h2>
            <div className="about-text">
              <p>We make cocktails with care — house-made syrups, proper technique, seasonal ingredients. The menu changes with the exhibitions. The wine list is short and thoughtful. The beer is cold.</p>
              <p>It's a real bar, not a gallery that happens to serve drinks.</p>
            </div>
          </section>

          <section className="about-section">
            <h2 className="section-title">The Gallery</h2>
            <div className="about-text">
              <p>We mount four to six exhibitions per year, each running six to eight weeks. Opening receptions, artist talks, and occasional events happen throughout the run.</p>
              <p>It's a real gallery, not a bar that happens to hang art.</p>
            </div>
          </section>
        </>
      )}

      <div className="tiers">
        <h2 className="section-title">Join</h2>
        
        {data?.tiers ? (
          data.tiers.map((tier: any, i: number) => (
            <div key={i} className="tier">
              <div className="tier-header">
                <span className="tier-name">{tier.name}</span>
                <span className="tier-price">{tier.price}</span>
              </div>
              <p className="tier-description">{tier.description}</p>
              <a href={tier.joinUrl || '#'} className="btn">Join</a>
            </div>
          ))
        ) : (
          <>
            <div className="tier">
              <div className="tier-header">
                <span className="tier-name">Classic</span>
                <span className="tier-price">$100 / year</span>
              </div>
              <p className="tier-description">Entry for you plus one guest</p>
              <a href="#" className="btn">Join</a>
            </div>

            <div className="tier">
              <div className="tier-header">
                <span className="tier-name">Enthusiast</span>
                <span className="tier-price">$250 / year</span>
              </div>
              <p className="tier-description">Entry for you plus three guests</p>
              <a href="#" className="btn">Join</a>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export const revalidate = 60;
