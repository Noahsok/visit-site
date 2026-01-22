import content from '@/content/site-content.json';
import Link from 'next/link';

export default function Membership() {
  const { membershipTiers } = content;

  return (
    <main>
      <h1 className="page-title">Membership</h1>
      
      <div className="intro">
        <p>
          Visit is a members-only cocktail bar and contemporary art gallery in 
          Newburgh, NY. While our gallery exhibitions are open to the public, 
          the bar is reserved for members and their guests.
        </p>
        <p>
          Membership supports our artist compensation program — artists receive 
          a percentage of bar revenue when their work is on display.
        </p>
      </div>

      <section>
        <h3 className="section-title">Membership Tiers</h3>
        <div className="tiers">
          {membershipTiers.map((tier, index) => (
            <div key={index} className="tier">
              <div className="tier-header">
                <h4 className="tier-name">{tier.name}</h4>
                <span className="tier-price">{tier.price}</span>
              </div>
              <p className="tier-description">{tier.description}</p>
              <a 
                href="https://visit.outseta.com/auth?widgetMode=login#o-anonymous" 
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
