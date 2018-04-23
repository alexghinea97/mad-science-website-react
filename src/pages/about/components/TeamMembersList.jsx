import React from 'react';
import TeamMemberCard from './TeamMemberCard';

export default function TeamMembersList(props) {
  return (
    <div className="team-members-list">
      <h2 className="team-member-title">Екипът на Книгомания</h2>
      <TeamMemberCard
        {...{
          stylingId: 'bojo',
          personName: 'Божидар Гевечанов',
          personPosition: 'Разработчик и Съосновател'
        }}
      />
      <TeamMemberCard
        {...{
          stylingId: 'didi',
          personName: 'Диди Миликина',
          personPosition: 'Разработчик и Съосновател'
        }}
      />
    </div>
  );
}
