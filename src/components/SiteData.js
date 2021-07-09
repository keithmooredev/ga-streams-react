import React from 'react';

function SiteData({ data, units }) {
  const vals = data.values[0];
  const val = vals.value[0];
  return (
    <li>
      {val.value} {units}
    </li>
  );
}

export default SiteData;
