import Image from 'next/image';
import Link from 'next/link'
import { Button } from './ui/button';

const SiteHeader = () => {
    const isSignedIn = false;
    const isLandingPage = true;
    return (
        <header className='fixed inset-x-0 top-0 z-20 flex h-18 items-center justify-between border-b border-white/6 bg-background/70 px-6 backdrop:blur-md md:px10'>
            <Link href={isSignedIn && !isLandingPage ? '/dashboard' : '/'} className='flex items-center'>
                <Image
                    src="/brand/logo-navbar-dark.png"
                    alt='outpost'
                    width={314}
                    height={160}
                    className='h-9 w-auto'
                    priority

                />
            </Link>

            {isLandingPage && (
                <nav className='hidden items-center gap-8 text-sm text-shadow-muted-foreground md:flex'>
                    <Link href="#product" className='transition-colors hover:text-foreground'>
                        Product
                    </Link>

                    <Link href="#how-it-works" className='transition-colors hover:text-foreground'>
                        How it works
                    </Link>

                    <Link href="#pricing" className='transition-colors hover:text-foreground'>
                        Pricing
                    </Link>
                </nav>
            )}
            <div>
                <Button variant='ghost' size="sm" asChild >
                    <Link href='/sign-in'>Sign in</Link>
                </Button>
            </div>
        </header>
    )
}

export default SiteHeader