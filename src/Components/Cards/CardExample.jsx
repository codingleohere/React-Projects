import { Card1 } from "./Card1";
import image from "./image.jpg";

export const CardExample = () => {
    const handleProfile = () => {
        // goto profile
    };

    const handleFollow = () => {
        // follow account
    };

    return (
        <section className="page card-2-example-page">
            <Card1
                image={image}
                title="Jess Wilson"
                subtitle="UX Engineer"
                description="Empowering users through captivating interfaces, turning ideas into pixel-perfect realities."
                onProfile={handleProfile}
                onFollow={handleFollow}
            />
        </section>
    );
};