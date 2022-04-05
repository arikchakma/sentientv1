import NextLink from 'next/link';
import { useRouter } from 'next/router';

import cn from 'clsx';

function SideIcon() {
  return (
    <svg
      width="6"
      height="30"
      viewBox="0 0 6 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.09091 5.2381C0.484238 3.22754 0.636363 2.77778 0 -2.62268e-07L-1.31134e-06 30C0.636362 27.2222 0.484237 26.7725 1.09091 24.7619C2.30576 20.7358 6 18.5201 6 15C6 11.4799 2.30576 9.26422 1.09091 5.2381Z"
        fill="white"
      />
    </svg>
  );
}

export default function SidebarLink({
  href,
  Icon,
  children,
  ...props
}: {
  href: string;
  Icon: React.FC;
  children?: React.ReactNode;
}) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <NextLink href={href}>
      <a
        {...props}
        className="relative flex items-center gap-2 rounded-xl transition-all group-hover:rounded sidebar-max:bg-white/[0.04] sidebar-max:p-2 sidebar-max:group-hover:bg-white/10"
      >
        <Icon />
        <span
          className={cn(
            'block text-base sidebar-max:hidden',
            isActive ? 'font-semibold text-white' : 'text-white/40'
          )}
        >
          {children}
        </span>
        <span className="absolute left-16 hidden origin-left scale-0 rounded bg-[#00E5E5] p-2 font-bold text-[#0B0B13] transition-all group-hover:scale-100 sidebar-max:block">
          {children}
        </span>

        {isActive ? (
          <div className="absolute right-[-22px] sidebar-max:right-[-20px]">
            <SideIcon />
          </div>
        ) : null}
      </a>
    </NextLink>
  );
}
