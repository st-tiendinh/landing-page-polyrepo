'use client';
import { formatDate } from '@st-tiendinh/shared-utils-polyrepo';

export const Calendar = () => {
  const today = new Date();
  return <span>{formatDate(today, 'long')}</span>;
};
