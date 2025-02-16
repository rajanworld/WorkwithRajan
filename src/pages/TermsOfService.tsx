const TermsOfService = () => {
  return (
    <div className="container mx-auto pt-32 pb-20 py-12 px-4 md:px-0 text-white">
      <header className="text-left mb-8 border-b border-gray-700 pb-8">
        <h1 className="text-4xl font-extrabold mb-2">
          Terms of Service
        </h1>
   
      </header>
      
      <section className="mb-6 border-b border-gray-700 pb-6">
        <h2 className="text-2xl font-semibold mb-3">Acceptable Use</h2>
        <p>
          You agree not to use the service for any illegal or unauthorized
          purpose. You must not violate any laws in your jurisdiction.
        </p>
      </section>

      <section className="mb-6 border-b border-gray-700 pb-6">
        <h2 className="text-2xl font-semibold mb-3">Content Ownership</h2>
        <p>
          All content provided on this website is owned by us or our licensors.
          You may not reproduce, duplicate, or copy any content without
          permission.
        </p>
      </section>

      <section className="mb-6 border-b border-gray-700 pb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Warranty Disclaimer
        </h2>
        <p>
          This service is provided "as is" without any warranties, express or
          implied.
        </p>
      </section>

      <section className="mb-6 border-b border-gray-700 pb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Limitation of Liability
        </h2>
        <p>
          We are not liable for any direct, indirect, incidental, or
          consequential damages resulting from your use of the service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Your continued
          use of the service constitutes acceptance of the new terms.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
