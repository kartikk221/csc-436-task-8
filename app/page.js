import TopContent from '../components/TopContent';
import SocialLinks from '../components/SocialLinks';
import NonSocialLinks from '../components/NonSocialLinks';

export default async function Home() {
    return (
        <main className="barge flex flex-col">
            <TopContent />
            <SocialLinks />
            <NonSocialLinks />
        </main>
    );
}
