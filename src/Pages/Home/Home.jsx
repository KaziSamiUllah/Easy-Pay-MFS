const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-primary to-secondary h-[calc(100vh-4rem)] text-white py-10 flex justify-center items-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to EasyPAY
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Your one-stop solution for mobile financial services. Secure,
              Fast, and Reliable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white text-blue-600 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Seamless Transfers</h2>
                <p>
                  Transfer money instantly to any bank account or mobile wallet.
                </p>
              </div>
              <div className="p-4 bg-white text-blue-600 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Exciting Offers</h2>
                <p>Enjoy cashback and discounts on your favorite brands.</p>
              </div>
              <div className="p-4 bg-white text-blue-600 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">24/7 Support</h2>
                <p>
                  Get assistance anytime with our round-the-clock customer
                  support.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
