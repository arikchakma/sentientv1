import {useRouter} from 'next/router';
import cn from 'clsx'

export default function StrategiesIcon() {
  const router = useRouter();
  const isActive = router.asPath === '/';
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.54169 7.87484V9.62484C5.54169 10.9135 6.58636 11.9582 7.87502 11.9582H9.62502C10.9137 11.9582 11.9584 10.9135 11.9584 9.62484V7.87484C11.9584 6.58617 10.9137 5.5415 9.62502 5.5415H7.87502C6.58636 5.5415 5.54169 6.58617 5.54169 7.87484Z"
        
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(isActive? "stroke-white": "stroke-white/40")}

      />
      <path
        d="M17.2083 8.1665H22.4583"
        
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(isActive? "stroke-white": "stroke-white/40")}
      />
      <path
        d="M19.8333 5.5415V10.7915"
        
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(isActive? "stroke-white": "stroke-white/40")}
      />
      <path
        d="M5.54169 18.3748V20.1248C5.54169 21.4135 6.58636 22.4582 7.87502 22.4582H9.62502C10.9137 22.4582 11.9584 21.4135 11.9584 20.1248V18.3748C11.9584 17.0861 10.9137 16.0415 9.62502 16.0415H7.87502C6.58636 16.0415 5.54169 17.0861 5.54169 18.3748Z"
        
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(isActive? "stroke-white": "stroke-white/40")}
      />
      <path
        d="M16.0417 18.3748V20.1248C16.0417 21.4135 17.0863 22.4582 18.375 22.4582H20.125C21.4137 22.4582 22.4584 21.4135 22.4584 20.1248V18.3748C22.4584 17.0861 21.4137 16.0415 20.125 16.0415H18.375C17.0863 16.0415 16.0417 17.0861 16.0417 18.3748Z"
        
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(isActive? "stroke-white": "stroke-white/40")}
      />
    </svg>
  );
}
