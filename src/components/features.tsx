export default function Features() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-screen-xl pb-1 px-4 pt-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mb-4">📦</h1>
            <h3 className="text-2xl font-bold mb-2">
              No <span className="text-[#ffa500]">Installation</span>
            </h3>
            <p className="text-lg text-center">
              There is no package to install, just copy and paste the components
              you need.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mb-4">🚀</h1>
            <h3 className="text-2xl font-bold mb-2">
              Ready to be <span className="text-[#ff0000]">Shipped</span>
            </h3>
            <p className="text-lg text-center">
              The components are able to be used right away, no need to do any
              initial setup.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mb-4">💵</h1>
            <h3 className="text-2xl font-bold mb-2">
              No <span className="text-[#00ff00]">Payment</span>
            </h3>
            <p className="text-lg text-center">
              You can take, edit, and use the components without having to pay a
              dime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
