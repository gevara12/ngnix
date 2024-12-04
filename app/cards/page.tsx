import Image from 'next/image';

export default function Cards() {
  return (
    <main className='min-h-screen'>
      <div className='container max-w-2xl mx-auto p-4 space-y-8'>
        <div className='grid grid-cols-1 gap-6 justify-center'>
          <Image
            src='/assets/photo_2024-11-09_16-01-49.jpg'
            alt='Cards'
            width={500}
            height={500}
          />
          <Image
            src='/assets/photo_2024-11-09_16-34-14.jpg'
            alt='Cards'
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
