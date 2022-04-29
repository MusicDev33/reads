import { useState, useEffect } from 'react';

import { BookView } from 'components/BookView/BookView';

export const InfoView = ({type, data}) => {
  let component;

  if (type == 'book') {
    component = <BookView data={data} />
  }

  return (
    <div className="px-4 py-3">
      {component}
    </div>
  );
}
