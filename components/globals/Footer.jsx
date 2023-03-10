const footerData = {
  rightsMessage: 'All rights reserved. 2022',

};

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <p className='text-center text-base text-gray-400'>
          {footerData.rightsMessage}
        </p>

      </div>
    </footer>
  );
}
