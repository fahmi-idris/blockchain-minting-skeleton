import React from 'react';

const renderIcon = (Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>, className?: string) => {
  if (typeof Icon !== 'undefined') {
    return <Icon className={className} />;
  }
  return null;
};

export default renderIcon;
