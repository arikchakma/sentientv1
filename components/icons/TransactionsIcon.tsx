import { useRouter } from 'next/router';
import cn from 'clsx';

export default function TransactionsIcon() {
  const router = useRouter();
  const isActive = router.asPath === '/transactions';
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.62502 13.1248L5.54169 9.33317L9.62502 5.5415"
        className={cn(isActive ? 'stroke-white' : 'stroke-white/40')}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.54169 9.3335H17.7917"
        className={cn(isActive ? 'stroke-white' : 'stroke-white/40')}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.375 14.875L22.4583 18.6667L18.375 22.4583"
        className={cn(isActive ? 'stroke-white' : 'stroke-white/40')}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.4583 18.6665H10.2083"
        className={cn(isActive ? 'stroke-white' : 'stroke-white/40')}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
