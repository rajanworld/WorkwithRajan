const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto pt-32 pb-20 py-12 px-4 md:px-0 text-white">
            <header className="text-left mb-8 border-b border-gray-700 pb-8">
                <h1 className="text-4xl font-extrabold mb-2">
                    Privacy Policy
                </h1>
                <p className="text-lg">
                    Your privacy is our priority. This policy explains how we handle
                    your data.
                </p>
            </header>

            <section className="mb-6 border-b border-gray-700 pb-6">
                <h2 className="text-2xl font-semibold mb-3">
                    Information Collection
                </h2>
                <p>
                    We collect information that you provide directly to us when using our services.
                    This may include your name, email address, and any other information you choose to provide.
                </p>
            </section>

            <section className="mb-6 border-b border-gray-700 pb-6">
                <h2 className="text-2xl font-semibold mb-3">
                    How We Use Your Data
                </h2>
                <p>
                    We use the information we collect to provide, maintain, and improve our services.
                    This includes personalizing your experience and communicating with you about our services.
                </p>
            </section>

            <section className="mb-6 border-b border-gray-700 pb-6">
                <h2 className="text-2xl font-semibold mb-3">
                    Data Protection Measures
                </h2>
                <p>
                    We implement appropriate technical and organizational measures to protect your personal data
                    against unauthorized or unlawful processing, accidental loss, or destruction.
                </p>
            </section>

            <section className="mb-6 border-b border-gray-700 pb-6">
                <h2 className="text-2xl font-semibold mb-3">
                    Data Sharing and Disclosure
                </h2>
                <p>
                    We do not sell your personal information. We may share your information only in circumstances
                    described in this policy or with your explicit consent.
                </p>
            </section>

            <section className="mb-6 border-b border-gray-700 pb-6">
                <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
                <p>
                    You have the right to access, correct, or delete your personal information.
                    You can also object to processing or request data portability.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">
                    Policy Updates
                </h2>
                <p>
                    We may update this privacy policy from time to time. We will notify you of any changes
                    by posting the new policy on this page.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
