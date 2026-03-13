import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Problem from '@/components/Problem/Problem';
import Solution from '@/components/Solution/Solution';
import UseCases from '@/components/UseCases/UseCases';
import Footer from '@/components/Footer/Footer';

export default function Home() {
    return (
        <main style={{ backgroundColor: 'var(--background)' }}>
            <Navbar />
            <Hero />
            <Problem />
            <Solution />
            <UseCases />
            <Footer />
        </main>
    );
}
