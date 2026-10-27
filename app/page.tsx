import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import {lusitana} from '@/app/ui/fonts';
// import {inter} from '@/app/ui/fonts';
import Image from 'next/image';
import dashboard from '@/app/dashboard/page';
import customers from '@/app/dashboard/customers/page';
import invoices from '@/app/dashboard/invoices/page';



export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">

      {/* header: navy glass instead of gray, bigger links */}
<div className="flex h-20 shrink-0 items-center justify-between rounded-lg bg-[#0E1330]/60 px-6 backdrop-blur md:h-24">
  <AcmeLogo />
  <nav className="flex items-center gap-6 text-base font-medium text-white md:gap-10 md:text-lg">
    <Link href="/dashboard" className="hover:opacity-70">Home</Link>
    <Link href="/dashboard/customers" className="hover:opacity-70">About Us</Link>
    <Link href="/dashboard/invoices" className="hover:opacity-70">Contact Us</Link>
  </nav>
</div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        
        <div className="flex flex-col justify-center gap-6 rounded-2xl px-6 py-10 md:w-2/5 md:px-14">
        <div className={styles.shape} />
          <p className={`${lusitana.className} text-2xl text-white md:text-4xl md:leading-normal`}>
            <strong>Welcome to Rbonn.<br />Delivery you can follow.</strong>
          </p>
          <p className="text-base text-white/85 md:text-lg">
            Book a pickup and a rider collects your package from your door.
            Follow it live until the receiver confirms it has arrived.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-[#FFD23F] px-6 py-3 text-sm font-semibold text-[#0E1330] transition hover:brightness-110 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-12 md:py-12">
        <Image
          src="/delivery.jpg"
          width={700}
          height={875}
          className="hidden h-[60vh] max-w-full w-auto rounded-2xl object-cover shadow-2xl md:block"
          alt="A rider handing a package to a customer"
        />
      </div>
      </div>
    </main>
  );
}
