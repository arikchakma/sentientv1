import { useRouter } from 'next/router';
import cn from 'clsx';

export default function StakeIcon() {
  const router = useRouter();
  const isActive = router.asPath === '/stake';
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.70835 11.9584H21.2917C21.936 11.9584 22.4584 11.4361 22.4584 10.7918V6.70817C22.4584 6.06384 21.936 5.5415 21.2917 5.5415H6.70835C6.06403 5.5415 5.54169 6.06384 5.54169 6.70817V10.7918C5.54169 11.4361 6.06403 11.9584 6.70835 11.9584Z"
        className={cn(isActive ? 'stroke-white' : 'stroke-white/40')}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.70835 22.4584H21.2917C21.936 22.4584 22.4584 21.9361 22.4584 21.2917V17.2082C22.4584 16.5638 21.936 16.0415 21.2917 16.0415H6.70835C6.06403 16.0415 5.54169 16.5638 5.54169 17.2082V21.2917C5.54169 21.9361 6.06403 22.4584 6.70835 22.4584Z"
        className={cn(isActive ? 'stroke-white' : 'stroke-white/40')}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
