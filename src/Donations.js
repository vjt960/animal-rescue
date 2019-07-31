import React from 'react';
import { connect } from 'react-redux';

export const Donations = ({ donations }) => {
  const donationCards = donations.map(donation => {
    return (
      <article key={donation.id} className="donation-card">
        <p>{`${donation.name} recently donated $${donation.donation}`}</p>
      </article>
    );
  });

  return (
    <aside className="donations">
      <h2>Recent Donations</h2>
      {donationCards}
    </aside>
  );
};

const mapStateToProps = state => ({
  donations: state.donations
});

export default connect(mapStateToProps)(Donations);
